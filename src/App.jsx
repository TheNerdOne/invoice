import React from "react";
import { Routes, Route } from "react-router-dom";

import Product from "./components/Product";
import "./components/design/css/main.css";
import List from "./components/list/List";
import Navbar from "./components/layout/Navbar";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <h2>Home</h2>,
  },
  {
    path: "/Products",
    main: () => <List changeRoute="product" />,
  },
  {
    path: "/product/add",
    exact: true,
    main: () => <Product />,
  },
  {
    path: "/product/edit/:id",
    main: () => <Product />,
  },
];
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={<route.main />}
          />
        ))}
      </Routes>
    </React.Fragment>
  );
}

export default App;
