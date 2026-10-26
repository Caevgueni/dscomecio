import { useEffect, useState } from "react";
import ButtonNextPage from "../../../components/ButtonNextPage";
import Catalogcard from "../../../components/CatalogCard";
import Searchbar from "../../../components/SearchBar";
import "./styles.css";
import type { ProductDTO } from "../../../models/poroduct";

import * as productService from "../../../Services/product-service";

type queryParams = {
  page: number;
  name: string;
};

export default function Catalog() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = useState<queryParams>({
    page: 0,
    name: "",
  });

  useEffect(() => {
    productService
      .findPageRequest(queryParams.page, queryParams.name)
      .then((response) => {
        const nextPage = response.data.content;
        setProducts(products.concat(nextPage));
      })
      .catch((error) => {
        console.error("Erro no pedido:", error);
      });
  }, [queryParams]);

  function hendleSearch(serchText: string) {
    setProducts([]);
    setQueryParams({ ...queryParams,page: 0, name: serchText });
  }
 function handlenextpageClick(searchTet: string)  {
  setQueryParams({...queryParams, page: queryParams.page + 1})

 }
  return (
    <>
      <main>
        <section id="catalog-section" className="dsc-container">
          <Searchbar onSearch={hendleSearch} />
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            {products.map((product) => (
              <Catalogcard key={product.id} product={product} />
            ))}
          </div>
          <div onClick={handlenextpageClick}>
            <ButtonNextPage />
          </div>
        </section>
      </main>
    </>
  );
}
