import React from 'react'
import {Item} from './item'

const items = [
    { text: "texto1", subtitle: "subtitle1", color: "blue" },
    { text: "texto2", subtitle: "subtitle2", color: "green" },
    { text: "texto3", subtitle: "subtitle3", color: "yellow" },
    { text: "texto4", subtitle: "subtitle4", color: "red" },
]
export const ItemList = () => {

    return ( 
        <div > 
            {
                items.map((item, indice) => {  // Funcionamiento de .map
                    console.log(item, indice);
                    return (
                        <Item item={item} key={indice}></Item>
                    )
                })
            }
        </div>
    )
}
