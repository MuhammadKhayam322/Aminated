import Image from "next/image";
import React from "react";

type AuthorCardProps = {
  imageSrc: string;
  name: string;
  description: string;
  btn: string;
  className?: string; // Optional for custom positioning
};

const Trainer: React.FC<AuthorCardProps> = ({
  imageSrc,
  name,
 btn,
  description,
  className = "",
}) => {
  return (
    <div
    className="  items-center justify-center w-72 sm:w-80 md:w-96 h- bg-white rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105"
    >
      <div className="gap-2">
      <Image
        src={imageSrc}
        alt={name}
        width={300}
        height={200}
        className="rounded-2xl w-100  h-120 "
        
      /></div>  
       <div className="mt-[-220px] absolute rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105   ">
        <h2 className="text-3xl font-bold text-white w-80 text-center" style={{fontWeight:"bold"}}>{description} 
        </h2>
        <h1 className="text-xl text-white ml-5 font-bold ">{name}</h1>
        <div className="ml-5 text-white">
        <button className="text-sm text-white border p-2 rounded-xl border-gray-300">{btn}</button>
        </div>
      </div>
    </div>
  );
};

export default Trainer;