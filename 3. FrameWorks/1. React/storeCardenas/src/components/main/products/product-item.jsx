import React, { useContext, useState } from 'react'
import { cartContext } from '../../../context/cart-context'

export const ProductItem = ({product}) => {
    const {cart, setCart} = useContext(cartContext);
    
    const addToCart = () => {
        const alreadyInCart = cart.find(item => item.id === product.id);
        if (alreadyInCart) return;
        setCart((prev)=>[...prev,product])
    }
    const removeFromCart = () => {
        const alreadyInCart = cart.find(item => item.id === product.id);
        if (!alreadyInCart) return;
        setCart((prev)=>prev.filter(item=>item.id!==product.id));    
    }
    
    return (
        <div className='product-list-item'>
            <span>id:{product.id} </span>
            <span>nombre:{product.name} </span>
            <span> Estado: {cart.find(item => item.id === product.id) ? "Añadido" : "sin Añadir"}
            </span>
            <button onClick={addToCart}>Añadir</button>
            <button onClick={removeFromCart}>Remover</button>
        </div>
    )
}
