// node_modules
import React from "react";

// components
import { withLayout, SigninComponent } from "../../components";

// Signin Page
const SigninPage: React.FC = () => {
  return <SigninComponent />;
};

export default withLayout(SigninPage);
