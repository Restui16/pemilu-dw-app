import React from "react";
import InputForm from "../components/elements/inputs/InputForm";
import { Link } from "react-router-dom";

type LoginProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  return (
    <div className=" bg-white w-1/2 mx-auto my-5 rounded-lg shadow-lg px-16 py-10">
      <h1 className="text-[#5E5400] text-center font-black text-5xl uppercase mb-10">
        Login
      </h1>
      <form onSubmit={onSubmit} action="" className="mb-14">
        <InputForm type="text" label="Username" name="username" />
        <InputForm type="password" label="Password" name="password" />
        <button
          type="submit"
          className="bg-[#5E5A00] w-full py-3 text-2xl text-white font-bold mb-3 rounded-lg"
        >
          SUBMIT
        </button>
        <p className="text-black text-2xl text-center">
          Belum memiliki akun ?
          <Link
            to={"/register"}
            className="decoration-solid decoration-2 underline italic text-blue-500"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
