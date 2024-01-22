import { WidthFull } from "@mui/icons-material";
import { useState } from "react";
import './productInfo.css'

function GetInfo({item})
{
    console.log(item.title)
    return(

        <div>
            <img src={item.image} alt="" className='productImage'/>
            <div>{item.title}</div>
            <div>{item.description}</div>
            <div>{item.price}</div>
        </div>
    )
}

export default GetInfo;