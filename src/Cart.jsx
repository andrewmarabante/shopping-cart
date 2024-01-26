import NavBar from "./Navbar";
import GetInfo from "./Components/productInfo";
import { Grid, Typography } from "@mui/material";
import { v4 } from "uuid";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Button} from "@mui/material";
import './Cart.css'
import { useState } from "react";

function Cart()
{
    const [render, setRender] = useState('')
    let total = 0;
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    function addTotal(change)
    {
        total = total + change;
        const totalDisplay = document.getElementById('total')
        if(totalDisplay !== null)
        {
        totalDisplay.innerHTML = 'Your Total Is: $'+total.toFixed(2)
        }
    }

    function subTotal(change)
    {
    total = total - change;
    const totalDisplay = document.getElementById('total')
    if(totalDisplay !== null){
    totalDisplay.innerHTML = 'Your Total Is: $'+total.toFixed(2);
    }
    }

    function itemRemove(price)
    {
        subTotal(price)
        setRender(v4())
    }


    return(
        <div>
                <NavBar />
                {window.cart.length !==0 ? <div>
                    <div style={{margin:'75px'}}></div>
                    {
                        <Grid id='cartContainer' container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {window.cart.map(
                                (item) =>{
                                    return (
                                            <Grid key={v4()} item xs={3}>
                                                <Item style={{height:'500px', display:'flex', justifyContent:'center'}}>
                                                    <GetInfo item={item} cart={true} addTotal = {addTotal} subTotal={subTotal} itemRemove={itemRemove}/>
                                                </Item>
                                            </Grid>
                                    )
                                }
                            )}
                        </Grid>
                    }
                    <div style={{margin:'40px'}}></div>
                    <Typography id="total">{'Your Total Is: $'+total}</Typography>
                    <div id="payButtonContainer"><Button id='payButton'>Pay Now</Button></div>
                    <div style={{margin:'40px'}}></div>
                </div> : <Typography style={{textAlign:'center', paddingTop:'100px', paddingBottom:'100px', borderBottom:'solid'}}>Cart is Empty</Typography>}
        </div>
    )
}

export default Cart;