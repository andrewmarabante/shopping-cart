import { WidthFull } from "@mui/icons-material";
import { useState } from "react";
import './productInfo.css';
import { Typography } from "@mui/material";
import {Button} from "@mui/material";
import NumberInput from "./quantity";

function GetInfo({item, cart, addTotal, subTotal})
{
    const [count, setCount] = useState(0);
    const [total,setTotal] = useState(item.price)



    function handleCountChange(amount)
    {
        if(amount <= 0 )
        {
            return
        }
        if(count < amount)
        {
            console.log('add')
            addTotal(amount*item.price-count*item.price)
            setCount(amount)
            setTotal(amount*item.price)
        }
        else{
            console.log('sub')
            subTotal(count*item.price-amount*item.price)
            setCount(amount)
            setTotal(amount*item.price)
        }
        console.log(amount)

    }
    return(

        <div className='container'>
            <div className='imgCont'><img src={item.image} alt="" className='productImage'/></div>
            <Typography variant='h6' className="title">{item.title}</Typography>
            {!cart && <Typography variant='body2' className="description">{item.description}</Typography>}
            {cart && <div>{total}</div>}
            {cart && <NumberInput count={count} changeNumberFunction = {handleCountChange} />}
        </div>
    )
}

export default GetInfo;