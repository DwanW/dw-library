"use client";
import { createOption, getTags } from "@/app/libs/functions";
import {
  Button,
  Dialog,
  Flex,
  Select,
  Text,
  TextField,
} from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AddOptionDialog() {
  const router = useRouter();
  type Tag = {
    _id: string;
    name: string;
  };
  const [tags, setTags] = useState<Tag[]>([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [tag, setTag] = useState<undefined | string>(undefined);

  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    if (!title || !tag) {
      alert("title and tag are required");
      return;
    }
    const res = await createOption({
      title,
      description,
      link,
      imgUrl,
      tag,
    });
    if (res) {
      setOpen(false);
      setTitle("");
      setDescription("");
      setLink("");
      setImgUrl("");
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
          New Option
        </Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Add New Option</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Create a New Option
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Title
            </Text>
            <TextField.Root
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Option name"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Description
            </Text>
            <TextField.Root
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Option description"
            />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Link
            </Text>
            <TextField.Root
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Link"
            />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Image Url
            </Text>
            <TextField.Root
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
              placeholder="Link"
            />
          </label>

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
