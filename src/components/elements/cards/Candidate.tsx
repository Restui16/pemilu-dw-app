import React from "react";
import ICandidate from "../../../interface/ICandidate";

type Props = {
  candidate: ICandidate;
  acc_vote: number 
  total_vote: number
};

const Candidate: React.FC<Props> = ({ candidate, acc_vote, total_vote }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="w-[73px] h-[73px] text-center text-[#5E5400] border-4 text-[40px] font-bold border-[#5E5400] rounded-full bg-[#FFCD56]">
        {candidate.no_candidate}
      </div>
      <div className="bg-[#FFCD56] rounded-lg p-5 w-[24rem] h-[30rem] shadow-xl shadow-[#5D5400]">
        <img
          src={`/src/assets/images/${candidate.image}`}
          className="bg-cover bg-center rounded-lg"
          alt=""
        />
        <h1 className="uppercase text-[#5E5400] text-3xl text-stroke-white mt-3 font-bold text-wrap">
          {candidate.name}
        </h1>
        <h1 className=" text-[#5E5400] text-2xl">Akumulasi: {`${((acc_vote / total_vote ) * 100).toFixed()}%`}</h1>
        <h1 className=" text-[#5E5400] text-2xl">
          Jumlah Vote: {acc_vote}
        </h1>
      </div>
    </div>
  );
};

export default Candidate;
