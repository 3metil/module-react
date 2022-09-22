import React from 'react';
import { useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { products } from '../menuList'
import './Productitem.scss'
import Header from '../header/Header.jsx'
import {addProduct} from '../store/reducers/index'
import {useDispatch} from 'react-redux'
import {v4 as uuidv4} from 'uuid'

let menu =  products
const ProductItem = () => {
    
    const {params} = useParams()
    const menu = products.filter(products => products.id === params)
    const dispatch = useDispatch() 

    const handleAddProduct = () => {
        
        let item = {
        id: uuidv4(),
        title: menu[0].title,
        img: menu[0].img,
        price: menu[0].price

        }
        dispatch(addProduct(item))
        alert('Товар добавлен в корзину')


    }
    return (
                <><Header />
                <div className='card-one__container'>
                <div className="card-one">
                
                <div className="card__preview-wrap">
                <img className='card-preview' src={menu[0].img} alt="" />
                </div>
                <div className="card__text-wrap">
                <h2 className="card__title">{menu[0].title}</h2>
        
                <p className="card__description">{menu[0].description}
                
                </p>
                
                <div className="card__add-wrap">
                <div className="card__price">{menu[0].price} ₽/ {menu[0].weight}</div>
               <button className="card-one__add-button" onClick={handleAddProduct}>Добавить в корзину</button>
               </div>
                </div></div></div></>
        
    )
};

export default ProductItem;