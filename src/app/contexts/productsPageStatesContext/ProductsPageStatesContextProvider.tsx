'use client'

import { useState } from "react";
import { ProductsPageStatesContext } from "./ProductsPageStatesContext";

type ChildrenType = {
  children: React.ReactNode;
};

const ProductsPageStatesContextProvider = ({children}: ChildrenType) => {
  // state of filters values
  const [price, setPrice] = useState<string>("");
  const [sizes, setSizes] = useState<string[]>([]);
  const [inStock, setStock] = useState<boolean>(false);
  const [mobileNav, setMobileNav] = useState<boolean>(false);
  const [colors, setColors] = useState<string[]>([]);

  // const valueOptions = {
  //   mobileNav, setMobileNav,
  //   sizes, setSizes
  // }

  return (
    <ProductsPageStatesContext.Provider
      value={{ mobileNav, setMobileNav, sizes, setSizes, price, setPrice, colors, setColors, inStock, setStock }}
    >
      {children}
    </ProductsPageStatesContext.Provider>
  );
};

export default ProductsPageStatesContextProvider;