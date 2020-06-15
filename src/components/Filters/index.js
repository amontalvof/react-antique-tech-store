import React, { useContext } from "react";
import { Input } from "react-rainbow-components";
import { ProductContext } from "../../context/products";
import { FiltersWrapper } from "./FiltersStyle";
import { FaSearch } from "react-icons/fa";

const Filter = () => {
  const { search, updateFilters, sorted } = useContext(ProductContext);

  return (
    <FiltersWrapper>
      <form className="filters-form">
        <div className="fxc">
          <Input
            type="text"
            className="rainbow-p-around_small"
            placeholder="Search"
            id="search"
            name="search"
            value={search}
            icon={<FaSearch className="rainbow-color_gray-3" />}
            onChange={updateFilters}
          />
        </div>
      </form>
      {sorted.flat().length ? (
        <h6>Total Producst: {sorted.flat().length}</h6>
      ) : (
        <h6>Unfotunately your search query did not return any products</h6>
      )}
    </FiltersWrapper>
  );
};

export default Filter;
