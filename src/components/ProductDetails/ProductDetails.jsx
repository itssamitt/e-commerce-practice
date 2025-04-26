import React from "react";
import "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, increasenumber, decreasenumber } from "../../redux/CartSlice";

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch()
  const productnum = useSelector((state)=> state.cart.productnumber)

  function addcart(item){
    dispatch(addtocart(item))
  }

  function increaseproduct(){
    dispatch(increasenumber())
  }
  function decreaseproduct(){
    dispatch(decreasenumber())
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
            <i onClick={decreaseproduct} className="fa-light fa-minus"/>
            <p>{productnum}</p>
            <i onClick={increaseproduct} className="fa-light fa-plus"/>
          </div>
          <div onClick={()=>{addcart(product)}} className="adtocartbtn">Add to cart</div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
