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

type Vote = {
  _id: string;
  email: string;
  poll: string;
  firstOption: string;
  secondOption: string | undefined;
  thirdOption: string | undefined;
  createdAt: string;
};

const getVotingResult = (votes: Vote[]) => {
  if (votes.length < 3) {
    // minimum number of votes required to process the result.
    return;
  }
  let winners: [string, Vote[]][] = [];
  let losers = [];
  let totalVotesNeededToWin = Math.floor(votes.length / 3);

  let ballot = votes.sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1));

  let initialVoteResult: {
    [key: string]: Vote[];
  } = {};

  ballot.forEach((v) => {
    initialVoteResult[v.firstOption] = initialVoteResult[v.firstOption]
      ? initialVoteResult[v.firstOption].concat(v)
      : [v];
  });

  let result = Object.entries(initialVoteResult).sort(
    (a, b) => a[1].length - b[1].length
  );

  // Single Transferable Vote (STV) algorithm (In Place)
  while (result.length > 0) {
    while (
      result[result.length - 1][1].length > totalVotesNeededToWin &&
      winners.length < 3
    ) {
      // move winner surplus vote to lower ranked option
      // move winner to winners group
      // sort result again
    }
    // check if there's enough winners break;
    if (winners.length === 3) {
      break;
    } else if (3 - winners.length >= result.length) {
      // if there isn't enough winner, and seat left >= result.length, then add the rest to winner.
      break;
    }

    // check 1 loser at a time

    // move loser vote to other group based on lower ranked option
    // move loser to loser group
    // sort result again
  }

  return winners;
};
