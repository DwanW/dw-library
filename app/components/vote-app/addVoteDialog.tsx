"use client";
import { createVote, getOptions, getVoteByEmail } from "@/app/libs/functions";
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

export default function AddVoteDialog({ pollId }: { pollId: string }) {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  if (!userEmail) {
    redirect("/api/auth/signin");
  }
  const router = useRouter();
  const [options, setOptions] = useState<Option[]>([]);

  const [myVote, setMyVote] = useState<Vote | undefined>(undefined);
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
      const data = await getOptions();
      const voteData = await getVoteByEmail(userEmail);
      setOptions(data.options);
      setMyVote(voteData.vote);
    })();
  }, []);

  return (
    <DialogRoot open={open}>
      <DialogTrigger>
        <Button onClick={() => setOpen(true)} disabled={!!myVote}>
          {myVote ? "Voted" : "Cast Vote"}
        </Button>
      </DialogTrigger>

      <DialogContent style={{ maxWidth: 450 }}>
        <DialogTitle>Cast Vote</DialogTitle>
        <DialogDescription size="2" mb="4">
          Cast a Vote
        </DialogDescription>

        <Flex direction="column" gap="3">
          <SelectRoot
            value={firstOption}
            onValueChange={(v) => setFirstOption(v)}
          >
            <SelectTrigger placeholder="Pick First Option" />
            <SelectContent>
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
            value={secondOption}
            onValueChange={(v) => setSecondOption(v)}
          >
            <SelectTrigger placeholder="Pick Second Option" />
            <SelectContent>
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
            value={thirdOption}
            onValueChange={(v) => setThirdOption(v)}
          >
            <SelectTrigger placeholder="Pick Third Option" />
            <SelectContent>
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
