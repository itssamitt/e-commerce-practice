import React from "react";
import "./SingleCartpage.css";
import { useDispatch } from "react-redux";
import { addtocart, decrease, deleteCart } from "../../redux/CartSlice";

const SingleCartpage = ({img, title, quantity, item, amount}) => {
  const dispatch = useDispatch()
  

  function add(item){
    dispatch(addtocart(item))
  }

  function subtract(item){
    dispatch(decrease(item))
  }

  function remove(item){
    dispatch(deleteCart(item))
  }

  return (
    <>

    {/* for big devices  */}


      <div className="cartsingle">
        <div className="cartsinglefirst">
          <img loading="lazy" className="cartsingleimg" src={img} />
          <p className="cartsingletitle">{title}</p>
        </div>
        <div className="cartsingleall">
          <div className="cartsinglebutton">
            <i onClick={()=>{subtract(item)}} className="fa-light fa-minus" />
            <p>{quantity}</p>
            <i onClick={()=>{add(item)}} className="fa-light fa-plus" />
          </div>
          <i onClick={()=>{remove(item)}}  className="fa-light fa-trash-list" />
        </div>
        <p className="cartprice">Rs. {amount}</p>
      </div>

      {/* for small device  */}

      <div className="smallcartsingle">
        <div className="smalforflex">
          <img className="smallcartimg" src={img}/>
          <div className="smallrightdetail">
            <p className="smallrighttitle">{title}</p>
            <div className="smalbuttons">
              <div className="smallcountbtn">
                <i onClick={()=>{subtract(item)}} class="fa-light fa-minus"/>
                <p>{quantity}</p>
                <i onClick={()=>{add(item)}} className="fa-light fa-plus"/>
              </div>
              <i onClick={()=>{remove(item)}}  className="fa-light fa-trash-list" />
            </div>
            <p className="smallpricess">₹ {amount} <span className="offspan">13% off</span></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCartpage;
