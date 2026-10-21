import { Link, useParams } from "react-router-dom";
import ButtonInverse from "../../../components/HeaderClient/ButtonInverse";
import ButtonPrimary from "../../../components/HeaderClient/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import "./styles.css";
import { useEffect, useState } from "react";

import type { ProductDTO } from "../../../models/poroduct";
import * as productService from '../../../Services/product-service'

export default function ProductDetails() {

  const params = useParams();
  const [product, setProduct] = useState<ProductDTO>();
  
useEffect(() => {

   productService.findById(Number(params.productId))
    .then(response => {
      console.log(response.data);
      setProduct(response.data);
    });
  
  }, []);

  return (
    
     
      <main>
        <section id="product-details-section" className="dsc-container">
         {
           product &&
         <ProductDetailsCard product = {product} />
         }
         
          <div className="dsc-btn-page-container">
            <ButtonPrimary />

             <Link  to={"/"}>
             <ButtonInverse />
             </Link>
           
          </div>
        </section>
      </main>
  
  );
}
