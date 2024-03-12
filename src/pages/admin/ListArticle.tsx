import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import IArticle from "../../interface/IArticle";
type Props = {
  articles: IArticle[];
};

const ListArticle: React.FC<Props> = ({
  articles,
}) => {
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
            List Article
          </h1>
          <div className="px-16 flex justify-center">
            <table className="border-collapse  border-[#828282] mt-10">
              <thead className="bg-[#E5E5E5] text-left">
                <tr>
                  <th className="border border-[#828282] p-3">No</th>
                  <th className="border border-[#828282] p-3">Image</th>
                  <th className="border border-[#828282] p-3">Title</th>
                  <th className="border border-[#828282] p-3">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {articles.map((article, index) => (
                  <tr key={article.id}>
                    <td className="border border-[#828282] p-3 text-center">
                      {index + 1}
                    </td>
                    <td className="border border-[#828282] p-3">
                      <img
                        src={`/src/assets/images/${article.image}`}
                        className="w-[78px] h=[94px]"
                        alt=""
                      />
                    </td>
                    <td className="border border-[#828282] p-3">
                      {article.title}
                    </td>

                    <td className="border border-[#828282] p-3">
                      <div className="flex gap-3">
                        <button
                          className="bg-yellow-500 py-1 px-2 rounded text-white"
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-700 py-1 px-2 rounded text-white"
                        >
                          Delete
                        </button>
                      </div>
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

export default ListArticle;
