import React from "react";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import MainCrousel from "../../components/MainCrousel/MainCrousel";
import Maindown from "../../components/Maindown/Maindown";
import Catagories from "../../components/catagories/Catagories";
import SingleSection from "../../components/singlesection/SingleSection";
import Footer from "../../components/Footer/Footer";
import { file } from "../../File";

const Home = () => {
  const [braceletapi, setBraceletapi] = useState([]);
  const [earringsapi, setEarringsapi] = useState([]);
  const [ringsapi, setRingsapi] = useState([]);
  const [pendantsapi, setPendantsapi] = useState([]);

  useEffect(() => {
    let braceletapiarray = file.filter((item) => item.category === "bracelets");
    let earringsapiarray = file.filter((item) => item.category === "earrings");
    let ringsapiarray = file.filter((item) => item.category === "rings");
    let pendantsapiarray = file.filter((item) => item.category === "pendants");
    setBraceletapi(braceletapiarray);
    setEarringsapi(earringsapiarray);
    setRingsapi(ringsapiarray);
    setPendantsapi(pendantsapiarray);
  }, []);

  return (
    <>
      <Header />
      <MainCrousel />
      <Maindown />
      <Catagories />
      <SingleSection api={earringsapi} category="earrings" mainTitle='DELICATE EARRINGS' mainDesc='A Touch of Pure Sophistication' />
      <SingleSection api={pendantsapi} category="pendants" mainTitle='RADIANT PENDANTS' mainDesc='SHINE WITH EVERY STEP' />
      <SingleSection api={braceletapi} category="bracelets" mainTitle='ENCHANTING BRACELETS' mainDesc='Grace on Your Wrist' />
      <SingleSection api={ringsapi} category="rings" mainTitle='DAZZLING RINGS' mainDesc='Crafted for Your Forever' />
      <Footer />
    </>
  );
};

export default Home;
