import React from 'react';
import { useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { products } from '../menuList'

let menu =  products
const ProductItem = () => {
    
    const {params} = useParams()
    const id = (params - 1)
    console.log(menu)
    console.log(id)
    const item = products.filter(({ id }) => id === products.id)[1]

    console.log({menu})
    
    return (
        <div>
           {menu.title}
        </div>
        
        // console.log(prop)
    )
};

export default ProductItem;