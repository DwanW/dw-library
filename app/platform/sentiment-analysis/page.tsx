// protected route

import SentimentAnalysis from "@/app/components/sentiment-analyzer/sentimentAnalysis";
import { Box, Flex, Section, Text } from "@radix-ui/themes";
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
        <Box>
          <Text size="5" weight="bold">
            Analyze Text Sentiment
          </Text>
        </Box>
        <Box mt="2"></Box>
      </Section>
      <Section size="1">
        <Flex gap="3" justify="end"></Flex>
        <Box>
          <SentimentAnalysis />
        </Box>
      </Section>
    </Flex>
  );
}
