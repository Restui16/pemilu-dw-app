import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import ICandidate from "../../interface/ICandidate";

interface Props {
  candidates: ICandidate[];
}

const ListPaslon: React.FC<Props> = ({ candidates }) => {
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
        <section className="py-[5rem] px-24">
          <h1 className="text-center text-[#5E5400] text-5xl font-black uppercase">
            List Paslon
          </h1>
          <div className="px-16">
            <table className="w-full border-collapse border-[#828282] mt-10">
              <thead className="bg-[#E5E5E5] text-left ">
                <tr>
                  <th className="border border-[#828282] py-3 ps-3">No</th>
                  <th className="border border-[#828282] py-3 ps-3">image</th>
                  <th className="border border-[#828282] py-3 ps-3">Name</th>
                  <th className="border border-[#828282] py-3 ps-3">
                    Visi & Misi
                  </th>
                  <th className="border border-[#828282] py-3 ps-3">Koalisi</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {candidates.map((data, index) => (
                  <tr key={index}>
                    <td className="border border-[#828282] p-3 text-center">
                      {index + 1}
                    </td>
                    <td className="border border-[#828282] p-3">
                      <img
                        src={`/src/assets/images/${data.image}`}
                        className="w-[78px] h=[94px]"
                        alt=""
                      />
                    </td>
                    <td className="border border-[#828282] p-3">{data.name}</td>
                    <td className="border border-[#828282] p-3">
                      <ul className="list-disc list-inside">
                        {data.visiMisi.map((vm, index) => (
                          <li key={index}>{vm}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="border border-[#828282] p-3">
                      <ul className="list-disc list-inside">
                        {data.parties.map((party, index) => (
                          <li key={index}>{party.name}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
};

export default ListPaslon;
