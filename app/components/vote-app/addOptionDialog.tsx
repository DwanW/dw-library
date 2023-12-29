"use client";
import { createOption, getTags } from "@/app/libs/functions";
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
  Text,
  TextFieldInput,
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

      setTags(data.tags);
    })();
  }, []);

  return (
    <DialogRoot open={open}>
      <DialogTrigger>
        <Button onClick={() => setOpen(true)}>New Option</Button>
      </DialogTrigger>

      <DialogContent style={{ maxWidth: 450 }}>
        <DialogTitle>Add New Option</DialogTitle>
        <DialogDescription size="2" mb="4">
          Create a New Option
        </DialogDescription>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Title
            </Text>
            <TextFieldInput
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Option name"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Description
            </Text>
            <TextFieldInput
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Option description"
            />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Link
            </Text>
            <TextFieldInput
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Link"
            />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Image Url
            </Text>
            <TextFieldInput
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
              placeholder="Link"
            />
          </label>

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
