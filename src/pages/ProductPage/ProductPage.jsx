import React, { useState, useEffect } from 'react'
import './ProductPage.css'
import Header from '../../components/Header/Header'
import { useParams } from 'react-router-dom'
import { file } from '../../File'
import ProductDetails from '../../components/ProductDetails/ProductDetails'
import Footer from '../../components/Footer/Footer'
import SingleSection from '../../components/singlesection/SingleSection'

const ProductPage = () => {
  const [relatedProducts, setRelatedProducts] = useState([])
  const [currentProduct, setCurrentProduct] = useState({})
  const perms = useParams()

  useEffect(() => {
    const foundProduct = file.find((item) => item.short === perms.productshort)
    setCurrentProduct(foundProduct)

    if (foundProduct) {
      const similarProducts = file.filter(item => item.category === foundProduct.category)
      setRelatedProducts(similarProducts)
    }
  }, [perms.productshort])

  return (
    <>
      <Header />
     <ProductDetails product={currentProduct} />
      <SingleSection api={relatedProducts} category={currentProduct.category} />
      <Footer />
    </>
  )
}

export default ProductPage
