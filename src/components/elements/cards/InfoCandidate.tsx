import React from "react";
import IParties from "../../../interface/IParties";

type Props = {
  no: number;
  name: string;
  imgProfile: string
  visiMisi: string[];
  parties: IParties[];
};

const InfoCandidate: React.FC<Props> = ({ no, name, imgProfile, visiMisi, parties }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 bg-white justify-center p-5 rounded-lg w-full  md:w-[50rem]  min-h-[495px] shadow">
        <div className="w-full md:w-60 h-80 rounded-lg overflow-hidden">
          <img
            className="w-full h-full bg-cover"
            src={`/src/assets/images/${imgProfile}`}
            alt="profil-pic"
          />
        </div>
        <div className="grow">
          <h3 className="font-bold text-2xl">Nomor Urut: {no}</h3>
          <h1 className="font-bold text-4xl text-[#5E0000]">{name}</h1>

          <div className="mt-5 text-2xl">
            <p>Visi & Misi</p>
            <ul className="list-disc ps-5 list-inside">
              {visiMisi.map((vm, i) => (
                <li key={i}>{vm}</li>
              ))}
            </ul>
          </div>

          <div className="mt-5 text-2xl">
            <p>Koalisi</p>
            <ul className="list-disc ps-5 list-inside">
              {parties.map((party) => (
                <li key={party.id}>{party.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCandidate;
