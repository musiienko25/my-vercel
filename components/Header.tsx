import React, { FC } from "react";

type HeaderProps = {
  children: any;
};

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className="flex flex-wrap items-center mb-8 md:mb-11 justify-between ">
      {children}
    </header>
  );
};

export default Header;
