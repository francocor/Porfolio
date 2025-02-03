import Home1 from '../Component/Home01'
import Home2 from "../Component/Home2"
import Navbar from '../Component/Navbar'
import Footer from "../Component/Footer"
import "../Css/style.css"


const Home = () => {
  return (
    <div className='home-section'>
      <Navbar />
      <Home1 />
      <Home2 />
      <Footer />
      
    </div>
  )
}

export default Home