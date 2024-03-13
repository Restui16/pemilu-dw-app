import React, {useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import IArticle from "../../interface/IArticle";
import { deleteData } from "../../utils/fetching";
import ModalAddArticle from "../../components/fragments/modal/ModalAddArticle";
import ModalEditArticle from "../../components/fragments/modal/ModalEditArticle";
type Props = {
  articles: IArticle[];
};

const ListArticle: React.FC<Props> = ({ articles }) => {
  const [addModal, setAddModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [article, setArticle] = useState<IArticle[]>(articles);

  const handleAddModal = () => {
    setAddModal(!addModal);
  };

  const handleEditModal = (id?: number) => {
    const getArticle = articles.filter((article) => article.id === id);
    setArticle(getArticle);
    setEditModal(!editModal);
  };

  const handleDelete = (id: number) => {
    const confirmDelete = confirm("Apakah anda yakin menghapus article ini?");
    if (confirmDelete) {
      deleteData(`article/delete/${id}`)
        .then(() => alert(`Artilce dengan id ${id} berhasil dihapus`))
        .catch((err) => console.log(err));
    }
  };

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
        <section className="py-[5rem] container mx-auto px-10">
          <h1 className="text-center text-[#5E5400] text-5xl font-black uppercase">
            List Article
          </h1>
          <div className="flex justify-end">
            <button
              onClick={handleAddModal}
              className="mt-10 bg-[#5E5400] py-1 px-2 rounded-lg font-bold text-white"
            >
              Tambah Article
            </button>
          </div>
          <div className="w-full overflow-auto">
            <table className="border-collapse w-full border-[#828282] mt-3">
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
                    <td className="border border-[#828282]">
                      <div className="flex  w-full justify-center">
                        <img
                          src={`/src/assets/images/${article.image}`}
                          className="w-[78px]"
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="border border-[#828282] p-3">
                      {article.title}
                    </td>

                    <td className="border border-[#828282] p-3">
                      <div className="flex gap-3">
                        <button 
                        onClick={() => handleEditModal(article.id)}
                        className="bg-yellow-500 py-1 px-2 rounded text-white">
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(article.id)}
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
        {addModal && <ModalAddArticle closeModal={handleAddModal} />}
        {editModal && <ModalEditArticle closeModal={handleEditModal} articles={article} />}
      </main>
    </>
  );
};

export default ListArticle;
