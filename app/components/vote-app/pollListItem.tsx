import { Badge, Box, Flex, Text } from "@radix-ui/themes";
import { Poll } from "./pollList";

export default function PollListItem({ poll }: { poll: Poll }) {
  const currentDate = new Date().toISOString();
  return (
    <Box className="relative px-1 h-24">
      <Flex direction="column" className="h-full">
        <Text weight="bold" color="gold">
          {poll.title}
        </Text>
        <Box mt="1">
          <Text color="gray" size="2">
            {poll.description}
          </Text>
        </Box>
        <Box className="mt-auto">
          {currentDate > poll.endDate ? (
            <Badge color="gray">
              Ended on{" "}
              {new Date(poll.endDate).toLocaleString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </Badge>
          ) : (
            <Badge color="green">
              End on{" "}
              {new Date(poll.endDate).toLocaleString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </Badge>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
