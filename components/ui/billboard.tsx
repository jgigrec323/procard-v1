import React from "react";

interface BillboardProps {
  title: string;
}

const Billboard: React.FC<BillboardProps> = ({ title }) => {
  return (
    <div className="w-full flex justify-center items-center bg-black text-white rounded-md h-40 md:h-32 lg:h-40">
      <h1 className="text-center text-lg md:text-xl lg:text-2xl">{title}</h1>
    </div>
  );
};

export default Billboard;
