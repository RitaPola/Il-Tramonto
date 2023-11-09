import React from "react"
import '../navBarComponent/navbarComponent.scss'
import {AppBar,Typography, Toolbar, Stack } from '@mui/material'
import {motion} from 'framer-motion';
const NavbarComponent = ({img,text0, text1, text2, text3, text4 }) => {
  return (
   <AppBar position="fixed" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
    <Toolbar >
    <motion.a  
      href=""
      whileHover={{ scale: 1.1 }}
      onHoverStart={e => {}}
      onHoverEnd={e => {}}><img src={img} alt="Logo" /></motion.a>
      <Typography className="custom-typography" variant="p" component="div">{text0}</Typography>
      <div style={{ flex: 0.9}}></div>
      <Stack direction='row' spacing={5}>
      <motion.a  
      href="#"
      whileHover={{ scale: 1.2 }}
      onHoverStart={e => {}}
      onHoverEnd={e => {}}>{text1}</motion.a>
     <motion.a  
      href="#"
      whileHover={{ scale: 1.2 }}
      onHoverStart={e => {}}
      onHoverEnd={e => {}}>{text2}</motion.a>
    <motion.a  
      href="#"
      whileHover={{ scale: 1.2 }}
      onHoverStart={e => {}}
      onHoverEnd={e => {}}>{text3}</motion.a>
     <motion.a  
      href="#"
      whileHover={{ scale: 1.2 }}
      onHoverStart={e => {}}
      onHoverEnd={e => {}}>{text4}</motion.a>

     </Stack>
    </Toolbar>
   </AppBar>
  );
};

export default NavbarComponent;