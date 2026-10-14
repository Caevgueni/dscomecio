import "./styles.css";

import HeaderClient from "../../components/HeaderClient";
import ButtonInverse from "../../components/HeaderClient/ButtonInverse";
import ButtonPrimary from "../../components/HeaderClient/ButtonPrimary";
import ProductDetailsCard from "../../components/ProductDetailsCard";

export default function Productdetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard />
          <div className="dsc-btn-page-container">
            <ButtonPrimary />

            <ButtonInverse />
          </div>
        </section>
      </main>
    </>
  );
}
