import { createContext } from "react";

export const productContext = createContext({
  products: [],
  formik: () => {},
});
