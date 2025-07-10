import Image from "next/image";
import React from "react";

type AuthorCardProps = {
  imageSrc: string;
  name: string;
  title: string;
  duration: string;
  className?: string;
};

const AuthorCard: React.FC<AuthorCardProps> = ({
  imageSrc,
  name,
  title,
  duration,
  className = "",
}) => {
  return (
    <div
      className={`w-64 sm:w-72 md:w-80 bg-white rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-105 flex-shrink-0 ${className}`}
    >
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="rounded-t-2xl object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
      <div className="p-4 text-black">
        <h1 className="text-lg sm:text-xl font-bold">{name}</h1>
        <h3 className="text-sm sm:text-base font-semibold">{title}</h3>
        <h6 className="text-xs sm:text-sm text-gray-600">{duration}</h6>
      </div>
    </div>
  );
};

export default AuthorCard;






