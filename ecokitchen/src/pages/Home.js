import Navbar from "../components/Navbar";
import '../App.css'

function Home() {
  
  return (
    //Main page styling start
    
    <div className="styles-container">
      <div className="header-container"></div>
      <div className="content-container">
        <h1 className="page-title">Your Homepage</h1>
        
        <button className="donate-btn">Donate</button>
        <input type="text" placeholder="Search" />
        
      </div>
{/* main page styling end */}
      <br/>
      <Navbar />
      
      </div>
      

      
  )
};


export default Home;
