import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import NavBar from './Navbar'
import { Typography } from '@mui/material'

function App() {
  return (
    <>
      <div>
        <NavBar />  
        <Typography id='header' variant='h1'>Welcome to SomeShop!</Typography>
        <Typography id='mission' variant='h4'>
                  Here at SomeShop, We care not just about quantity, but the 
                  quality of of the clothes we sell. Our mission is to provide
                  amazing apparel at affordable prices. The last thing you want
                  is to end up looking like Eliza from work. We ALL know Eliza 
                  from work.. That one girl who has a black t-shirt on every single
                  day. 
        </Typography>
        <div id='picSec1'>
          <img src="../public/images/clothing_pic.jpeg" alt="Pic of Guy" id='clothingPic'/>
          <Typography id='picSecPara1' variant='subtitle1'>
            Check out this super dope picture of some customer at our local retail
            store. He looks so happy and vibrant because he sees the crazy deals we 
            have. My man is looking at this shirt like... There is NO way this is 
            actually only 20 dollars. But guess what? It really is only 20 dollars. We are
            able to get our prices THAT low just because we take them off the backs of
            underage dolphins. These dolphins have no say in the matter because of two
            main factors. For one, they are dolphins. For two, they are underage. Personally,
            I thought this would be enough writing for this section but it is not filling out
            nearly as much as I thought it would.
          </Typography>
        </div>
        <div id='picSec2'>
          <Typography id ='picSecPara2'>
            Here is a pic of one of the dolphins whom we took a shirt off of. As you can 
            tell he is very happy and has not in any way been affected by us taking his 
            shirt other than the fact that he does not have a shirt. Thus, taking shirts off the
            backs of dolphins is a very humane activity and should be seen as a safe practice
            which puts our company as a safe alternative to regular human made shirts.
          </Typography>
          <img src="../public/images/dolphin_pic.jpeg" alt=""  id='dolphinPic'/>
        </div>
      </div>
    </>
  )
}

export default App
