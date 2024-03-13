import React from "react";
import Modal from "../../elements/Modal";
import InputForm from "../../elements/inputs/InputForm";
import InputTextarea from "../../elements/inputs/InputTextarea";
import IArticle from "../../../interface/IArticle";

type Props = {
  closeModal: () => void;
  articles: IArticle[];
};

const ModalEditArticle: React.FC<Props> = ({ closeModal, articles }) => {
    const [article] = articles
    return (
    <Modal closeModal={closeModal} title="Edit Article">
      <form action="" className="py-5">
        <InputForm type="text" name="title" placeholder="title" label="Title" value={article.title} />
        <InputTextarea
          name="desctiption"
          label="Description"
          placeholder="...."
          value={article.description}
        />
        <InputForm type="file" name="image" label="Image"/>
        <div className="flex gap-2 justify-end">
          <button className="bg-[#5E5400] py-1 px-2 rounded-lg text-white text-2xl">
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalEditArticle;
