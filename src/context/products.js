// products context
// hay que importar ProductProvider en el index.js

import React, { useState, useEffect } from "react";
//import axios from "axios";
//import url from "../utils/URL";
import { featuredProducts, flattenProducts, paginate } from "../utils/helpers";
import { productsData } from "../utils/productsData";

export const ProductContext = React.createContext();

//Provider, Consumer, useConstext()
//always use children

export default function ProductProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);
  //extra state values
  const [sorted, setSorted] = useState([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");

  /*useEffect(() => {
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
  }, []);*/

  useEffect(() => {
    setLoading(true);
    const featured = featuredProducts(productsData);
    const products = flattenProducts(productsData);
    setSorted(paginate(products));
    setFeatured(featured);
    setProducts(products);
    setLoading(false);
    return () => {};
  }, []);

  useEffect(() => {
    let newProducts = [...products];
    //let newProducts = [...products].sort((a, b) => a.price - b.price); //asi organizo un array por un campo
    if (search !== "") {
      newProducts = newProducts.filter((item) => {
        let title = item.title.toLowerCase().trim();
        return title.startsWith(search) ? item : null;
      });
    }
    setPage(0);
    setSorted(paginate(newProducts));
    return () => {};
  }, [search, products]);

  const changePage = (index) => {
    //console.log(index);
    setPage(index);
  };

  const updateFilters = (e) => {
    //console.log(e.target.name);
    //console.log(e.target.value);
    const value = e.target.value;
    setSearch(value);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        featured,
        changePage,
        updateFilters,
        sorted,
        page,
        search,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
