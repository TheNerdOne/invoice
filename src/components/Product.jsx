import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { rows } from "./list/appData";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box } from "@mui/system";

const validationSchema = yup.object({
  id: yup.number("Enter just number").required("id is required"),
  title: yup.string("Enter just title").required("title is required"),
  price: yup.number("Enter just number").required("price is required"),
  description: yup
    .string("Enter your description")
    .min(20, "description should be of minimum 20 characters length")
    .required("description is required"),
  image: yup.string("enter the url"),
  category: yup.string("enter the category"),
});
const Edit = () => {
  let urlParams = useParams();
  const [selectedRow, setselectedRow] = useState({});
  useEffect(() => {
    let temp; 
    if(urlParams.id) {
       temp = rows.find((r) => r.id === Number(urlParams.id));
      setselectedRow(temp);
    } else {
      temp = {
        id:0,
        title:'',
        price:0,
        category:'',
        description:'',
        image:''
      }
      setselectedRow(temp);
    }
  }, []);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: selectedRow,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setselectedRow(values);
      console.log(values);
    },
  });
  return (
    <div>
      <Box
        sx={{
          maxWidth: 768,
          display: "flex",
          justifyContent: "center",
          margin: "auto",
          marginTop: "1rem",
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            key="id"
            id="id"
            name="id"
            label="id"
            value={formik.values.id}
            onChange={formik.handleChange}
            style={{ margin: "15px 0" }}
            error={formik.touched.id && Boolean(formik.errors.id)}
            helperText={formik.touched.id && formik.errors.id}
          />
          <TextField
            fullWidth
            key="title"
            id="title"
            name="title"
            label="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            style={{ margin: "15px 0" }}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <TextField
            fullWidth
            key="category"
            id="category"
            name="category"
            label="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            style={{ margin: "15px 0" }}
            error={formik.touched.category && Boolean(formik.errors.category)}
            helperText={formik.touched.category && formik.errors.category}
          />

          <TextField
            fullWidth
            key="price"
            id="price"
            name="price"
            label="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            style={{ margin: "15px 0" }}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
          <TextField
            fullWidth
            key="description"
            id="description"
            name="description"
            label="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            style={{ margin: "15px 0" }}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />

          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
};
export default Edit;
