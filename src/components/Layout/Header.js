import React from 'react';
import { useState } from 'react';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MenuIcon from '@mui/icons-material/Menu';
import {Box, AppBar, Typography, Toolbar, Stack, IconButton, Drawer, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../styles/HeaderStyles.css';
 const Header = () => {
  const[mobile,setMobile]=useState(false);
  //handle that menu
  const handleDrawerToggle = ()=>{
    setMobile(!mobile)
  
  }
  //menu responsive
  const drawer = () => (
    <Box  sx={{ textAlign: 'center' }}>
      <Typography color={'goldenrod'} variant='h4' component='div' sx={{ flexGrow: 1,my:2 }}>
        <Stack direction='row'>
          <IconButton color='secondary'>
            <RestaurantIcon />
          </IconButton>
          <h3 textAlign="center">My restaurant</h3>

        </Stack>
      </Typography>
     <Divider />  
      <ul className='mobile-navigation-menu'><hr />
        <li><Link onClick={handleDrawerToggle} to="/">Home</Link></li>
        <li><Link onClick={handleDrawerToggle} to="/about">About</Link></li>
        <li><Link onClick={handleDrawerToggle} to="/menu">Menu</Link></li>
        <li><Link onClick={handleDrawerToggle}to="/contact">Contact</Link></li>
      </ul>
    </Box>
  );
  
  return (
    <>
<Box>
  <AppBar component={'nav'} sx={{ backgroundColor:'black' }}>
    <Toolbar>
      <IconButton color='primary' aria-label='open drawer' edge='start' sx={{mr:2,display:{sm:'none'}}}
      onClick={handleDrawerToggle}>
        <MenuIcon />
      </IconButton>
    <Typography color={'goldenrod'} variant='h4' component='div' sx={{flexGrow:1}}>
      <Stack direction='row'>
        <IconButton color='secondary'>
      <RestaurantIcon />
      </IconButton>
   <h3>ASR</h3>
   </Stack>
    </Typography>
    <Box sx={{display:{xs:'none',sm:'block'}}}>
      <ul className='navigation-menu'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </Box>
    </Toolbar>
  </AppBar>
  <Box component='nav'>
<Drawer variant='temporary'open={mobile} onClose={handleDrawerToggle} sx={{display:{xs:'block',sm:'none'},"& .MultiDrawer-paper":{
  boxSizing:"border-box",
  width:"100px",
},
}}>
  {drawer()}
</Drawer>
  </Box>
 <Toolbar />
</Box>
     </>
  )
}
export default Header;
