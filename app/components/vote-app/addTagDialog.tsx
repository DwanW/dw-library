"use client";
import { createTag } from "@/app/libs/functions";
import {
  Button,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  Flex,
  Text,
  TextFieldInput,
} from "@radix-ui/themes";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTagDialog() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    if (!name) {
      alert("name is required");
      return;
    }
    const res = await createTag({ name });
    if (res) {
      setOpen(false);
      setName("");
      router.refresh();
    }
  };

  return (
    <DialogRoot open={open}>
      <DialogTrigger>
        <Button variant="outline" color="grass" onClick={() => setOpen(true)}>New Tag</Button>
      </DialogTrigger>

      <DialogContent style={{ maxWidth: 450 }}>
        <DialogTitle>Add New Tag</DialogTitle>
        <DialogDescription size="2" mb="4">
          Tag is used for categorizing options for your poll. ( For example:
          2023 election poll and 2024 election poll can both use the tag:
          election candidates. )
        </DialogDescription>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextFieldInput
              value={name}
              placeholder="Tag name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
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
