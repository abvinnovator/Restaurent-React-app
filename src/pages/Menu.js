// Menu.js
import React from 'react';
import MenuList from '../data/data';
import Layout from '../components/Layout/Layout';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const Menu = () => {
  const categories = ['Breakfast', 'Snacks', 'Lunch', 'Dinner'];

  return (
    <Layout>
      {categories.map((category) => (
        <Box key={category} sx={{ marginBottom: 4 }}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            {category}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {MenuList.filter((menu) => menu.category === category).map((menu) => (
              <Card key={menu.name} sx={{ minWidth: 200, maxWidth: 300, marginBottom: 2 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={menu.name}
                    height="200"
                    image={menu.image}
                  />
                  <CardContent sx={{fontWeight:'bold'}}>
                    <Typography variant="h6">{menu.name}</Typography>
                    <Typography variant="body2">{menu.description}</Typography>
                    <Typography variant="body1">Price: Rs{menu.price}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Box>
      ))}
    </Layout>
  );
};

export default Menu;
