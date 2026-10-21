import { useEffect, useState } from "react";
import ButtonNextPage from "../../../components/ButtonNextPage";
import Catalogcard from "../../../components/CatalogCard";
import Searchbar from "../../../components/SearchBar";
import "./styles.css";
import type { ProductDTO } from "../../../models/poroduct";

import * as productService from '../../../Services/product-service'

export default function Catalog() {

  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
  productService.findAll()
    .then(response => {
      console.log("Resposta completa:", response);
      console.log("Dados recebidos:", response.data);
      console.log("Conteúdo:", response.data.content);

      setProducts(response.data.content);
    })
    .catch(error => {
      console.error("Erro no pedido:", error);
    });
}, []);

  return (
    <>
      
      <main>
        <section id="catalog-section" className="dsc-container">
          <Searchbar />
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
