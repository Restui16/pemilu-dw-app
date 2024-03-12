import React from "react";
import ICandidate from "../../../interface/ICandidate";
import Carousel from "../../elements/carousel/Carousel"

type Props = {
  candidates: ICandidate[]
}

const SectionInfoCandidate: React.FC<Props> = ({candidates}) => {
  
  return (
    <section className="my-10 px-24">
      <h1 className="text-[#5E5400] text-center font-black text-5xl">
        INFO PASLON
      </h1>
      <Carousel candidates={candidates}/>
    </section>
  );
};

export default SectionInfoCandidate;
