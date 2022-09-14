import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'

const ProductItem = () => {
  const params = useParams()
  const id = params.id - 1
  const cards = useSelector(state=> state.cards)
  const product = cards[id]
  return id
}

export const products = [
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
  },
  {
    "id": "4",
    "title":"Стейк свинины",
    "description":"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ",
    "price":"2300",
    "weight":"1600 г",
    "img":"../images/4.png"
  },
  {
    "id": "5",
    "title":"Стейк говяжий со соусом",
    "description":"Не следует, однако забывать, что реализация намеченных плановых",
    "price":"1100",
    "weight":"900 г",
    "img":"../images/5.png"
  },
  {
    "id": "6",
    "title":"Салат Цезарь",
    "description":"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
    "price":"450",
    "weight":"1 шт",
    "img":"../images/7.png"
  },
  {
    "id": "7",
    "title":"Устрицы по рокфеллеровски",
    "description":"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ",
    "price":"2700",
    "weight":"500 г",
    "img":"../images/7.png"
  },
  {
    "id": "8",
    "title":"Свиные ребрышки на гриле с зеленью",
    "description":"Не следует, однако забывать, что реализация намеченных плановых",
    "price":"1600",
    "weight":"750 г",
    "img":"../images/8.png"
  },
]
