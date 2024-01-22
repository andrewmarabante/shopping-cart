import React from "react";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import NavBar from "./Navbar";
import GetInfo from "./Components/productInfo";
import { v4 } from "uuid";
const Shopping = () =>
{
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

    return(
        <div>
            <NavBar />
            <Typography variant='h1'>Shopping Page</Typography>
            {
                products.map( (item) =>
                {
                    return(
                        <GetInfo key={v4()} item={item}/>
                    )
                }

                )
            }
        </div>
    )
}

export default Shopping;