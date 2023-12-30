import { Box, Flex, Text } from "@radix-ui/themes";
import { Poll } from "./pollList";

export default function PollListItem({ poll }: { poll: Poll }) {
  return (
    <Box className="relative pt-4 px-1 h-32">
      <Flex direction="column" className="h-full">
        <Text weight="bold" color="gold">
          {poll.title}
        </Text>
        <Box mt="1">
          <Text color="gray" size="2">
            {poll.description}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}