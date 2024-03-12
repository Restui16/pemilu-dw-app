import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import IVoter from "../../interface/IVoter";
import ICandidate from "../../interface/ICandidate";

interface Props {
  voters: IVoter[];
  isAdmin?: boolean;
  candidates: ICandidate[];
}

const Dashboard: React.FC<Props> = ({ voters, candidates }) => {
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
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                className="flex flex-col justify-center items-center gap-5"
              >
                <div className="w-[73px] h-[73px] text-center text-[#5E5400] border-4 text-[40px] font-bold border-[#5E5400] rounded-full bg-[#FFCD56]">
                  {candidate.id}
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
                  <h1 className=" text-[#5E5400] text-2xl">Akumulasi: 45%</h1>
                  <h1 className=" text-[#5E5400] text-2xl">
                    Jumlah Vote: 117 Voters
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-[10rem] px-24">
          <h1 className="text-center text-[#5E5400] text-5xl font-black uppercase">
            List Voter
          </h1>
          <div className="px-16">
            <table className="w-full border-collapse  border-[#828282] mt-10">
              <thead className="bg-[#E5E5E5] text-left">
                <tr>
                  <th className="border border-[#828282] py-3 ps-3">No</th>
                  <th className="border border-[#828282] py-3 ps-3">Nama</th>
                  <th className="border border-[#828282] py-3 ps-3">Alamat</th>
                  <th className="border border-[#828282] py-3 ps-3">
                    Jenis Kelamin
                  </th>
                  <th className="border border-[#828282] py-3 ps-3">Paslon</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {voters.map((voter, index) => (
                  <tr key={index}>
                    <td className="border border-[#828282] p-3">{index + 1}</td>
                    <td className="border border-[#828282] p-3">
                      {voter.user.fullname}
                    </td>
                    <td className="border border-[#828282] p-3">
                      {voter.user.address}
                    </td>
                    <td className="border border-[#828282] p-3">
                      {voter.user.gender}
                    </td>
                    <td className="border border-[#828282] p-3">
                      {voter.candidate.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
