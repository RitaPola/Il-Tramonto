import React from "react"
import '../navBarComponent/navbarComponent.scss'
import { Button, AppBar, Toolbar, Stack } from '@mui/material'

const NavbarComponent = ({ img, text1, text2, text3 }) => {
  return (
   <AppBar position="static" color="default">
    <Toolbar >
      <a href=""><img src={img} alt="Logo" /></a>
      <div style={{ flex: 0.9}}></div>
     <Stack direction='row' spacing={5}>
     <a href="#">{text1}</a>
     <a href="#">{text2}</a>
     <a href="#">{text3}</a>
     </Stack>
    </Toolbar>
   </AppBar>
  );
};

export default NavbarComponent;