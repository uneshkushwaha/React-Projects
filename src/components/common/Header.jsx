
import {useState} from 'react';
import { AppBar, Toolbar, styled, Box, Typography, InputBase } from "@mui/material";
import { logoURL } from "../../constants/constant";
import { Menu, BookmarkAdd, ExpandMore } from '@mui/icons-material';
import HeaderMenu from './HeaderMenu';
import { useNavigate } from 'react-router-dom';//used to navigate the home page from anywhere
import { routePath } from '../../constants/route';
//name export must contain curly braces

const StyledToolBar = styled(Toolbar)`
// if the given css didn't work then !important is mentioned
background: black;
min-height: 66px !important;


padding:0 144px !important;   
 justify-content:space-between; // to create space in appbar
 
 & > * {
    padding: 0 16px;
 }
 
 & > div {
    display:flex;
    align-items:center; // css for the boxes in appbar
    cursor:pointer;

    &>p{
        font-size:14px;
        font-weight:600;   // css for the text  of the boxes
    }
    font-size:14px;
    font-weight:600; // css for the text out of the boxes in the appbar
 }


`
const Logo = styled('img')({
    //img is written string not in template bcz toolbar is recognized as component of material ui where as img is html tag.So,in html tag ,css is applied with string and object
    
    width: 90
})

const InputSearchField = styled(InputBase)`
background:#FFFFFF;
height :45px;
width:55%;
border-radius:5px;

`



const Header = () => {

    const [open,setOpen]=useState(null);
    const navigate = useNavigate();


    const handleClick = (e) =>{
        setOpen(e.currentTarget);

    }
    const handleClose = () => {
        setOpen(null);
      };

        

    return (
        <AppBar position='static'>
 
            <StyledToolBar>
                <Logo src={logoURL} alt='logo' onClick={()=>navigate(routePath.home)} />

                <Box  onClick={handleClick}>
                
                    <Menu style={{fontSize:40}}/>
                    <Typography style={{fontSize:22}} >Menu</Typography>
                </Box>
                    <HeaderMenu open={open} handleClose={handleClose}/>

 
                <InputSearchField  placeholder=' All  Search IMDb'
                style={{fontweight:600}}>
                    
                    </InputSearchField>
                
                
               

                <Typography style={{fontSize:18,fontWeight:800}}> IMDb <Box component='span' style={{fontSize:18,fontWeight:600,color:'#00FFFF'}}>Pro</Box> </Typography>

                <Box>
                    <BookmarkAdd />
                    <Typography  style={{fontSize:18,fontWeight:700}}>Watchlist</Typography>
                </Box>

                <Typography style={{fontSize:18,fontWeight:700}}>Sign In</Typography>
                <Box>
                    <Typography style={{fontSize:18,fontWeight:700}}>EN</Typography>
                    <ExpandMore />
                </Box>


            </StyledToolBar>

        </AppBar>
    )
}
export default Header;