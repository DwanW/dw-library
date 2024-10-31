import { Box, Button, Dialog, Flex, Text } from "@radix-ui/themes";

export default function ViewRuleDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="outline" color="crimson">
          View Rule
        </Button>
      </Dialog.Trigger>

      <Dialog.Content size="4">
        <Dialog.Title>STV Rule</Dialog.Title>

        <Box>
          <Text size="3" weight="bold" color="amber">
            How to create poll?
          </Text>
        </Box>
        <Box>
          <Text size="3">
            Before a poll can be created, a tag categorizing what type of poll
            this will be about need to be created first, some options for voter
            to choose must also be created first
          </Text>
        </Box>

        <Box mt="2">
          <Text size="3" weight="bold" color="amber">
            How are winners determined?
          </Text>
        </Box>
        <Box>
          <Text size="3">
            The winners in the Single Transferable Vote (STV) system are
            determined through a multi-round counting process. In this app,
            voters can vote upto three choices ranked by their preference.
            Winner is determined when any option has over or equal to: Total
            Votes / 3 rounded down. If no option has enough votes, option with
            lowest amount of votes is eliminated and its votes are transfered to
            other option based on their next choices. If winner has surplus
            votes, these votes are also transfered. If no one has enough votes,
            and the amount of winner spots left is equal to number of remaining
            options, these options will automatically become winners
          </Text>
        </Box>

        <Box mt="2">
          <Text size="3" weight="bold" color="amber">
            What is used to break ties?
          </Text>
        </Box>
        <Box>
          <Text size="3">
            When two options has the same lowest amount of votes, options with
            votes that are relatively newer will get eliminated.
          </Text>
        </Box>

        <Box mt="2">
          <Text size="3" weight="bold" color="amber">
            Which part of surplus votes are getting transfered
          </Text>
        </Box>
        <Box>
          <Text size="3">
            When surplus votes are transfered, relatively newer votes are
            transferred compare to older votes.
          </Text>
        </Box>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Okay
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
