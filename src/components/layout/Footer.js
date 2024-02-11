import React from 'react'
import classes from "./Footer.module.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Avatar } from '@mui/material';

function Footer() {
  return (
<React.Fragment>
<footer className={classes.footerdistributed}>
      <a href={"https://www.facebook.com/liroy.nezri"} target="_blanked"><FacebookIcon sx={{color: "#2166e6"}}></FacebookIcon></a>
      <a href={"https://www.instagram.com/liroynezri/"} target="_blanked"><InstagramIcon style={{color: "white"}}></InstagramIcon></a>
      <a href={`https://api.whatsapp.com/send?phone=972502457449&text=Hi%20Liroy,%20I%20saw%20your%20site%20and%20wanted%20to%20give%20you%20a%20comment`} target="_blanked"><WhatsAppIcon  style={{color: "#39df18"}}></WhatsAppIcon></a>
    <p>Liroy CoinStats &copy; 2022</p>
  </footer> 
  </React.Fragment>
  )
}

export default Footer