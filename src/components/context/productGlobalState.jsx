import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { productContext } from "./productContext";
import productsDataProvider from "../../service/products";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  title: yup.string("Enter just title").required("title is required"),
  price: yup.number("Enter just number").required("price is required"),
  description: yup
    .string("Enter your description")
    .min(20, "description should be of minimum 20 characters length")
    .required("description is required"),
  image: yup.string("enter the url"),
  category: yup.string("enter the category"),
});

const ProductGlobalState = ({ children }) => {
  const [selectedRow, setselectedRow] = useState({});
  const [products, setproducts] = useState([]);

  let urlParams = useParams();
  let Navigate = useNavigate();

  useEffect(() => {
    if (urlParams.id) {
      productsDataProvider.getSingleProduct(urlParams.id).then((res) => {
        setselectedRow(res.data);
      });
    } else {
      let temp = {
        id: products.length,
        title: "",
        price: 0,
        category: "",
        description: "",
        image: "",
      };
      setselectedRow(temp);
    }
  }, [urlParams.id]);

  useEffect(() => {
    productsDataProvider.getproducts().then((res) => {
      setproducts(res.data);
    });
  }, []);

  const updateProduct = (payload) => {
    productsDataProvider
      .updateProduct(payload, urlParams.id)
      .then(() => {
        const rows = [ ...products ];
        const finded = rows.findIndex((row) => row.id === payload.id);
        rows[finded] = payload;
        setproducts(rows);
      })
      .then(() => {
        Navigate(-1);
      });
  };

  const add = (payload) => {
    productsDataProvider.addProduct(payload).then(() => {
      Navigate(-1);
    });
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: selectedRow,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setselectedRow(values);
      if (urlParams.id) {
        updateProduct(values);
      } else {
        add(values);
      }
    },
  });

  return (
    <productContext.Provider
      value={{
        formik,
        products,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductGlobalState;
