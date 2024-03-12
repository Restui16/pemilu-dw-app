import React from "react";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";

type Props = {
  to: string;
  imgUrl: string;
  created_at: string | null;
  title: string;
  author: string;
  index: number;
};

const Article: React.FC<Props> = ({
  to,
  imgUrl,
  created_at,
  title,
  author,
  index,
}) => {
  const parsedDate = parseISO(created_at || "");

  const formattedDate = format(parsedDate, "EEEE, dd MMM yyyy", { locale: id });
  return (
    <Link
      to={to}
      className={`min-h-[422px] ${
        index === 0 ? "md:col-span-2 relative w-full" : "bg-white"
      }`}
    >
      <div className={index === 0 ? "h-full w-full absolute -z-10" : ""}>
        <img className="w-full h-full bg-cover bg-center" src={imgUrl} alt="" />
      </div>
      <div
        className={`p-5 ${index === 0 ? "absolute bottom-0 text-white" : ""}`}
      >
        <span className="bg-[#FF0000] text-white p-2 mb-3 rounded-lg text-2xl">
          {formattedDate}
        </span>
        <h5 className="font-bold mt-4 text-2xl md:text-3xl">{title}</h5>
        <p className="mb-3 text-1xl md:text-2xl">{author}</p>
      </div>
    </Link>
  );
};

export default Article;
