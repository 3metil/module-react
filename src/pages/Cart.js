import './Cart.scss'
// import MenuPage from './pages/MenuPage/MenuPage';
import {Link} from "react-router-dom";
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {removeProduct} from '../store/reducers/index'
// import {removeProduct} from '../store/reducers/index'
// import {Container, Row, Col, Card, Button} from 'react-bootstrap'
// import {useParams} from 'react-router-dom'
// let state = []






function Cart() {

const dispatch = useDispatch()
const {Cart, totalCost} = useSelector(state => state.cart);

const handleRemProduct = (item) => () => {

  dispatch(removeProduct(item))
  

}

const cart = useSelector(state => state.cart.cart)

return(

  
  
<div className={"cart"}>
  <header>
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

  {/* {product.length != 0 ? product.map(product =>
                <>
                                <Col className='mt-5' key={product.id} md={3}>
                    <Card>
                        <Card.Img src={product.img} />
                    </Card>
                </Col>
                <Col className='mt-5' md={7}>
                    <div className='product__price'>{product.price} &#8381;</div>
                    <div className='product__title'>{product.title}</div>
                    <div>{product.desc}</div>
                </Col>
                <Col className='mt-5' md={2}>
                    <Button onClick={() => remCart(product.id)}>X</Button>
                </Col>
                </>
                ) : <h1 className='mt-5'>No product added yet</h1> } */}

  <main>

  </main> 
<div className='cart__footerLine'><hr></hr></div>
<footer className={'cart__footer'}>
<h2 className ={'cart__price'}>Заказ на сумму: <span>{totalCost} ₽</span></h2>
<div className={'cart__wrap'}>
    
    <button className={'basket__button'}>Оформить заказ</button>
    <p className={'basket__buttonBack'}><Link to='/'>Назад к выбору</Link></p>
</div>
  </footer>



  </div>

  

)
}

export default Cart;