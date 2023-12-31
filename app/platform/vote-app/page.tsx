// protected route
import AddOptionDialog from "@/app/components/vote-app/addOptionDialog";
import AddPollDialog from "@/app/components/vote-app/addPollDialog";
import AddTagDialog from "@/app/components/vote-app/addTagDialog";
import PollList from "@/app/components/vote-app/pollList";
import { Box, Flex, Section, Text, Tooltip } from "@radix-ui/themes";
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
        <Text size="5" weight="bold">
          Create your own{" "}
          <Tooltip content="Single Transferable Vote">
            <Text color="indigo">(STV)</Text>
          </Tooltip>{" "}
          Poll
        </Text>
      </Section>
      <Section size="1">
        <Flex gap="3" justify="end">
          <AddTagDialog />
          <AddPollDialog />
          <AddOptionDialog />
        </Flex>
        <Box>
          <PollList />
        </Box>
      </Section>
    </Flex>
  );
}
