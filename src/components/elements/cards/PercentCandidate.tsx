import React from "react";

type Props = {
  no: number;
  name: string;
  accVote: number;
  totalVote: number
};

const PercentCandidate: React.FC<Props> = ({ no, name, accVote, totalVote }) => {
  return (
    <div className="flex gap-5 items-center bg-[#FF6384] p-4 rounded-lg shadow-xl shadow-[#CC5B5B80] border-b-4 border-[#CC5B5B80]">
      <div className="w-20 h-28 p-2 text-center text-white bg-[#5E0000] rounded-lg flex flex-col justify-center">
        <h1 className="text-base font-bold">No. Paslon</h1>
        <h1 className="text-3xl font-bold">{no}</h1>
      </div>
      <div className="">
        <h1 className="text-stroke-white text-4xl font-black text-[#5E0000]">
          {name}
        </h1>
        <p className="text-stroke-white text-3xl font-bold text-[#5E0000]">
          {`${((accVote / totalVote) * 100).toFixed()}%`}
        </p>
      </div>
    </div>
  );
};

export default PercentCandidate;
