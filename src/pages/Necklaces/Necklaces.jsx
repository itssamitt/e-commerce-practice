import React from "react";
import { useState, useEffect } from "react";
import "./Necklaces.css";
import Header from "../../components/Header/Header";
import ProductBanner from "../../components/ProductBanner/ProductBanner";
import Filter from "../../components/Filter/Filter";
import ProductList from "../../components/Productlist/ProductList";
import Footer from "../../components/Footer/Footer";
import { file } from "../../File";

const Necklaces = () => {
  const [filteredapi, setFilteredapi] = useState([]);

  useEffect(() => {
    const api = file.filter((item) => item.category === "earrings" );
    setFilteredapi(api);
  }, []);

  return (
    <>
      <Header />
      <ProductBanner />
      <div className="listpage">
        <Filter />
        <ProductList api={filteredapi} />
      </div>
      <Footer />
    </>
  );
};

export default Necklaces;
