import React from "react";
import "./ProductDetails.css";
import { useDispatch } from "react-redux";
import { addtocart } from "../../redux/CartSlice";

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch()

  function addcart(item){
    dispatch(addtocart(item))
  }
  
  return (
    <>
      <div className="productdetails">
        <div className="firstimagebig">
          <img loading="lazy" className="detailsimage" src={product.image} />
        </div>
        <div className="detailssection">
          <p className="smaltitle">Rabbito Jewels</p>
          <h3 className="detailtitle">{product.title}</h3>
          <p className="detailsdesc">
            Lorem Lorem ipsum dolor sit amet. ipsum dolor sit amet consectetur adipisicing elit. Id optio
            amet voluptatem.
          </p>
          <p className="detailsprice">Rs. ₹{product.price}</p>
          <p className="descsizetext">Size</p>
          <div className="sizebox">
              {product.size?.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          <div className="count">
            <i className="fa-light fa-minus"/>
            <p>1</p>
            <i className="fa-light fa-plus"/>
          </div>
          <div onClick={()=>{addcart(product)}} className="adtocartbtn">Add to cart</div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
