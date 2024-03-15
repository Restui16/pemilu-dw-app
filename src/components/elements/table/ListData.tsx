import React from "react";

type Props = {
  childrenHead: React.ReactNode;
  childrenBody: React.ReactNode;
};

const ListData: React.FC<Props> = ({ childrenHead, childrenBody }) => {
  return (
    <table className="w-full border-collapse  border-[#828282] mt-10">
      <thead className="bg-[#E5E5E5] text-left">{childrenHead}</thead>
      <tbody className="bg-white">{childrenBody}</tbody>
    </table>
  );
};

export default ListData;
