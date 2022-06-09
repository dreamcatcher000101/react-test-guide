// node_modules
import React from "react";
import { Link } from "react-router-dom";

// models
// import type { User } from "../../../models";

// store
// import { RootState, useAppSelector } from "../../../store";

// consts
import { PATH } from "../../../consts";

// Header Section
const HeaderSection: React.FC = () => {
  // const user: null | User = useAppSelector((state: RootState) => state.me.data);

  return (
    <div className="flex flex-col bg-indigo-700 p-4 w-full fixed top-0">
      <Link to={PATH.DASHBOARD} className="text-3xl font-bold text-white">
        User ToDo List
      </Link>
      {
        // user ? {user.name} : "Signin"
      }
    </div>
  );
};

export default HeaderSection;
