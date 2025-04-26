import React from 'react'
import './ProductBanner.css'
import productbanner from '../../assets/ProductBanner/productbanner.webp'

const ProductBanner = () => {
  return (
    <>
      <div className="productbanner">
        <img loading="lazy" className='bannerimage' src={productbanner} />
      </div>
    </>
  )
}

export default ProductBanner
