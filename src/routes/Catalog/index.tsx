import "./stales.css";

import HeaderClient from "../../components/HeaderClient";
import Searchbar from "../../components/SearchBar";
import Catalogcard from "../../components/CatalogCard";
import ButtonNextPage from "../../components/ButtonNextPage";

export default function Catalog() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="catalog-section" className="dsc-container">
          <Searchbar />

          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <Catalogcard />
            <Catalogcard />
            <Catalogcard />
            <Catalogcard />
            <Catalogcard />
            <Catalogcard />
            <Catalogcard />
            <Catalogcard />
            <Catalogcard />
            <Catalogcard />
          </div>

         <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
