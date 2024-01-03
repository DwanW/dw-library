"use client";
import {
  createVote,
  getOptionsByTag,
  getVoteByEmailAndPoll,
} from "@/app/libs/functions";
import {
  Button,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  Flex,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
} from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { useRouter, redirect } from "next/navigation";
import { useSession } from "next-auth/react";
type Option = {
  _id: string;
  title: string;
};

type Vote = {
  _id: string;
  email: string;
  poll: string;
  firstOption: string;
  secondOption: string | undefined;
  thirdOption: string | undefined;
};

export default function AddVoteDialog({
  pollId,
  pollTag,
  pollEndDate,
}: {
  pollId: string;
  pollTag: string;
  pollEndDate: string;
}) {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  if (!userEmail) {
    redirect("/api/auth/signin");
  }
  const currentDate = new Date().toISOString();
  const router = useRouter();
  const [options, setOptions] = useState<Option[]>([]);

  const [myVote, setMyVote] = useState<Vote | undefined>(undefined);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [firstOption, setFirstOption] = useState<string | undefined>(undefined);
  const [secondOption, setSecondOption] = useState<string | undefined>(
    undefined
  );
  const [thirdOption, setThirdOption] = useState<string | undefined>(undefined);

  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    if (!firstOption) {
      alert("firstOption is required");
      return;
    }
    const newVote = {
      email: userEmail,
      poll: pollId,
      firstOption,
      secondOption,
      thirdOption,
    };

    const res = await createVote(newVote);
    if (res) {
      setOpen(false);
      setFirstOption(undefined);
      setSecondOption(undefined);
      setThirdOption(undefined);
      setMyVote(res.data);
      router.refresh();
    }
  };

  useEffect(() => {
    (async () => {
      const data = await getOptionsByTag(pollTag);
      const voteData = await getVoteByEmailAndPoll(userEmail, pollId);
      setOptions(data.options);
      setMyVote(voteData.vote);
      setDataLoaded(true);
    })();
  }, []);

  return (
    <DialogRoot open={open}>
      <DialogTrigger>
        <Button
          variant="outline"
          color="green"
          onClick={() => setOpen(true)}
          disabled={!!myVote || !dataLoaded || pollEndDate < currentDate}
        >
          {pollEndDate < currentDate
            ? "Poll Ended"
            : dataLoaded
            ? myVote
              ? "Voted"
              : "Cast Vote"
            : "loading"}
        </Button>
      </DialogTrigger>

      <DialogContent style={{ maxWidth: 450 }}>
        <DialogTitle>Cast Vote</DialogTitle>
        <DialogDescription size="2" mb="4">
          Cast a Vote
        </DialogDescription>

        <Flex direction="column" gap="3">
          <SelectRoot
            key={firstOption}
            value={firstOption}
            onValueChange={(v) => {
              setFirstOption(v);
              if (v === secondOption) {
                setSecondOption(undefined);
                setThirdOption(undefined);
              }
              if (v === thirdOption) {
                setThirdOption(undefined);
              }
            }}
          >
            <SelectTrigger placeholder="Pick First Option" />
            <SelectContent position="popper">
              <SelectGroup>
                <SelectLabel>Options</SelectLabel>
                {options.map((o, idx) => (
                  <SelectItem key={o._id} value={o._id}>
                    {o.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </SelectRoot>

          <SelectRoot
            key={secondOption}
            value={secondOption}
            onValueChange={(v) => {
              setSecondOption(v);
              if (v === thirdOption) {
                setThirdOption(undefined);
              }
            }}
            disabled={!firstOption}
          >
            <SelectTrigger placeholder="Pick Second Option" />
            <SelectContent position="popper">
              <SelectGroup>
                <SelectLabel>Options</SelectLabel>
                {options.map(
                  (o, idx) =>
                    o._id !== firstOption && (
                      <SelectItem key={o._id} value={o._id}>
                        {o.title}
                      </SelectItem>
                    )
                )}
              </SelectGroup>
            </SelectContent>
          </SelectRoot>

          <SelectRoot
            key={thirdOption}
            value={thirdOption}
            onValueChange={(v) => setThirdOption(v)}
            disabled={!secondOption}
          >
            <SelectTrigger placeholder="Pick Third Option" />
            <SelectContent position="popper">
              <SelectGroup>
                <SelectLabel>Options</SelectLabel>
                {options.map(
                  (o, idx) =>
                    o._id !== firstOption &&
                    o._id !== secondOption && (
                      <SelectItem key={o._id} value={o._id}>
                        {o.title}
                      </SelectItem>
                    )
                )}
              </SelectGroup>
            </SelectContent>
          </SelectRoot>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <DialogClose>
            <Button variant="soft" color="gray" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DialogClose>
          <DialogClose>
            <Button onClick={handleSubmit}>Save</Button>
          </DialogClose>
        </Flex>
      </DialogContent>
    </DialogRoot>
  );
}
