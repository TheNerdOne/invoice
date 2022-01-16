import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { productContext } from "./context/productContext";
import { useParams } from "react-router";

const Edit = () => {
  const context = useContext(productContext);
  const { formik, products, setselectedRow } = context;
  let urlParams = useParams();

  useEffect(() => {
    let temp;
    if (urlParams.id) {
      temp = products.find((product) => product.id === Number(urlParams.id));
      setselectedRow(temp);
    } else {
      temp = {
        id: products.length + 1,
        title: "",
        price: 0,
        category: "",
        description: "",
        image: "",
      };
      setselectedRow(temp);
    }
  }, [urlParams.id]);
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
