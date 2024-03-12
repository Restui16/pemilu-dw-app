import React from "react";
import InputForm from "../../elements/inputs/InputForm";
import { IoCloseOutline } from "react-icons/io5";
import InputSelect from "../../elements/inputs/InputSelect";

interface Props {
  closeBtn: () => void;
  openLogin: () => void;
}

const ModalRegister: React.FC<Props> = ({ closeBtn, openLogin }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  };
  return (
    <div className="w-full h-full fixed top-0 left-0 z-20 overflow-auto">
      <div className=" bg-white w-3/4 lg:w-2/6 mx-auto my-5 rounded-lg relative shadow-lg px-10 pt-10 pb-1">
        <button
          className="absolute top-0 right-0 text-5xl text-slate-400 hover:text-black"
          onClick={closeBtn}
        >
          <IoCloseOutline />
        </button>
        <h1 className="text-[#5E5400] text-center font-black text-5xl uppercase mb-10">
          Register
        </h1>
        <form onSubmit={handleSubmit} className="mb-14">
          <InputForm type="text" label="Fullname" name="fullname" />
          <InputForm type="text" label="Alamat" name="address" />
          <InputSelect label="Gender" name="gender">
            <option defaultValue="">Pilih Jenis kelamin</option>
            <option value="Male">Laki - Laki</option>
            <option value="Female">Perempuan</option>
          </InputSelect>
          <InputForm type="text" label="Username" name="username" />
          <InputForm type="password" label="Password" name="password" />
          <button
            type="submit"
            className="bg-[#5E5A00] w-full py-3 text-2xl text-white font-bold mb-3 rounded-lg"
          >
            SUBMIT
          </button>
          <p className="text-black text-2xl text-center">
            Sudah Memiliki Akun ?
            <button
              onClick={openLogin}
              className="decoration-solid decoration-2 underline italic text-blue-500"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ModalRegister;
