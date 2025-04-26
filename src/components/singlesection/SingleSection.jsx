import React, { useEffect } from "react";
import "./SingleSection.css";
import { Link } from "react-router-dom";

const SingleSection = ({ api, category, mainTitle, mainDesc }) => {
  return (
    <>
      <div className="singlesection">
        <p className="single-sec-title">{mainTitle}</p>
        <p className="categoriespara">{mainDesc}</p>
        <div className="single-sec-grid">
          {api.slice(0, 4).map((item, index) => {
            return (
              <Link key={index} className="singlelink" to={`/products/${item.short}`}>
                <div key={item.id} className="singlesec-box">
                  <img
                    loading="lazy"
                    className="singlesecimages categoryone"
                    src={item.image}
                  />
                  <h4>{item.title.slice(0, 17) + ` ...`}</h4>
                  <p>Rs. ₹{item.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <Link className="viewlink" to={`/collection/${category}`}>
          <span className="semore">view all</span>
        </Link>
      </div>
    </>
  );
};

export default SingleSection;
