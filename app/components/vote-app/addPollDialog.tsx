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

export default function AddPollDialog() {
  return (
    <DialogRoot>
      <DialogTrigger>
        <Button>New Poll</Button>
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
            <TextFieldInput defaultValue="" placeholder="Poll name" />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Description
            </Text>
            <TextFieldInput defaultValue="" placeholder="Poll description" />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              End Date
            </Text>
            <TextFieldInput type="date" defaultValue="" />
          </label>

          <Text as="label" size="2">
            <Flex gap="2">
              <Switch defaultChecked={false} /> Private Poll
            </Flex>
          </Text>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Passphrase
            </Text>
            <TextFieldInput defaultValue="" placeholder="Passphrase" />
          </label>

          <SelectRoot defaultValue="">
            <SelectTrigger placeholder="Pick a Tag" />
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Options</SelectLabel>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="apple">Apple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </SelectRoot>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <DialogClose>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose>
            <Button>Save</Button>
          </DialogClose>
        </Flex>
      </DialogContent>
    </DialogRoot>
  );
}
