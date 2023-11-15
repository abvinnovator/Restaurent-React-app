import React from 'react'
import { Box,Typography } from '@mui/material'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <>
      <Layout>
       <Box sx={{my:15,textAlign:'center',"& h4":{fontWeight:"bold",my:2,fontSize:'2',p:2},"& p":{textAlign:"justify"},
      "@media(max-width:600px)":{
        mt:0,
        "&h4":{
          fontSize:"1rem"
        }
      }
      }}>
        <Typography variant='h4'>
          Welcome To ASR<hr />
        </Typography>
        <p >Welcome to "Andhra spicies" Restaurent, where culinary excellence meets a warm and inviting atmosphere. Nestled in the heart of Ongole, our restaurant is a celebration of flavors, passion, and community.

At Andhra spicies's Restaurent, we take pride in crafting a dining experience that goes beyond the ordinary. Our chefs, inspired by a commitment to quality, source the finest local ingredients to create dishes that tantalize the taste buds and leave a lasting impression.

Immerse yourself in a journey of culinary delights as you explore our diverse menu, carefully curated to satisfy every palate. Whether you're a fan of Biryani classics or eager to embark on a gastronomic adventure with our chef's specials, we have something for everyone.

Beyond the delectable dishes, This is a place where memories are made. Our cozy and stylish interior provides the perfect backdrop for intimate dinners, family gatherings, or celebrations with friends. Our attentive staff is dedicated to ensuring your dining experience is nothing short of exceptional.

As a cornerstone of the Andhra culinary scene, we are committed to fostering a sense of community. From our locally inspired decor to our partnerships with nearby producers, we strive to contribute to the vibrant tapestry of our neighborhood.

Join us  for a culinary journey that transcends the ordinary. Whether you're a food enthusiast, a connoisseur, or someone looking for a memorable meal, we invite you to savor the moments with us.</p>
       </Box>
      </Layout>
    </>
  )
}

export default About
