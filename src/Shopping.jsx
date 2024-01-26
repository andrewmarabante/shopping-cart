import React from "react";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import NavBar from "./Navbar";
import GetInfo from "./Components/productInfo";
import { v4 } from "uuid";
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Button} from "@mui/material";
import cart from "./Navbar"

const Shopping = () =>
{
  const [products, setProducts] = useState([])
  const [cartLength, setCartLength] = useState(window.cart.length);
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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const addCart = (e) =>
  {
    if(!window.cart.some(cartElement => cartElement.title === e.title)){window.cart.push(e)}
    setCartLength(window.cart.length)
  }

    return(
        <div>
            <NavBar cartLength={cartLength}/>
                <div style={{margin:'75px'}}></div>
                <Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                    products.map( (item) =>
                    {
                        return(
                            <Grid key={v4()} item xs={3}>
                                <Item style={{height:'500px', display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>
                                    <GetInfo item={item} cart={false}/>
                                    <div className="priceAdd" style={{height:'100%', display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>
                                        <Typography>${item.price}</Typography>
                                        <Button onClick={()=>addCart(item)}>Add To Cart</Button>
                                    </div>
                                </Item>
                            </Grid>
                        )
                    }
                    )
                }
                </Grid>
        </div>
    )
}

export default Shopping;