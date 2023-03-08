import React from "react";

interface Props {
  children: React.ReactElement;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
