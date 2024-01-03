import { ObjectId } from "mongoose";

type Vote = {
  _id: ObjectId;
  email: string;
  poll: string;
  firstOption: ObjectId;
  secondOption: ObjectId | undefined;
  thirdOption: ObjectId | undefined;
  createdAt: Date;
};
type Option = {
  _id: ObjectId;
};

type VoteStats = {
  [key: string]: {
    firstOption: number;
    secondOption: number;
    thirdOption: number;
  };
};

type Winners = [string, Vote[]][];

export const getPollResult = (
  votes: Vote[],
  options: Option[]
): { winners: Winners; voteStats: VoteStats } => {
  if (votes.length < 3) {
    // minimum number of votes required to process the result.
    return { winners: [], voteStats: {} };
  }
  let winners: Winners = [];
  let losers = [];
  let totalVotesNeededToWin = Math.floor(votes.length / 3);

  let ballot = votes.sort((a, b) =>
    a.createdAt.toISOString() < b.createdAt.toISOString() ? -1 : 1
  );

  let initialVoteResult: {
    [key: string]: Vote[];
  } = {};

  let voteStats: VoteStats = {};

  // initialize map
  options.forEach((o) => {
    initialVoteResult[o._id.toString()] = [];

    voteStats[o._id.toString()] = {
      firstOption: 0,
      secondOption: 0,
      thirdOption: 0,
    };
  });

  ballot.forEach((v) => {
    // firstOption
    initialVoteResult[v.firstOption.toString()] =
      initialVoteResult[v.firstOption.toString()].concat(v);

    voteStats[v.firstOption.toString()].firstOption += 1;
    //secondOption
    if (v.secondOption !== undefined) {
      voteStats[v.secondOption.toString()].secondOption += 1;
    }
    //thirdOption
    if (v.thirdOption !== undefined) {
      voteStats[v.thirdOption.toString()].thirdOption += 1;
    }
  });

  let result = Object.entries(initialVoteResult).sort(
    (a, b) =>
      a[1].length - b[1].length ||
      b[1].reduce((t, v) => t + v.createdAt.getTime(), 0) -
        a[1].reduce((t, v) => t + v.createdAt.getTime(), 0)
  );
  // Single Transferable Vote (STV) algorithm (In Place)
  while (result.length > 0) {
    // check winner
    while (
      result[result.length - 1] &&
      result[result.length - 1][1].length >= totalVotesNeededToWin &&
      winners.length < 3
    ) {
      let winner = result.pop();

      if (winner) {
        if (winner[1].length > totalVotesNeededToWin) {
          // move winner surplus vote to next ranked option
          let surplus = winner[1].splice(totalVotesNeededToWin);

          let winnerId = winner[0];
          surplus.forEach((s) => {
            if (winnerId === s.firstOption.toString() && s.secondOption) {
              const nextOptionIdx = result.findIndex(
                (arr) => arr[0] === (s.secondOption || "").toString()
              );
              console.log(result[nextOptionIdx], 1);
              if (nextOptionIdx > -1) {
                result[nextOptionIdx][1].push(s);
              }
            } else if (
              winnerId === (s.secondOption || "").toString() &&
              s.thirdOption
            ) {
              const nextOptionIdx = result.findIndex(
                (arr) => arr[0] === (s.thirdOption || "").toString()
              );
              if (nextOptionIdx > -1) {
                result[nextOptionIdx][1].push(s);
              }
            }
          });
        }
        // move winner to winners group
        winners.push(winner);
        // sort result again
        result = result.sort((a, b) => a[1].length - b[1].length);
      }
    }
    // check if there's enough winners already;
    if (winners.length === 3) {
      break;
    } else if (3 - winners.length >= result.length) {
      // if there isn't enough winner, and seat left >= result.length, then add the rest from right to left to winner.
      //   console.log("???", winners, result);
      result.reverse().forEach((arr) => {
        winners.push(arr);
      });
      break;
    }

    // check 1 loser at a time
    if (result[0]) {
      let loser = result.shift();
      // move loser vote to other group based on lower ranked option
      if (loser) {
        let loserVote = loser[1];
        let loserId = loser[0];
        loserVote.forEach((v) => {
          if (loserId === v.firstOption.toString() && v.secondOption) {
            const nextOptionIdx = result.findIndex(
              (arr) => arr[0] === (v.secondOption || "").toString()
            );
            if (nextOptionIdx > -1) {
              result[nextOptionIdx][1].push(v);
            }
          } else if (
            loserId === (v.secondOption || "").toString() &&
            v.thirdOption
          ) {
            const nextOptionIdx = result.findIndex(
              (arr) => arr[0] === (v.thirdOption || "").toString()
            );
            if (nextOptionIdx > -1) {
              result[nextOptionIdx][1].push(v);
            }
          }
        });
      }
      // move loser to loser group
      losers.push(loser);
      // sort result again
      result = result.sort((a, b) => a[1].length - b[1].length);
    }
  }
  return { winners, voteStats };
};
