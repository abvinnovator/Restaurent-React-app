import React from 'react'
import '../styles/HomeStylees.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from '../components/Layout/Layout'
import Background from './images/background.jpg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const Home = () => {
  useEffect(()=>{
    AOS.init({duration:1200});
})
  return (
    <Layout>
      <div className='home' style={{backgroundImage:`url(${Background})`}}>
        <div className='headerContainer'>
        <div data-aos="fade-right">

          <h1>Andhra spicies</h1><hr /><br />
          <p>
          "Explore a world of deliciousness at Adhra Spicies,
           where our menu brings together a delightful fusion of flavors to satisfy every palate."
          </p>
          </div>
          <Link to='/menu'>
          <button>
            order now
          </button>
          </Link>
          <h4>Let's order your Favourite dish!!</h4>
        </div>
        </div>
      
    </Layout>
  )
}

export default Home;
