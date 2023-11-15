import { Box, IconButton, Typography,Stack } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react'

const Footer = () => {
  return (
    <>

        <Box sx={{textAlign:'center',backgroundColor:'black',color:'whitesmoke'}}>
        <Box sx={{my:3,"& svg":{fontSize:"60px",cursor:"pointer",mr:2,},"& svg:hover":{color:"goldenrod",transform:"translateX(5px)",transition:'all 400ms'}}}>
      <IconButton color='error' size='large'href="https://instagram.com/vamsiaratipamula?igshid=MzMyNGUyNmU2YQ==">
        <InstagramIcon />
      </IconButton>
     <IconButton color='info'size='large'href="https://www.linkedin.com/in/brahmavamsi-aratipamula-42251626b">
      <LinkedInIcon />
     </IconButton>
     <IconButton size='large' color='primary'href="https://twitter.com/Zake_Sully?s=09">
      <TwitterIcon />
     </IconButton>
      
    </Box>
            <Typography variant='h5'sx={{"@media (max-width:600px)":{fontSize:"1rem"}}}>
                All rights reserved &copy; A B VAMSI
            </Typography>
        </Box>
      
    </>
  )
}

export default Footer
