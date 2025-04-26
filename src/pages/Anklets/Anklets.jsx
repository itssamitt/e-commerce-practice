import React from 'react'
import { useState, useEffect } from 'react'
import './Anklets.css'
import Header from '../../components/Header/Header'
import ProductBanner from '../../components/ProductBanner/ProductBanner'
import Filter from '../../components/Filter/Filter'
import ProductList from '../../components/Productlist/ProductList'
import Footer from '../../components/Footer/Footer'
import { file } from '../../File'

const Anklets = () => {

  const [filteredapi, setFilteredapi] = useState([])
    
    useEffect(() => {
      const api = file.filter((item) => item.category === "rings" );
      setFilteredapi(api);
    }, []);


  return (
    <>
      <Header/>
      <ProductBanner/>
      <div className='listpage'>
        <Filter/>
        <ProductList api={filteredapi} />
      </div>
      <Footer/>
    </>
  )
}

export default Anklets
