import React from 'react';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import Layout from '../components/Layout/Layout';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 10, ml: { xs: 3, md: 10 }, "& h4": { fontWeight: "bold", mb: 2, fontSize: { xs: "20px", md: "25px" }, color: "black" } }}>
        <Typography variant='h4'>
          Online Delivery Available
        </Typography>
        <Typography sx={{ color: 'gray', mt: 2 ,fontWeight:"bold"}}>
          Indulge in the artistry of flavor at ASR, where every dish is a poetic expression waiting to be savored. Our menu, a seamless blend of innovation and tradition, now comes to you with our hassle-free online delivery service. Immerse yourself in the charm of our thoughtfully designed space, whether in the comfort of your home or at our inviting venue. From our kitchen to your doorstep, we bring the culinary experience to life, ensuring that every bite is a masterpiece, no matter where you are. With a commitment to excellence, ASR invites you to savor the extraordinary, effortlessly delivered to your table.
        </Typography>
      </Box>
      <Box sx={{ m: 3, width: { xs: "100%", sm: "600px" },fontWeight:"bold", ml: { xs: 0, sm: 18 }, "@media (max-width:600px)": { width: "100%", ml: 0 } }}>
        <TableContainer component={Paper} >
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "center", background: "black", color: "white", fontSize: { xs: "18px", sm: "25px" } }}>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: 'red', pt: 1 }} /> 123456789
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: 'skyblue', pt: 1 }} /> DawatRes@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: 'blue', pt: 1 }} /> +91 8745 612 355
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;


