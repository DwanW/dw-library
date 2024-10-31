"use client";
import {
  createVote,
  getOptionsByTag,
  getVoteByEmailAndPoll,
} from "@/app/libs/functions";
import { Button, Dialog, Flex, Select } from "@radix-ui/themes";
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
    <Dialog.Root open={open}>
      <Dialog.Trigger>
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
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Cast Vote</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Cast a Vote
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <Select.Root
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
            <Select.Trigger placeholder="Pick First Option" />
            <Select.Content position="popper">
              <Select.Group>
                <Select.Label>Options</Select.Label>
                {options.map((o, idx) => (
                  <Select.Item key={o._id} value={o._id}>
                    {o.title}
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Content>
          </Select.Root>

          <Select.Root
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
            <Select.Trigger placeholder="Pick Second Option" />
            <Select.Content position="popper">
              <Select.Group>
                <Select.Label>Options</Select.Label>
                {options.map(
                  (o, idx) =>
                    o._id !== firstOption && (
                      <Select.Item key={o._id} value={o._id}>
                        {o.title}
                      </Select.Item>
                    )
                )}
              </Select.Group>
            </Select.Content>
          </Select.Root>

          <Select.Root
            key={thirdOption}
            value={thirdOption}
            onValueChange={(v) => setThirdOption(v)}
            disabled={!secondOption}
          >
            <Select.Trigger placeholder="Pick Third Option" />
            <Select.Content position="popper">
              <Select.Group>
                <Select.Label>Options</Select.Label>
                {options.map(
                  (o, idx) =>
                    o._id !== firstOption &&
                    o._id !== secondOption && (
                      <Select.Item key={o._id} value={o._id}>
                        {o.title}
                      </Select.Item>
                    )
                )}
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={handleSubmit}>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
