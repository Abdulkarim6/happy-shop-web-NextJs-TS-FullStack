import { useContext } from "react";
import { ProductsPageStatesContext } from "./ProductsPageStatesContext";

export const useProductsPageStates = () => {
  const context = useContext(ProductsPageStatesContext);
  if (!context) {
    throw new Error(
      "useProductsPageStates must be used within ProductsPageStatesProvider"
    );
  }
  return context;
};
