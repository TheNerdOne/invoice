import React from "react";
import { Routes, Route } from "react-router-dom";

import Add from "./components/Add";
import Edit from "./components/Edit";
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
    main: () => <List />,
  },
  {
    path: "/invoice/add",
    exact: true,
    main: () => <Add />,
  },
  {
    path: "/invoice/edit/:id",
    main: () => <Edit />,
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
