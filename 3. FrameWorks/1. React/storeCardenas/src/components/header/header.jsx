import React, { useContext } from 'react'
import { cartContext } from '../../context/cart-context'

export const Header = () => {

  const {cart} = useContext(cartContext);
  
  return (
    <div className='header'>
      <button><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M4 4H8V8H4V4Z" fill="currentColor"></path><path d="M4 10H8V14H4V10Z" fill="currentColor"></path><path d="M8 16H4V20H8V16Z" fill="currentColor"></path><path d="M10 4H14V8H10V4Z" fill="currentColor"></path><path d="M14 10H10V14H14V10Z" fill="currentColor"></path><path d="M10 16H14V20H10V16Z" fill="currentColor"></path><path d="M20 4H16V8H20V4Z" fill="currentColor"></path><path d="M16 10H20V14H16V10Z" fill="currentColor"></path><path d="M20 16H16V20H20V16Z" fill="currentColor"></path></svg></button>
        <span className='tienda'>Mi tienda</span>
        <span>Ver Carrito: {cart.length}</span>
    </div>
  )
}
