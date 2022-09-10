import './Basket.scss'
// import MenuPage from './pages/MenuPage/MenuPage';
import {Link} from "react-router-dom";
let list = []

  




function App() {


return(
<div className={"basket"}>
  <header>
    <h1 className={"basket__title"}>КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ</h1>
  </header>

  <main>
      <ul className={'basket__list'}>
{
  list.map((list, index) =>
    <li key={index} className={'basketCard'}>
<div className={'basketCard__main'}>
<img src={list.img} className={'basketCard__img'} alt="" />
<h3 className={'basketCard__title'}>{list.title}</h3>
</div>
<div className={'basketCard__action'}>
  <span className={'basketCard__price'}>{list.price} Р</span>
  <button className={'basketCard__button'}><img src='../images/deleteElement.svg'></img></button>
</div>

    </li>
  )
}
      </ul>
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

export default App;