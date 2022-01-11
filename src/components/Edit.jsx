import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { rows } from "./list/appData";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";

export default function Edit() {
  let urlParams = useParams();
  const [selectedRow, setselectedRow] = useState({});
  useEffect(() => {
    let temp = rows.find((r) => r.id === Number(urlParams.id));
    setselectedRow(temp);
  }, [urlParams]);

  const validationSchema = yup.object({
    price: yup.number("Enter just number").required("price is required"),
    title: yup.string("Enter just title").required("title is required"),
    id: yup.number("Enter just number").required("id is required"),
    description: yup
      .string("Enter your description")
      .min(20, "description should be of minimum 20 characters length")
      .required("description is required"),
  });
  const formik = useFormik({
    initialValues: selectedRow,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      values.length > 0 && setselectedRow(values);
      console.log(values);
    },
  });

  const handleNameChange = (e) => {
    //   let temp = {...selectedRow}
    setselectedRow(e.target.value);
  };
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {Object.keys(selectedRow).map((item) => {
          return (
            <TextField
              fullWidth
              key={item}
              id={item}
              name={item}
              label={item}
              value={formik.values.item}
              onChange={formik.handleChange}
              style={{ padding: "10px 0" }}
              error={formik.touched.item && Boolean(formik.errors.item)}
              helperText={formik.touched.item && formik.errors.item}
            />
          );
        })}
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
