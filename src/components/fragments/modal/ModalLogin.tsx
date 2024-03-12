import React from "react";
import InputForm from "../../elements/inputs/InputForm";
import { IoCloseOutline } from "react-icons/io5";

type LoginProps = {
  closeBtn: () => void;
  openRegister: () => void;
};

const ModalLogin: React.FC<LoginProps> = ({ closeBtn, openRegister }) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e);
        
    }
  return (
    <div className="w-full h-full fixed top-0 left-0 z-20">
      <div className=" bg-white w-3/4 lg:w-2/6 mx-auto my-5 rounded-lg shadow-lg px-10 pt-10 pb-1 relative">
        <button
          className="absolute top-0 right-0 text-5xl text-slate-400 hover:text-black"
          onClick={closeBtn}
        >
          <IoCloseOutline />
        </button>
        <h1 className="text-[#5E5400] text-center font-black text-5xl uppercase mb-10">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="mb-14">
          <InputForm type="text" label="Username" name="username" />
          <InputForm type="password" label="Password" name="password" />
          <button
            type="submit"
            className="bg-[#5E5A00] w-full py-2 text-3xl text-white font-bold mb-3 rounded-lg"
          >
            SUBMIT
          </button>
          <p className="text-black text-2xl text-center">
            Belum memiliki akun ?
            <button
              onClick={openRegister}
              className="decoration-solid decoration-2 underline italic text-blue-500"
            >
              Register
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ModalLogin;
