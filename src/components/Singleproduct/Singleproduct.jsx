import React from "react";
import "./Singleproduct.css";
import ringone from '../../assets/rings/ringone.png'

const Singleproduct = ({img, title, price}) => {


  return (
    <>
      <div className="perproductbox">
        <img loading="lazy" src={img} />
        <h4 className="bigscreen">{`${title.slice(0, 22)} ...`}</h4>
        <h4 className="smallscreen">{`${title.slice(0, 16)} ...`}</h4>
        <p>Rs. ₹{price}</p>
      </div>
    </>
  );
};

export default Singleproduct;
