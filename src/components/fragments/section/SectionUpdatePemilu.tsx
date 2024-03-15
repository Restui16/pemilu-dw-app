import React from "react";
import PieChart from "../../elements/charts/PieChart";
import IVoter from "../../../interface/IVoter";
import PercentCandidate from "../../elements/cards/PercentCandidate";
import ICandidate from "../../../interface/ICandidate";

interface CandidateVote {
  id: number;
  no_candidate: number;
  name: string;
  votes: number;
}

type Props = {
  voters: IVoter[];
  candidates: ICandidate[]
  handleModalVote: () => void;
};

const SectionUpdatePemilu: React.FC<Props> = ({ voters, candidates, handleModalVote }) => {
  const candidateVotes: CandidateVote[] = voters.reduce(
    (acc: CandidateVote[], { candidate }) => {
      const { id, no_candidate, name } = candidate;
      const existingCandidate = acc.find((c) => c.id === id);

      if (existingCandidate) {
        existingCandidate.votes += 1;
      } else {
        acc.push({ id, no_candidate, name, votes: 1 });
      }

      return acc;
    },
    []
  );

  const labels = candidateVotes.map((candidate) => candidate.name);
  const series = candidateVotes.map((vote) => vote.votes);
  const totalVotes = candidateVotes
    .map((votes) => votes.votes)
    .reduce((acc, curr) => acc + curr, 0);

  // voters.forEach((voter) => {
  //   const candidateName: string = voter.candidate.name;
  //   const candidateId: number = voter.candidate.id;
  //   candidateVotes[candidateId] = (candidateVotes[candidateId] || 0) + 1;
  // });

  // const series: number[] = Object.values(candidateVotes);
  // const labels: string[] = Object.keys(candidateVotes);
  // const totalVotes = Object.values(candidateVotes).reduce(
  //   (acc, curr) => acc + curr,
  //   0
  // );

  return (
    <section className="bg-white px-24 pt-20 pb-10">
      <h1 className="text-[#5E5400] text-center font-black text-3xl md:text-5xl">
        INFO PEMILU TERUPDATE
      </h1>
      <div className="flex flex-col lg:flex-row gap-5 justify-between mt-10">
        <div className="flex flex-col justify-center items-center gap-7">
          <h1 className="text-4xl font-black">Hasil :</h1>
          <div id="chart" className="w-[30rem]">
            <PieChart labels={labels} series={series} />
          </div>
        </div>

        <div className="flex flex-col grow gap-3">
          {candidates.map((candidate) => {
            const accVote = candidateVotes.find(el => el.id === candidate.id)

            return (
              <PercentCandidate
                key={candidate.id}
                no={candidate.no_candidate}
                name={candidate.name}
                accVote={accVote?.votes ?? 0}
                totalVote={totalVotes}
              />
            );
          })}
        </div>
      </div>

      <div className="flex justify-center items-center mt-10">
        <button
          className="rounded-lg text-3xl bg-[#5E5400] px-12 py-2 font-bold text-white"
          onClick={handleModalVote}
        >
          Masukan Suaramu
        </button>
      </div>
    </section>
  );
};

export default SectionUpdatePemilu;
