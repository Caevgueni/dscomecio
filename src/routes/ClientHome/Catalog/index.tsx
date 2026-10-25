import { useEffect, useState } from "react";
import ButtonNextPage from "../../../components/ButtonNextPage";
import Catalogcard from "../../../components/CatalogCard";
import Searchbar from "../../../components/SearchBar";
import "./styles.css";
import type { ProductDTO } from "../../../models/poroduct";

import * as productService from '../../../Services/product-service'

export default function Catalog() {

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [productName, setProductName] = useState("");

  useEffect(() => {
  productService.findPageRequest(0,productName)
    .then(response => {
      setProducts(response.data.content);
    })
    .catch(error => {
      console.error("Erro no pedido:", error);
    });
}, [productName]);

function hendleSearch(serchText: string){
  setProductName(serchText);
}

  return (
    <>
      
      <main>
        <section id="catalog-section" className="dsc-container">
          <Searchbar onSearch={hendleSearch} />
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">

          {
            products.map(
              product =>   <Catalogcard key={product.id} product = {product} />)
          }

          </div>

         <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
