"use client";
import { createTag } from "@/app/libs/functions";
import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
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
    <Dialog.Root open={open}>
      <Dialog.Trigger>
        <Button variant="outline" color="green" onClick={() => setOpen(true)}>
          New Tag
        </Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Add New Tag</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Tag is used for categorizing options for your poll. ( For example:
          2023 election poll and 2024 election poll can both use the tag:
          election candidates. )
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Root
              value={name}
              placeholder="Tag name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
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
