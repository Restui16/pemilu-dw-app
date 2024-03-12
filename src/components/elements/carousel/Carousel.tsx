import React, { useState } from "react";
import ICandidate from "../../../interface/ICandidate";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import InfoCandidate from "../cards/InfoCandidate";

type Props = {
  candidates: ICandidate[];
};
const Carousel: React.FC<Props> = ({ candidates }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === candidates.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? candidates.length - 1 : current - 1);
  };

  if (!Array.isArray(candidates) || candidates.length <= 0) {
    return null;
  }
  return (
    <div className="flex justify-center items-center mt-10 relative">
      {candidates.map((candidate, index) => (
        <div
          key={candidate.id}
          className={`flex items-center justify-center transition-all duration-700 ease-in-out ${
            index === current ? `opacity-1 scale-100` : `opacity-0 scale-0`
          }`}
        >
          {index === current && (
            <InfoCandidate
              no={candidate.id}
              name={candidate.name}
              imgProfile={candidate.image}
              visiMisi={candidate.visiMisi}
              parties={candidate.parties}
            />
          )}
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute z-10 top-[50%] left-0 rounded-full w-10 h-10 text-slate-400 hover:text-black bg-white text-2xl flex justify-center items-center"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-10 top-[50%] right-0 rounded-full w-10 h-10 text-slate-400 hover:text-black bg-white text-2xl flex justify-center items-center"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Carousel;
