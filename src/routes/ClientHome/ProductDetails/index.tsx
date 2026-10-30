import { Link, useNavigate, useParams } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import "./styles.css";
import { useContext, useEffect, useState } from "react";

import type { ProductDTO } from "../../../models/poroduct";
import * as productService from '../../../Services/product-service'
import * as cartService from '../../../Services/cart-service'
import { ContextCartCount } from "../../../utils/context-cart";

export default function ProductDetails() {

  const params = useParams();
  const navigate = useNavigate();
  const {setContextCartCount} = useContext(ContextCartCount);




  const [product, setProduct] = useState<ProductDTO>();
  
useEffect(() => {

   productService.findById(Number(params.productId))
    .then(response => {
      console.log(response.data);
      setProduct(response.data);
    })
    .catch(error => {
      navigate("/");
    });
   
  }, []);

  function handleBuyClick() {

    if(product){
       cartService.addProduct(product)
       setContextCartCount(cartService.getCart().items.length);
       navigate("/cart");
    }
   
  }

  return (
    
     
      <main>
        <section id="product-details-section" className="dsc-container">
         {
           product &&
         <ProductDetailsCard product = {product} />
         }
         
          <div className="dsc-btn-page-container">

            <div onClick={handleBuyClick}>
              <ButtonPrimary text="Comprar" />
            </div>
            

             <Link  to={"/"}>
             <ButtonInverse text="Início" />
             </Link>
           
          </div>
        </section>
      </main>
  
  );
}
