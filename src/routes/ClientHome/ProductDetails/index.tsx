import { useParams } from "react-router-dom";
import ButtonInverse from "../../../components/HeaderClient/ButtonInverse";
import ButtonPrimary from "../../../components/HeaderClient/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from '../../../Services/product-service'
import "./styles.css";






export default function ProductDetails() {

  const params = useParams();
  


const product = productService.findById(Number(params.productId));

  return (
    
     
      <main>
        <section id="product-details-section" className="dsc-container">
         {
           product &&
         <ProductDetailsCard product = {product} />
         }
         
          <div className="dsc-btn-page-container">
            <ButtonPrimary />

            <ButtonInverse />
          </div>
        </section>
      </main>
  
  );
}
