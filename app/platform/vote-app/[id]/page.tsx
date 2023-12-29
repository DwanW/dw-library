import AddVoteDialog from "@/app/components/vote-app/addVoteDialog";
import { Poll } from "@/app/components/vote-app/pollList";
import { getPollById } from "@/app/libs/functions";
import { Box, Flex, Grid, Section, Text } from "@radix-ui/themes";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const { id } = params;
  const { poll }: { poll: Poll } = await getPollById(id);
  return (
    <Grid columns={{ initial: "8" }}>
      <Flex
        direction="column"
        gap="3"
        pr={{
          initial: "2",
          md: "8",
        }}
        pb={{
          initial: "0",
          xs: "0",
        }}
        my={{
          initial: "0",
          xs: "8",
        }}
        justify="center"
        className="col-span-8 md:col-span-5"
      >
        <Section size="1">
          <Box>{poll.title}</Box>
          <Box>
            <AddVoteDialog pollId={id} />
          </Box>
        </Section>
        <Section size="1">
          <Box>
            <Text>current result</Text>
          </Box>
        </Section>
      </Flex>
    </Grid>
  );
}
