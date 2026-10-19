import "./stales.css";

import HeaderClient from "../../components/HeaderClient";
import Searchbar from "../../components/SearchBar";
import Catalogcard from "../../components/CatalogCard";
import ButtonNextPage from "../../components/ButtonNextPage";
import type { ProductDTO } from "../../models/poroduct";


const product: ProductDTO = {

  id: 2,
  name: "Smart TV",
  description: "Este TV é muito bonita",
  imgUrl: "https://github.com/devsuperior/dscatalog-resources/blob/master/backend/img/2-big.jpg?raw=true",
  price : 2500.99,
  categories:[
    {
      id: 2,
      name: "Electonico"

    },
      {
      id: 3,
      name: "Computadores"
      
    }
  ]
}

export default function Catalog() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="catalog-section" className="dsc-container">
          <Searchbar />

          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <Catalogcard product = {product} />
            <Catalogcard product = {product}/>
            <Catalogcard product = {product}/>
            <Catalogcard product = {product}/>
            <Catalogcard product = {product}/>
            <Catalogcard product = {product}/>
            <Catalogcard product = {product}/>
            <Catalogcard product = {product}/>
            <Catalogcard product = {product}/>
            <Catalogcard product = {product}/>
          </div>

         <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
