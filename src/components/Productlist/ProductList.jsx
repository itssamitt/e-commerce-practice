import React from 'react'
import './ProductList.css'
import Singleproduct from '../Singleproduct/Singleproduct'
import { Link } from 'react-router-dom'

const ProductList = ({api}) => {

  const style={
    textDecoration : 'none'
  }
  
  return (
    <div className='productlist'>
      {api.map((item)=>{
        return (
          <Link style={style} to={`/products/${item.short}`} key={item.id}>
            <Singleproduct img={item.image} title={item.title} price={item.price} />
          </Link>
        )
      })}
      
    </div>
  )
}

export default ProductList
