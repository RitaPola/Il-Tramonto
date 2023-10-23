import React from "react"
import '../navBarComponent/navbarComponent.scss'
import { Box, Paper } from '@mui/material'
const NavbarComponent = ({ li1, li2, li3 }) => {
  return (
    <Paper elevation={1} className="navbar">
   
      <ul>
        <li>
          <a href="#home">{li1}</a>
        </li>
        <li>
          <a href="#chiSiamo">{li2}</a>
        </li>
        <li>
          <a href="#contatti">{li3}</a>
        </li>
      </ul>
  </Paper>
  );
};

export default NavbarComponent;