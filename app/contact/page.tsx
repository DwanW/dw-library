import { Box, Flex, Section, Text } from "@radix-ui/themes";

export default function Page() {
  return (
    <Flex direction="column" gap="3">
      <Section size="1">
        <Box height="5">
          <Text> what I am upto, and what I am looking for</Text>
        </Box>
      </Section>
      <Section size="1">
        <Box height="5">
          <Text>contact item list</Text>
        </Box>
      </Section>
    </Flex>
  );
}
