import React, {useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "../../components/Footer";
import IArticle from "../../interface/IArticle";
import Navbar from "../../components/Navbar";
import { format, parseISO } from "date-fns";
import { id as idLocale } from "date-fns/locale";

interface Props {
  articles: IArticle[];
}

const DetailArticle: React.FC<Props> = ({ articles }) => {
  const { id } = useParams();
  const articleFiltered = articles.filter(
    (article) => article.id === Number(id)
  );
  const [a] = articleFiltered;
  const [article] = useState<IArticle>(a);


  const parsedDate = parseISO(article.created_at || "");
  const formattedDate = format(parsedDate, "EEEE, dd MMM yyyy", {
    locale: idLocale,
  });

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
      <main className="px-24">
        <div className="bg-white py-10 relative">
          <Link
            to={"/"}
            className="absolute left-10 flex items-center gap-3 text-[20px]"
          >
            <FaArrowLeft /> Beranda
          </Link>
          <p className="text-center text-[20px]">Berita hari ini</p>
          <div className="text-center mt-10">
            <h1 className="font-bold text-[#5E5A00] text-4xl">
              {article?.title}
            </h1>
            <h2 className="text-2xl">{article.user.fullname}</h2>
            <h2 className="text-3xl">{formattedDate}</h2>
          </div>
          <div className="px-12 mt-10">
            <img src={`/src/assets/images/${article.image}`} alt="" />
            <div className="text-justify text-wrap mt-5">
              <p className="break-words">{article.description}</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default DetailArticle;
