import React from "react";
import { IoMdClose } from "react-icons/io";
import ICandidate from "../../../interface/ICandidate";
import { IoCloseOutline } from "react-icons/io5";

interface Props {
  candidates: ICandidate[];
  //   handleReset: () => void;
  //   handleSubmit: () => void;
  handleCloseModal: () => void;
}

const ModalVote: React.FC<Props> = ({
  candidates,
  //   handleReset,
  //   handleSubmit,
  handleCloseModal,
}) => {
  return (
    <div className="w-full h-full fixed top-0 left-0 z-20 overflow-auto px-12  md:px-24">
      <div className=" bg-white w-full mx-auto my-5 rounded-lg shadow-lg px-10 pt-10 pb-1 relative flex flex-col">
        <button
          className="absolute top-0 right-0 text-5xl text-slate-400 hover:text-black"
          onClick={handleCloseModal}
        >
          <IoCloseOutline />
        </button>

        <h1 className="text-[#5E5400] text-center font-black text-5xl uppercase mb-10">
          Masukan Pilihanmu
        </h1>
        <div className="flex gap-4">
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="bg-slate-300 p-5 rounded-lg relative"
            >
              <div className="absolute top-0 right-0 font-bold text-4xl bg-slate-500 w-[90px] h-[90px] rounded-full flex justify-center items-center border-4 border-white">
                {candidate.id}
              </div>
              <div className="rounded-lg overflow-hidden h-[12rem]">
                <img
                  className=""
                  src={`/src/assets/images/${candidate.image}`}
                  alt="image-candidate"
                />
              </div>
              <div className="mt-3">
                <h1 className="font-bold text-2xl">{candidate.name}</h1>
                <p>{candidate.visiMisi[0]}</p>
                <p className="font-bold mt-2">Partai Pengungsung :</p>
                <ul className="list-disc list-inside">
                  {candidate.parties.map((party) => (
                    <li key={party.id}>{party.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="my-5 flex justify-start items-center gap-5">
          <button className="border-2 border-[#5E5A00] py-1 w-96 rounded-lg text-[#5E5A00] font-bold text-2xl">
            Reset
          </button>
          <button className="py-1 w-96 rounded-lg text-white bg-[#5E5A00] font-bold text-2xl">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalVote;
