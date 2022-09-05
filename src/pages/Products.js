import Card from '../components/elements/card.js'
import {products} from '../menuList.js'
import {Link} from "react-router-dom";



function Products () {
  // const sum = 1200
  // const addPriceProduct = () => {}  
  let sumPrices = []
  
  return (

      <main className="main">
      <div className="container">
      <header className="header">

        <h1>НАША ПРОДУКЦИЯ</h1>
      <div className="menu__basket"><Link to='/add'><img src='../images/basket.svg'></img></Link>

</div>
      </header>

      <div className="menu">
        {products.map(key => {
        return ( 
        
        <Card
                img={key.img} 
                title={key.title}
                description={key.description}
                price={key.price}  
                weight={key.weight}
                // handleClick={addPriceProduct}
                 />
        )
})}
       

      
      </div>
      </div>
    </main>
    )

    
}

export default Products;