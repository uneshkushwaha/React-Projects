
 import {Menu,MenuItem} from '@mui/material'
 import { Link } from 'react-router-dom';
 import { routePath } from '../../constants/route';


const HeaderMenu =({open,handleClose}) =>{
    const openMenu =Boolean(open);


    return (
        <Menu
        id="basic-menu"
        anchorEl={open}//with whom respect we have to open
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to={`${routePath.categories}?category=NowPlaying`} style={{textDecoration:'none',color:'inherit'}}>
        <MenuItem onClick={handleClose}>Now Playing</MenuItem>
        </Link>
        
        <Link to={`${routePath.categories}?category=popular`} style={{textDecoration:'none',color:'inherit'}}>
        <MenuItem onClick={handleClose}>Popular</MenuItem>
        </Link>

        <Link to={`${routePath.categories}?category=TopRated`}style={{textDecoration:'none',color:'inherit'}}>
        <MenuItem onClick={handleClose}>Top Rated</MenuItem>
        </Link>

        <Link to={`${routePath.categories}?category=Upcoming`}style={{textDecoration:'none',color:'inherit'}}>
        <MenuItem onClick={handleClose}>Upcoming</MenuItem>
        </Link>
      </Menu>
    )


}
export default HeaderMenu;