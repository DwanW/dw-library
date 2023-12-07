import { Box, Flex, Section, Text } from "@radix-ui/themes";

export default function Page() {
  return (
    <Flex direction="column" gap="3">
      <Section size="1">
        <Box height="5">
          <Text>work passion summary</Text>
        </Box>
      </Section>
      <Section size="1">
        <Box height="5">
          <Text>skill cards</Text>
        </Box>
      </Section>
      <Section size="1">
        <Box height="5">
          <Text>work history timeline</Text>
        </Box>
      </Section>
      <Section size="1">
        <Box height="5">
          <Text>education list</Text>
        </Box>
      </Section>
    </Flex>
  );
}
