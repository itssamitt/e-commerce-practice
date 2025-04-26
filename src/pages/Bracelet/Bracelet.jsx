import React from 'react'
import { useState, useEffect } from 'react'
import './Bracelet.css'
import Header from '../../components/Header/Header'
import ProductBanner from '../../components/ProductBanner/ProductBanner'
import Filter from '../../components/Filter/Filter'
import ProductList from '../../components/Productlist/ProductList'
import Footer from '../../components/Footer/Footer'
import { file } from '../../File'
import PageSkeleton from '../../components/PageSkeleton/PageSkeleton'


const Bracelets = () => {

  const [filteredapi, setFilteredapi] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      const api = file.filter((item) => item.category === "bracelets" );
      setFilteredapi(api);
      setIsLoading(false)
    }, []);
    

  return (
    <>
      <Header/>
      <ProductBanner/>
      <div className='listpage'>
        <Filter category='bracelets' />
        {isLoading ? <PageSkeleton/> : <ProductList api={filteredapi}/> }
      </div>
      <Footer/>
    </>
  )
}

export default Bracelets
