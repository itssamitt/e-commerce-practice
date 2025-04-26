import React from "react";
import "./Catagories.css";
import { Link } from "react-router-dom";
import categoryone from "../../assets/categories/earrings.webp";
import categorytwo from "../../assets/categories/rings.webp";
import categorythree from "../../assets/categories/pendants.webp";
import categoryfour from "../../assets/categories/mangalsutra.webp";
import categoryfive from "../../assets/categories/bracelets.webp";
import categorysix from "../../assets/categories/bangles.webp";
import categoryseven from "../../assets/categories/chains.webp";

const Catagories = () => {
  return (
    <>
      <div className="categories">
        <p className="categoriestitle">Discover Our Collections</p>
        <p className="categoriespara">crafted to shine with elegance</p>
        <div className="categoriesgrid">
          <Link className="link" to='/collection/earrings' >
            <div className="gridimgbox">
              <img loading="lazy" className="categoriesimages " src={categoryone} />
              <p>Earrings</p>
            </div>
          </Link>
          <Link className="link" to='/collection/necklaces' >
            <div className="gridimgbox">
              <img loading="lazy" className="categoriesimages " src={categorytwo}  />
              <p>Necklaces</p>
            </div>
          </Link>
          
          <Link className="link" to='/collection/bracelets'>
            <div className="gridimgbox">
              <img loading="lazy" className="categoriesimages " src={categorythree}  />
              <p>Bracelets</p>
            </div>
          </Link>
          
          <Link className="link" to='/collection/rings'>
            <div className="gridimgbox">
              <img loading="lazy" className="categoriesimages " src={categoryfour}  />
              <p>Rings</p>
            </div>
          </Link>

          <Link className="link" to='/'>
            <div className="gridimgbox">
              <img loading="lazy" className="categoriesimages " src={categoryfive}  />
              <p>Hair Accessories</p>
            </div>
          </Link>

          <Link className="link" to='/collection/anklets'>
            <div className="gridimgbox">
              <img loading="lazy" className="categoriesimages " src={categorysix}  />
              <p>Anklets</p>
            </div>
          </Link>

          <Link className="link" to='/'>
            <div className="gridimgbox">
              <img loading="lazy" className="categoriesimages " src={categoryseven}  />
              <p>Brooches</p>
            </div>
          </Link>

          <Link className="link" to='/collection/earrings'>
            <div className="gridimgbox">
              <img loading="lazy" className="categoriesimages " src={categoryone}  />
              <p>Earrings</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Catagories;
