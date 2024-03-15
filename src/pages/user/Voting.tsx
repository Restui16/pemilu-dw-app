import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import ModalVote from "../../components/fragments/modal/ModalVote";
import SectionUpdatePemilu from "../../components/fragments/section/SectionUpdatePemilu";
import SectionInfoCandidate from "../../components/fragments/section/SectionInfoCandidate";
import SectionInfo from "../../components/fragments/section/SectionInfo";
import Navbar from "../../components/Navbar";
import ICandidate from "../../interface/ICandidate";
import IVoter from "../../interface/IVoter";

interface Props {
  candidates: ICandidate[];
  voters: IVoter[];
}

const Voting: React.FC<Props> = ({ candidates, voters }) => {
  const [votingOpen, setVotingOpen] = useState<boolean>(false);

  const handleModalVote = (): void => {
    setVotingOpen(!votingOpen);
  };

  return (
    <>
      <Navbar to="/" titleBrand={"PEMILU PRESIDEN DUMBWAYS.ID"}>
        <Link
          to={"/partai"}
          className="hidden md:inline-block text-2xl hover:font-bold"
        >
          Partai |
        </Link>

        <Link
          to={"/paslon"}
          className="hidden md:inline-block text-2xl hover:font-bold"
        >
          Paslon |
        </Link>

        <Link
          to={"/Voting"}
          className="hidden md:inline-block text-2xl hover:font-bold"
        >
          Voting
        </Link>
      </Navbar>
      <main>
        <SectionUpdatePemilu
          candidates={candidates}
          voters={voters}
          handleModalVote={handleModalVote}
        />
        <SectionInfoCandidate candidates={candidates} />
        <SectionInfo variant="bg-white text-[#FF0000]">
          PILIH BERDASARKAN GACHA TIDAK USAH SERIUS YANG PENTING TIDAK
          MELEGALKAN SLOT
        </SectionInfo>
      </main>
      {votingOpen && (
        <ModalVote candidates={candidates} handleCloseModal={handleModalVote} />
      )}
      <Footer />
    </>
  );
};

export default Voting;
