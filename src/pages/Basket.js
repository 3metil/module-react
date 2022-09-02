import './Basket.scss'
// import MenuPage from './pages/MenuPage/MenuPage';

const list = [
  {
    "id": "1",
    "title":"Устрицы по-рокфеллеровски",
    "img": "../images/1.png",
    "description":"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ",
    "price":"2700",
    "weight":"500 г",
    
  },
  {
    "id": "2",
    "title":"Свиные ребрышки на гриле с зеленью",
    "img":"../images/2.png",
    "description":"Не следует, однако забывать, что реализация намеченных плановых",
    "price":"1600",
    "weight":"750 г",
    
  },
  {
    "id": "3",
    "title":"Креветки по-королевски в лимонном соке",
    "description":"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
    "price":"1820",
    "weight":"7 шт",
    "img":"../images/3.png"
  }
  // {
  //   "id": "4",
  //   "title":"Стейк свинины",
  //   "description":"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ",
  //   "price":"2300 Р",
  //   "weight":"1600 г",
  //   "img":"../images/4.png"
  // },
  // {
  //   "id": "5",
  //   "title":"Стейк говяжий со соусом",
  //   "description":"Не следует, однако забывать, что реализация намеченных плановых",
  //   "price":"1100 Р",
  //   "weight":"900 г",
  //   "img":"../images/5.png"
  // },
  // {
  //   "id": "6",
  //   "title":"Салат Цезарь",
  //   "description":"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
  //   "price":"450 Р",
  //   "weight":"1 шт",
  //   "img":"../images/7.png"
  // },
  // {
  //   "id": "7",
  //   "title":"Устрицы по рокфеллеровски",
  //   "description":"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ",
  //   "price":"2700",
  //   "weight":"500 г",
  //   "img":"../images/7.png"
  // },
  // {
  //   "id": "8",
  //   "title":"Свиные ребрышки на гриле с зеленью",
  //   "description":"Не следует, однако забывать, что реализация намеченных плановых",
  //   "price":"1600 Р",
  //   "weight":"750 г",
  //   "img":"../images/8.png"
  // },
]
let cp = 0
function sum(price) {
  for (let i = 0; i <= 2; i++) {
    cp = cp + Number(list[i].price)
  }
  
  
  
  return(cp)

}

cp = sum(list.price)

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
  <button className={'basketCard__button'}>Х</button>
</div>

    </li>
  )
}
      </ul>
  </main> 

<footer className={'basket__footer'}>
<h2 className ={'basket__price'}>Заказ на сумму:<span> {cp} P</span></h2>
<div className={'basket__wrap'}>
    
    <button className={'basket__button'}>Оформить заказ</button>
</div>
  </footer>



  </div>

)
}

export default App;