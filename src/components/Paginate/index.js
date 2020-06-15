import React, { useState, useContext } from "react";
import { Pagination } from "react-rainbow-components";
import { ProductContext } from "../../context/products";

export default function Paginate() {
  const { sorted, changePage } = useContext(ProductContext);
  const [pagina, setPagina] = useState(1);

  const handleOnChange = (event, pag) => {
    //console.log(event, page);
    changePage(pag - 1);
    setPagina(pag);
  };

  return (
    <div>
      {sorted.length > 1 && (
        <Pagination
          className="rainbow-m_auto"
          pages={sorted.length}
          activePage={pagina}
          onChange={handleOnChange}
        />
      )}
    </div>
  );
}
