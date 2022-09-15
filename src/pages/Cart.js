import './Cart.scss'


import {Link} from "react-router-dom";
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {removeProduct} from '../store/reducers/index'


function Cart() {

const dispatch = useDispatch()
const {Cart, totalCost} = useSelector(state => state.cart);

const handleRemProduct = (item) => () => {
  
  dispatch(removeProduct(item))
  
}

const cart = useSelector(state => state.cart.cart)

return(

  
  
<div className={"cart"}>
  <header className='cart__header'>
    <div className='cart__backButton'><Link to='/'><img src='../../images/cart-backButton.svg'></img></Link></div>
    <h1 className={"cart__title"}>КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ</h1>
  </header>

  
{cart.map(item => {
const {img, title, price} = item
return (
  <div className='cart__card'>
    
    <div className='cart__item-wrap'>
    <div className='cart__item-image'><img src={img} alt='изображение товара'/></div>
    <div className='cart__item-title'>{title}</div>
    <div className='cart__price-wrap'>
    <div className='cart__item-price'>{price} ₽</div>
    <img className='cart__delete-button' src='../../images/deleteElement.svg' onClick={handleRemProduct(item)}></img>
    
    </div>
    </div>
 </div>
)

})}

 
  <main>

  </main> 
<div className='cart__footerLine'><hr></hr></div>
<footer className={'cart__footer'}>
  <h2 className ={'cart__price'}>Заказ на сумму: <span>{totalCost} ₽</span></h2>
  <button className={'cart__button'}>Оформить заказ</button>

  </footer>



  </div>

  

)
}

export default Cart;