import './Cart.scss'
// import MenuPage from './pages/MenuPage/MenuPage';
import {Link} from "react-router-dom";
// import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
// import {Container, Row, Col, Card, Button} from 'react-bootstrap'
// import {useParams} from 'react-router-dom'
// let state = []






function Cart() {
  // const product = useSelector(state => state.cart)
  // const dispatch = useDispatch() 
  // const params = useParams()
  // const id = params.id - 1
  // const cards = useSelector(state=> state.cards)
  
  
  
  // const remCart = (id) => {
  //     dispatch({type: 'REM_CART', id})
  // }

const cart = useSelector(state => state.cart.cart)

return(

  
  
<div className={"basket"}>
  <header>
    <h1 className={"basket__title"}>КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ</h1>
  </header>

  
{cart.map(item => {
const {img, title, price} = item
return (
  <div className='card'>{img} </div>,
  <div>{title}</div>,
  <div>{price}</div>
 
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
<div className='basket__footerLine'><hr></hr></div>
<footer className={'basket__footer'}>
<h2 className ={'basket__price'}>Заказ на сумму:<span></span></h2>
<div className={'basket__wrap'}>
    
    <button className={'basket__button'}>Оформить заказ</button>
    <p className={'basket__buttonBack'}><Link to='/'>Назад к выбору</Link></p>
</div>
  </footer>



  </div>

  

)
}

export default Cart;