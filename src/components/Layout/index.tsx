// node_modules
import React from "react";
import { useLocation, useMatch } from "react-router-dom";

// sections
import HeaderSection from "./Header";
import FooterSection from "./Footer";

// component props
interface LayoutProps {
  children?: React.ReactNode;
}

// Layout Component
const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const match = useMatch<string, string>("/hello");
  console.log(match);

  return (
    <>
      <HeaderSection />
      {children}
      <FooterSection />
    </>
  );
};

// HOC (Higher Order Component)
const withLayout = (Component: React.FC) => (props: any) => {
  return (
    <LayoutComponent>
      <Component {...props} />
    </LayoutComponent>
  );
};

export default withLayout;
