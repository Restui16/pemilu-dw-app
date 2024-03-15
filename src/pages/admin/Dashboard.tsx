import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import IVoter from "../../interface/IVoter";
import ICandidate from "../../interface/ICandidate";
import Candidate from "../../components/elements/cards/Candidate";
import ListData from "../../components/elements/table/ListData";

interface CandidateVote {
  id: number;
  no_candidate: number;
  name: string;
  votes: number;
}

type Props = {
  voters: IVoter[];
  isAdmin?: boolean;
  candidates: ICandidate[];
};

const Dashboard: React.FC<Props> = ({ voters, candidates }) => {
  const [theadData] = useState<string[]>([
    "No",
    "Name",
    "Alamat",
    "Jenis Kelamin",
    "Paslon",
  ]);

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

  const totalVotes = candidateVotes
    .map((votes) => votes.votes)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <>
      <Navbar to="/dashboard" titleBrand="PEMILU DASHBOARD">
        <Link
          to={"/list-partai"}
          className="hidden md:inline-block text-2xl hover:font-bold"
        >
          Partai
        </Link>
        |
        <Link
          to={"/list-paslon"}
          className="hidden md:inline-block text-2xl hover:font-bold"
        >
          Paslon
        </Link>
        |
        <Link
          to={"/list-article"}
          className="hidden md:inline-block text-2xl hover:font-bold"
        >
          Article
        </Link>
      </Navbar>
      <main>
        <section className="bg-white px-24 py-10">
          <h1 className="font-black text-5xl text-[#5E5400] text-center">
            Dashboard
          </h1>
          <div className="flex items-center gap-2 mt-16">
            {candidates.map((candidate) => {
              const accVoteCandidate = candidateVotes.find(el => el.id === candidate.id)
            
              return (
                <Candidate
                  key={candidate.id}
                  total_vote={totalVotes}
                  candidate={candidate}
                  acc_vote={accVoteCandidate?.votes ?? 0}
                />
              );
            })}
          </div>
        </section>

        <section className="py-[10rem] px-24">
          <h1 className="text-center text-[#5E5400] text-5xl font-black uppercase">
            List Voter
          </h1>
          <div className="px-16">
            <ListData
              childrenHead={
                <tr>
                  {theadData.map((data, index) => (
                    <th
                      key={index}
                      className="border border-[#828282] py-3 px-3"
                    >
                      {data}
                    </th>
                  ))}
                </tr>
              }
              childrenBody={voters.map((voter, index) => (
                <tr key={voter.id}>
                  <td className="border border-[#828282] py-3 px-3">
                    {index + 1}
                  </td>
                  <td className="border border-[#828282] py-3 px-3">
                    {voter.user.fullname}
                  </td>
                  <td className="border border-[#828282] py-3 px-3">
                    {voter.user.address}
                  </td>
                  <td className="border border-[#828282] py-3 px-3">
                    {voter.user.gender}
                  </td>
                  <td className="border border-[#828282] py-3 px-3">
                    {voter.candidate.name}
                  </td>
                </tr>
              ))}
            />

            <h1 className="mt-10 font-bold text-2xl">
              TOTAL SUARA TERKUMPUL : {voters.length} Voters
            </h1>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
