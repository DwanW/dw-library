import AuthButton from "@/app/components/authButton";
import { Box, Flex, Section } from "@radix-ui/themes";

export default function Page() {
  return (
    <Flex direction="column" gap="3">
      <Section size="1">
        <Box height="auto">
          <AuthButton />
        </Box>
      </Section>
    </Flex>
  );
}
