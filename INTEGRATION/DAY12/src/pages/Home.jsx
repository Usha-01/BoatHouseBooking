import '../assets/css/Home.css'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../assets/css/Home.css';
import Footer from './Footer';


function Home() {
    return(
        <>
        <div>
       <Navbar />
       <div id="Home">
       <div id="Book">
       <h1>Discover Tranquil Adventures with <br></br> Boat House Booking</h1>
                    <p>Your Gateway to Serenity on the Water</p>
                    <Link to="/explore">
                     <button>Explore Boats</button>
                    </Link>
       </div>
     </div>
       
   
                  
       {/* <div className='foot'>
     <Footer/>
     </div> */}
     </div>
     </>
    )
}
export default Home;