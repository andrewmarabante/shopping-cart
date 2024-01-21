import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  /*
  const [products, setProducts] = useState([])
  useEffect(
    () =>{
      getProducts();
    }, []
  )
  const getProducts = async () =>
  {
    const data = await (await (await fetch('https://fakestoreapi.com/products')).json());
            setProducts(data);
  }
  console.log(products)
  */
  return (
    <>
      <div>
        <nav>    
          <ul>
            <li>
              <Link to="shopping">Shopping page</Link>
            </li>
          </ul>
        </nav>
        <p>HomePage</p>
      </div>
    </>
  )
}

export default App
