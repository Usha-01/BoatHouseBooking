
import React from 'react';
import '../assets/css/Explore.css';
import boat1 from '../assets/images/Ad_dash.jpg'
import boat2 from '../assets/images/Keralaboat.jpeg';
import boat3 from '../assets/images/home.jpg';
import boat4 from '../assets/images/img.jpg';
import boat5 from '../assets/images/photo.jpg';
import boat6 from '../assets/images/view.avif';
import boat7 from '../assets/images/ex1.jpg';
import boat8 from '../assets/images/ex2.jpg';
import boat9 from '../assets/images/ex3.jpg';

import Navbar from '../components/Navbar';

const ExplorePage = () => {
  return (
    <div className="explore-book">
      <Navbar/>
      <div className="text-container">
        <h1>Discover the World</h1>
        <div id="text">
        <h4><i>
        Embark on a captivating journey of discovery as you explore the world of boats.
        <br></br> Whether navigating serene rivers, cruising vast oceans, or
        <br></br> gracefully gliding across tranquil lakes, each boat tells a unique story.
        <br></br> From traditional wooden vessels to modern luxury yachts, the world of boats offers
        <br></br> a diverse tapestry of craftsmanship, adventure, and maritime culture.
        <div id="text1">
        <br></br>Exploring the waters in a boat house not only offers a refreshing escape but also 
        <br></br>allows for an intimate connection with nature.
        <br></br> Imagine waking up to the gentle lapping of water against the hull,
        <br></br> sipping your morning coffee on a private terrace as the sun rises over the horizon, 
        <br></br>and leisurely cruising through picturesque landscapes.

        </div>
          </i></h4>
        </div>
      </div>
      <div id="im">
       <h4>
        <h2>Different boats</h2>
        </h4>
      </div>
      <div className="image-container">
        
        <img className="image" src={boat1} alt="Boat 1" />
        <img className="image" src={boat2} alt="Boat 2" />
        <img className="image" src={boat3} alt="Boat 3" />
        <img className="image" src={boat4} alt="Boat 4" />
        <img className="image" src={boat5} alt="Boat 5" />
        <img className="image" src={boat6} alt="Boat 6" />
        <img className="image" src={boat7} alt="Boat 7" />
        <img className="image" src={boat8} alt="Boat 8" />
        <img className="image" src={boat9} alt="Boat 9" />
      
       
     </div>
     {/* <div className='contact'>
        <h2>Contact us</h2>

     </div> */}
    </div>
  );
};

export default ExplorePage;
