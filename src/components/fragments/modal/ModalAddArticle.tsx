import React from "react";
import InputForm from "../../elements/inputs/InputForm";
import InputTextarea from "../../elements/inputs/InputTextarea";
import Modal from "../../elements/Modal";
type Props = {
  closeModal: () => void;
};

const ModalAddArticle: React.FC<Props> = ({ closeModal }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("http://localhost:5000/api/v1/article", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json()
      if (response.status === 200) {
        console.log("Article Berhasil dibuat", responseData);
        closeModal();
      } else {
        console.error("Article Gagal Dibuat", responseData);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Modal closeModal={closeModal} title="Tambah Article">
      <form encType="multipart/form-data" action="" className="py-5" onSubmit={(e) => handleSubmit(e)}>
        <InputForm type="text" name="title" placeholder="title" label="Title" />
        <InputTextarea
          name="description"
          label="Description"
          placeholder="...."
        />
        <InputForm type="file" name="image" label="Image" />
        <div className="flex gap-2 justify-end">
          <button className="bg-[#5E5400] py-1 px-2 rounded-lg text-white text-2xl">
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalAddArticle;
