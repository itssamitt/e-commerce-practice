import React from "react";
import "./Cart.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import SingleCartpage from "../../components/SingleCartpage/SingleCartpage";
import EmptyCart from "../../components/EmptyCart/EmptyCart";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  
  let totalAmount = 0
  cart.map((item)=>{
    totalAmount += item.amount
  })
const shippingCharge = cart.length ? 40 : 0;
const checkoutAmount = totalAmount + shippingCharge; 
  

  return (
    <>
      <Header />
      {cart.length ? (
        <>
        <div className="cartpage">
        <p className="yourcart">Your cart</p>
        <div className="cartupperbox">
          <p>PRODUCT</p>
          <p className="midddleposition">QUANTITY</p>
          <p>TOTAL</p>
        </div>

        {cart.map((item) => {
          return (
            <SingleCartpage
              key={item.id}
              img={item.image}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              item={item}
              amount={item.amount}
            />
          );
        })}
      </div>

      <div className="somecalculation">
        <div className="amountcalculate">
          <p className="calctitle">Estimated total</p>
          <div className="subtotalbox">
            <p>sub total</p>
            <p>₹ {totalAmount.toFixed(2)}</p>
          </div>
          <div className="shippingcharge">
            <p>Shipping Fee</p>
            <p>₹ {shippingCharge}</p>
          </div>
          <div className="totalprice">
            <p>Total</p>
            <p>{checkoutAmount}</p>
          </div>
          <div className="checkout">PROCEED TO CHECKOUT</div>
        </div>
        <div></div>
      </div>
        </>
      ) : (<EmptyCart/>)}
      <Footer />
    </>
  );
};

export default Cart;
