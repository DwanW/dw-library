// protected route
import { Box, Flex, Section } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  return (
    <Flex direction="column" gap="3">
      <Section size="1">
        <Box height="auto">vote app</Box>
      </Section>
    </Flex>
  );
}
