import AddVoteDialog from "@/app/components/vote-app/addVoteDialog";
import { Poll } from "@/app/components/vote-app/pollList";
import { getPollById } from "@/app/libs/functions";
import { Box, Flex, Grid, Section, Text } from "@radix-ui/themes";

type Props = {
  params: {
    id: string;
  };
};

type Option = {
  _id: string;
  title: string;
};

type Vote = {
  _id: string;
  email: string;
  poll: string;
  firstOption: string;
  secondOption: string | undefined;
  thirdOption: string | undefined;
  createdAt: string;
};

export default async function Page({ params }: Props) {
  const { id } = params;
  const {
    poll,
    result,
  }: { poll: Poll; result: [Option, Vote[]][] | undefined } = await getPollById(
    id
  );
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
          <Box>
            {result ? (
              result.map((winner, idx) => (
                <Box key={idx}>
                  <Text>
                    {idx + 1}. {winner[0]?.title}
                  </Text>
                </Box>
              ))
            ) : (
              <Text>No results available</Text>
            )}
          </Box>
        </Section>
      </Flex>
    </Grid>
  );
}
