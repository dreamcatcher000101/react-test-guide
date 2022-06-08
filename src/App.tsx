// node_modules
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

// pages
import { NotFoundPage, DashboardPage, SigninPage } from "./pages";

// store
import store from "./store";

// consts
import { PATH } from "./consts";

// App Component
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.DASHBOARD} element={<DashboardPage />} />
          <Route path={PATH.SIGNIN} element={<SigninPage />} />
          <Route path={PATH.NOTFOUND} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
