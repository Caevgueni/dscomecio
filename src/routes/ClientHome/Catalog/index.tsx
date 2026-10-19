import ButtonNextPage from "../../../components/ButtonNextPage";
import Catalogcard from "../../../components/CatalogCard";
import Searchbar from "../../../components/SearchBar";
import * as productService from '../../../Services/product-service'
import "./styles.css";


export default function Catalog() {
  return (
    <>
      
      <main>
        <section id="catalog-section" className="dsc-container">
          <Searchbar />
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">

          {
            productService.findAll().map(
              product =>   <Catalogcard key={product.id} product = {product} />)
          }

          </div>

         <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
