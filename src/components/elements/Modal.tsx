import React from "react";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
  closeModal: () => void;
  children: React.ReactNode
  title: string
};

const Modal: React.FC<Props> = ({ closeModal, children, title }) => {
  return (
    <div className="w-full fixed top-0 z-20 overflow-auto px-12 md:px-24">
      <div className=" bg-white w-full md:w-1/2 mx-auto my-5 rounded-lg overflow-auto shadow-lg px-10 pt-10 pb-1 relative flex flex-col">
        <button
          className="absolute top-0 right-0 text-5xl text-slate-400 hover:text-black"
          onClick={closeModal}
        >
          <IoCloseOutline />
        </button>
        <div>
          <h1 className="text-[#5E5400] text-center font-black text-3xl uppercase mb-5">
            {title}
          </h1>
        </div>
        <div>
            {children}
        </div>
        
      </div>
    </div>
  );
};

export default Modal;
