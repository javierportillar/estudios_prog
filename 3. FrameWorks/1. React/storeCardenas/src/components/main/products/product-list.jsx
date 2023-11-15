import React from 'react'
import { ProductItem } from './product-item'

const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 200 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 300 },
    { id: 4, name: 'Product 4', description: 'Description 4', price: 400 },
]
export const ProdcutList = () => {
    return (
        <div className='product-list'>
            {products.map(product => {
                return <ProductItem product={product} key={product.id}/>
            })}
        </div>
    )
}
// export const ProdcutList = ({ cart, setCart }) => {
//     return (
//         <div className='product-list'>
//             {products.map(product => {
//                 return <ProductItem product={product} key={product.id} cart={cart} setCart={setCart} />
//             })}
//         </div>
//     )
// }
