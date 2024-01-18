import React from "react";
import {Container, Typography} from '@mui/material'
import {motion} from 'framer-motion';


const Description = ({text,text1}) =>{
return(
<Container maxWidth="sm" className="principalContainer">
<Typography variant="h2" component="h1" className="title">{text}</Typography>
<Typography variant="p" component="p" className="paragraph">{text1}</Typography>
</Container>
)
}

export default Description;