import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Typography} from '@mui/material';
import './NavBar.css'
import { Link } from 'react-router-dom';


const NavBar = () =>
{
    return(
        <div id='navbar'>
            <Link to="/">
                <div id='home'>
                <HomeIcon />
                <Typography variant='subtitle2'>SomeShop</Typography>
                </div>
            </Link>

            <Link to='/shopping'>
                <Typography id='Shopping' variant='subtitle1'>Shopping</Typography>
            </Link>
            <Typography variant='subtitle1'>Profile</Typography>
            <ShoppingCartIcon />

        </div>
    )
}

export default NavBar;