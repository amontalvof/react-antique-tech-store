// products context
// hay que importar ProductProvider en el index.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "../utils/URL";
import { featuredProducts, flattenProducts } from "../utils/helpers";

export const ProductContext = React.createContext();

//Provider, Consumer, useConstext()
//always use children

export default function ProductProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios //perform a get request
      .get(`${url}/products`)
      .then((response) => {
        const featured = featuredProducts(response.data);
        const products = flattenProducts(response.data);
        setFeatured(featured);
        setProducts(products);
        setLoading(false);
      });
    return () => {};
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, featured }}>
      {children}
    </ProductContext.Provider>
  );
}
