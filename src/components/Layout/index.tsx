// node_modules
import React from "react";

// sections
import HeaderSection from "./Header";
import FooterSection from "./Footer";

// component props
interface LayoutProps {
  children?: React.ReactNode;
}

// Layout Component
const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-blue-200 w-full absolute top-0 bottom-0">
      <HeaderSection />
      <div className="pt-16 pb-16 h-full">{children}</div>
      <FooterSection />
    </div>
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
