import './card.scss';
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {addProduct} from '../../store/reducers/index'
import {v4 as uuidv4} from 'uuid'



function Card({id, img, title, description, price, weight}) {
    const dispatch = useDispatch()  

    let item = {
        id: uuidv4(),
        title: title,
        img: img,
        price: price
    }
    // const addCart = (id) => {
        
    //     console.log(id)
    //     dispatch({type: 'ADD_CART', id})

    // }  

    const handleAddProduct = () => {
        // console.log(item)
        dispatch(addProduct(item))
        alert('Товар добавлен в корзину')

    }
 
    return (
    
        
        <div className="card">
        <div className="card__preview-wrap">
        <img className='card-preview' src={img} alt="" />
        </div>
        <div className="card__text-wrap">
        <h2 className="card__title">{title}</h2>

        <p className="card__description">{description}
        
        </p>
        
        <div className="card__add-wrap">
        <div className="card__price">{price} / {weight}</div>
        <div className="card__add-button" onClick={handleAddProduct}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="#323232" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="15" />
        <path d="M15 9.28564V20.3571" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M20.3569 14.8214L9.28551 14.8213" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg></div></div>
        </div></div>

    );

}

export default Card;