import React from "react";

interface Props {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<Props> = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={name}
        className="block mb-2 text-lg text-gray-900 font-bold"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        className={` text-gray-900 text-lg  w-full  ${type === 'file' ? 'relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded-lg text-slate-400 border border-black  px-3 py-[0.32rem] text-base font-normal leading-[2.15] text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface' : 'bg-gray-50 border border-gray-600 rounded-lg p-2.5'} `}
      />
    </div>
  );
};

export default InputForm;
