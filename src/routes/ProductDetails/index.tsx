import "./styles.css";

import HeaderClient from "../../components/HeaderClient";
import ButtonInverse from "../../components/HeaderClient/ButtonInverse";
import ButtonPrimary from "../../components/HeaderClient/ButtonPrimary";
import ProductDetailsCard from "../../components/ProductDetailsCard";
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

export default function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product = {product} />
          <div className="dsc-btn-page-container">
            <ButtonPrimary />

            <ButtonInverse />
          </div>
        </section>
      </main>
    </>
  );
}
