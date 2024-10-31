import AddVoteDialog from "@/app/components/vote-app/addVoteDialog";
import PollChart from "@/app/components/vote-app/pollChart";
import { Poll } from "@/app/components/vote-app/pollList";
import { getPollById } from "@/app/libs/functions";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

export type VoteStats = [
  Option,
  {
    firstOption: number;
    secondOption: number;
    thirdOption: number;
  }
][];

export default async function Page({ params }: Props) {
  const { id } = params;
  const {
    poll,
    result,
    count,
    voteStats,
  }: {
    poll: Poll;
    result: [Option, Vote[]][] | undefined;
    count: number;
    voteStats: VoteStats;
  } = await getPollById(id);

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
        className="col-span-8"
      >
        <Section size="1">
          <Box>
            <Text size="5" className="capitalize" weight="bold" color="gold">
              {poll.title}
            </Text>
          </Box>

          <Box>
            <Text size="2">{poll.description}</Text>
          </Box>

          <Box mt="4">
            <AddVoteDialog
              pollId={id}
              pollTag={poll.tag}
              pollEndDate={poll.endDate}
            />
          </Box>
        </Section>

        <Section size="1">
          <Box>
            <Text size="3">
              Number of votes collected:{" "}
              <Text weight="bold" color="crimson">
                {count}
              </Text>
            </Text>
          </Box>
          <Box>
            <Text size="3">
              Minimum Number of votes to win:{" "}
              <Text weight="bold" color="crimson">
                {count < 3
                  ? "Not enough votes for poll"
                  : Math.floor(count / 3)}
              </Text>
            </Text>
          </Box>
        </Section>
        {result ? (
          <Section size="1">
            <Box>
              <Text size="3" weight="bold">
                Current Result:
              </Text>
            </Box>
            <Box mt="4">
              {result.map((winner, idx) => (
                <Flex align="center" mb="2" key={idx}>
                  <Box display="inline" mr="2" width="24px" height="24px">
                    <FontAwesomeIcon
                      icon={faCrown}
                      size="xs"
                      color={
                        idx === 0
                          ? "#FFD700"
                          : idx === 1
                          ? "#C0C0C0"
                          : "#CD7F32"
                      }
                    />
                  </Box>
                  <Text size="1" weight="bold" color="brown">
                    {winner[0]?.title}
                  </Text>
                </Flex>
              ))}
            </Box>
            <Box>
              <PollChart voteStats={voteStats} />
            </Box>
          </Section>
        ) : (
          <Section size="1">
            <Text>No results available</Text>
          </Section>
        )}
      </Flex>
    </Grid>
  );
}
