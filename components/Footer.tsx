import React from "react";
import icon from "../data/images/github-mark-white.svg";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 text-center">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p>Living, learning, & leveling uр</p>
        <p> one day at a time.</p>
        <a
          href="https://github.com/musiienko25"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4"
        >
          <Image src={icon} alt="GitHub" width={32} height={32} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
