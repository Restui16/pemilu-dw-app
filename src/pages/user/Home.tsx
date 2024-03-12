import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SectionBanner from "../../components/fragments/section/SectionBanner";
import SectionArticle from "../../components/fragments/section/SectionArticle";
import SectionInfo from "../../components/fragments/section/SectionInfo";
import brand from "../../assets/images/brand.png";
import imgBanner from "../../assets/images/kotak-suara.png";
import IArticle from "../../interface/IArticle";

interface Props {
  articles: IArticle[];
}

const Home: React.FC<Props> = ({ articles }) => {
  return (
    <>
      <Navbar to="/" titleBrand={"PEMILU PRESIDEN DUMBWAYS.ID"}>
        <Link
          to={"/partai"}
          className="hidden md:inline-block text-2xl hover:font-bold"
        >
          Partai
        </Link>
        |
        <Link
          to={"/paslon"}
          className="hidden md:inline-block text-2xl hover:font-bold"
        >
          Paslon
        </Link>
        |
        <Link
          to={"/Voting"}
          className="hidden md:inline-block text-2xl hover:font-bold"
        >
          Voting
        </Link>
      </Navbar>
      <main>
        <SectionBanner imgContentBanner={imgBanner} brand={brand} />
        <SectionArticle articles={articles} />

        <SectionInfo variant="bg-white">
          PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK YANG JELAS PASTIKAN
          MEREKA TIDAK MEMILIKI VISI MISI UNTUK MELEGALKAN SLOT
        </SectionInfo>
      </main>
      <Footer />
    </>
  );
};

export default Home;
