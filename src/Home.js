import React from 'react';
import onion from './assets/onion.png'; // Adjust the path if necessary

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        {/* Image */}
        <img src={onion} alt="Me and my friend" className="onion-image" />

        {/* Text content */}
        <div className="text-content">
        <h1 className="welcome-text">Welcome to Forest Kids!</h1>
          <p>Yoohoo! We're Mindy and Vaughn, two friends who teamed up to create this quirky and creative space. Mindy is studying painting and computer science at UVA, while Vaughn dives deep into anthropology at VCU. Our shared love for funky designs and playful creativity led us to start Forest Kids, where we explore the whimsical and unexpected. Join us on this fun journey!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
