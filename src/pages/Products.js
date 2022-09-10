import Card from '../components/elements/card.js'
import {products} from '../menuList.js'
import {Link} from "react-router-dom";
import Header from '../header/Header.jsx'
function addProductToBasket(price) {
  console.log(price)
}

function Products ({basketCounter, basketSum}) {

  
  return (

      <main className="main">
      <div className="container">
      <Header/>
      <div className="menu">
        {products.map(key => {
        return ( 
        
        <Card
                img={key.img} 
                title={key.title}
                description={key.description}
                price={key.price}  
                weight={key.weight}
                handleClick={addProductToBasket(key.price)}
                 />
        )
})}
       

      
      </div>
      </div>
    </main>
    )
 
}

export default Products;