import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import "./components/design/css/main.css";
import List from "./components/list/List";
import Navbar from "./components/layout/Navbar";
import ProductGlobalState from "./components/context/productGlobalState";

function App() {
  const routes = [
    {
      path: "/",
      exact: true,
      main: () => <h2>Home</h2>,
    },
    {
      path: "/Products",
      main: () => (
        
          <List changeRoute="product" />
      ),
    },
    {
      path: "/product/add",
      exact: true,
      main: () => (
          <Product />
      ),
    },
    {
      path: "/product/edit/:id",
      main: () => (
          <Product />
      ),
    },
  ];
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={
              <ProductGlobalState>
                <route.main />
              </ProductGlobalState>
            }
          />
        ))}
      </Routes>
    </React.Fragment>
  );
}

export default App;
