"use client";
import { createPoll, getTags } from "@/app/libs/functions";
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
  Switch,
  Text,
  TextFieldInput,
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

      setTags(data.tags);
    })();
  }, []);

  return (
    <DialogRoot open={open}>
      <DialogTrigger>
        <Button
          variant="outline"
          color="green"
          onClick={() => setOpen(true)}
        >
          New Poll
        </Button>
      </DialogTrigger>

      <DialogContent style={{ maxWidth: 450 }}>
        <DialogTitle>Add New Poll</DialogTitle>
        <DialogDescription size="2" mb="4">
          Create a New Poll
        </DialogDescription>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Title
            </Text>
            <TextFieldInput
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Poll name"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Description
            </Text>
            <TextFieldInput
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Poll description"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              End Date
            </Text>
            <TextFieldInput
              value={endDate}
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
            <TextFieldInput
              value={passPhrase}
              onChange={(e) => setPassPhrase(e.target.value)}
              placeholder="Passphrase"
            />
          </label> */}

          <SelectRoot value={tag} onValueChange={(v) => setTag(v)}>
            <SelectTrigger placeholder="Pick a Tag" />
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Options</SelectLabel>
                {tags.map((t, idx) => (
                  <SelectItem key={t._id} value={t._id}>
                    {t.name}
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
