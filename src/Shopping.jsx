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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

    return(
        <div>
            <NavBar />
                <div style={{margin:'75px'}}></div>
                <Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                    products.map( (item) =>
                    {
                        return(
                            <Grid item xs={3}>
                                <Item style={{height:'500px', display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>
                                    <GetInfo key={v4()} item={item}/>
                                    <div className="priceAdd" style={{height:'100%', display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>
                                        <Typography>${item.price}</Typography>
                                        <Button>Add To Cart</Button>
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