import React from "react";
import "./Maindown.css";
import mainone from "../../assets/maindown/one.webp";
import maintwo from "../../assets/maindown/two.webp";
import mainthree from "../../assets/maindown/three.webp";

const Maindown = () => {
  return (
    <>
      <div className="maindown">
        <p className="maindowntitle">Exclusive Collections</p>
        <p className="maindownpara">Explore our newly launched collection</p>
        <div className="maindowngrid">
          <img loading="lazy" className="gridimages gridone" src={mainone} />
          <img loading="lazy" className="gridimages gridtwo" src={maintwo} />
          <img loading="lazy" className="gridimages gridthree" src={mainthree} />
        </div>
      </div>
    </>
  );
};

export default Maindown;
