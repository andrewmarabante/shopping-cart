import { WidthFull } from "@mui/icons-material";
import { useState } from "react";
import './productInfo.css';
import { Typography } from "@mui/material";
import {Button} from "@mui/material";
function GetInfo({item})
{
    return(

        <div className='container'>
            <div className='imgCont'><img src={item.image} alt="" className='productImage'/></div>
            <Typography variant='h6' className="title">{item.title}</Typography>
            <Typography variant='body2' className="description">{item.description}</Typography>
        </div>
    )
}

export default GetInfo;