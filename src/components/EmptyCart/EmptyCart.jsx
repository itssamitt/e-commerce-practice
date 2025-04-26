import React from 'react'
import './EmptyCart.css'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <>
      <div className='emptycart'>
        <p className='emptytext'>Your cart is empty</p>
        <Link className='link' to='/'><p className='continuebtn'>Continue shopping</p></Link>
      </div>
    </>
  )
}

export default EmptyCart
