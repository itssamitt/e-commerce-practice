import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Header.css";
import logo from "../../../public/logo.webp";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const cartarray = useSelector((state)=> state.cart.value);
  let cartlength = 0;

  cartarray.map((item)=>{
    cartlength += item.quantity
  })

  const [navon, setNavon] = useState(false);
  const navwidth = useRef();
  const navleft = useRef();
  const navouter = useRef();

  function navchange() {
    setNavon(!navon);
    if (!navon) {
      navouter.current.style.width = "100%";
      navwidth.current.style.width = "100%";
      navleft.current.style.left = "0";
    } else {
      navouter.current.style.width = "0";
      navwidth.current.style.width = "0%";
      navleft.current.style.left = "-28rem";
    }
  }

  return (
    <>
      <div className="header">
        <div className="checking">amit</div>
        <div className="firstheader">
          <div className="headersocial">
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-instagram" />
          </div>
          <div className="middletitle">
            <i className="fa-light fa-angle-left headarrow" />
            <p>Our New exclusive Collection – Shop Now!</p>
            <i className="fa-light fa-angle-right headarrow" />
          </div>
          <div className="hiddenside" />
        </div>
        <div className="secondheader">
          {navon ? (
            <i className="fa-thin fa-xmark navbaar" onClick={navchange} />
          ) : (
            <i className="fa-thin fa-bars navbaar" onClick={navchange} />
          )}
          <Link to="/">
            <img loading="lazy" className="logo" src={logo} />
          </Link>
          <div className="navbaarside">
            <i className="fa-thin fa-magnifying-glass searchicon" />
            <i className="fa-thin fa-user usericon" />
            <Link className="cartlink" to="/cart">
              <i className="fa-thin fa-bag-shopping carticon" />
              {cartlength > 0 && <p className="cartnumb">{cartlength}</p>}
            </Link>
          </div>
        </div>
      </div>
      <div className="navouter" ref={navouter}>
        <div className="navbaarmain" onClick={navchange} ref={navwidth}>
          <div
            className="navbaarbox"
            onClick={(e) => e.stopPropagation()}
            ref={navleft}
          >
            <div className="navsitems">
              <NavLink className="link" to="/">
                <div className="realnavbaar">HOME</div>
              </NavLink>
              <NavLink className="link" to="/collection/bracelets">
                <div className="realnavbaar">BRACELETS</div>
              </NavLink>
              <NavLink className="link" to="/collection/earrings">
                <div className="realnavbaar">EARRINGS</div>
              </NavLink>
              <Link className="link" to="/collection/pendants">
                <div className="realnavbaar">PENDANTS</div>
              </Link>
              <Link className="link" to="/collection/rings">
                <div className="realnavbaar">RINGS</div>
              </Link>
              <Link className="link" to="/collection/necklaces">
                <div className="realnavbaar">NECKLACES</div>
              </Link>
              <Link className="link" to="/collection/anklets">
                <div className="realnavbaar">ANKLETS</div>
              </Link>
              <Link className="link" to="/about-us">
                <div className="realnavbaar">ABOUT US</div>
              </Link>
            </div>
            <div className="navbaarsocial">
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-instagram" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
