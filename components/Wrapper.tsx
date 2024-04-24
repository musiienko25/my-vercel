import React, { FC } from "react";
import MainBlock from "./MainBlock";
import Header from "./Header";
import HeaderImage from "./HeaderImage";
import HeaderName from "./HeaderName";
import resume from "../data/resume";
type WrapperProps = {
  children: any;
};

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <main className="font-firago hyphens-manual">
      <div className="p-6 mx-auto page max-w-3xl print:max-w-letter md:max-w-letter xsm:p-8 sm:p-9 md:p-8 bg-white lg:min-w-[1000px] xl:min-w-[1320px]">
        <Header>
          <HeaderImage src={resume.image} name={resume.name} />
          <HeaderName name={resume.name} title={resume.title} />
        </Header>
        <MainBlock />
      </div>
    </main>
  );
};

export default Wrapper;
