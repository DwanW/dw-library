"use client";
import { createPoll, getTags } from "@/app/libs/functions";
import {
  Button,
  Dialog,
  Flex,
  Select,
  Switch,
  Text,
  TextField,
} from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AddPollDialog() {
  const router = useRouter();
  type Tag = {
    _id: string;
    name: string;
  };
  const [tags, setTags] = useState<Tag[]>([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [endDate, setEndDate] = useState("");
  // const [isPrivate, setIsPrivate] = useState(false);
  // const [passPhrase, setPassPhrase] = useState("");
  const [tag, setTag] = useState<undefined | string>(undefined);

  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    if (!title || !endDate || !tag) {
      alert("name, end date and tag are required");
      return;
    }
    const res = await createPoll({
      title,
      description,
      endDate: new Date(endDate),
      // isPrivate,
      // passPhrase,
      tag,
    });
    if (res) {
      setOpen(false);
      setTitle("");
      setDescription("");
      setEndDate("");
      // setIsPrivate(false);
      // setPassPhrase("");
      setTag(undefined);
      router.refresh();
    }
  };

  useEffect(() => {
    (async () => {
      const data = await getTags();
      if (data) {
        setTags(data.tags);
      }
    })();
  }, []);

  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger>
        <Button variant="outline" color="green" onClick={() => setOpen(true)}>
          New Poll
        </Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Add New Poll</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Create a New Poll
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Title
            </Text>
            <TextField.Root
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Poll name"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Description
            </Text>
            <TextField.Root
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Poll description"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              End Date
            </Text>
            <TextField.Root
              value={endDate || ""}
              onChange={(e) => setEndDate(e.target.value)}
              type="date"
              defaultValue=""
            />
          </label>

          {/* <Text as="label" size="2">
            <Flex gap="2">
              <Switch
                defaultChecked={isPrivate}
                onCheckedChange={(checked) => setIsPrivate(!checked)}
              />{" "}
              Private Poll
            </Flex>
          </Text> */}

          {/* <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Passphrase
            </Text>
            <TextField.Root
              value={passPhrase}
              onChange={(e) => setPassPhrase(e.target.value)}
              placeholder="Passphrase"
            />
          </label> */}

          <Select.Root value={tag} onValueChange={(v) => setTag(v)}>
            <Select.Trigger placeholder="Pick a Tag" />
            <Select.Content>
              <Select.Group>
                <Select.Label>Options</Select.Label>
                {tags.map((t, idx) => (
                  <Select.Item key={t._id} value={t._id}>
                    {t.name}
                  </Select.Item>
                ))}
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
