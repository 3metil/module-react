import Card from '../components/elements/card.js'
import {products} from '../menuList.js'
import {Link} from "react-router-dom";
import Header from '../header/Header.jsx'
import {useDispatch} from 'react-redux'
import {Button} from "react-bootstrap"



function Products ({prop}) {


  return (

      <main className="main">
      <div className="container">
      <Header/>
      <div className="menu">
        {products.map(key => {
        return ( 
        <Card
                id={key.id}
                img={key.img} 
                title={key.title}
                description={key.description}
                price={key.price}  
                weight={key.weight}
                
                 />

                 
        )
        
}
)
}

       

      
      </div>
      </div>
    </main>
    )
 
}

export default Products;