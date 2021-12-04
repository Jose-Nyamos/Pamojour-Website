import Navbar from "./components/Navbar/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../src/components/Pages/login.css"
import  { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import  Create  from "./components/Pages/Create";
import Login from './components/Pages/Login';
import Contact from './components/Pages/Contact'
import Home from './components/Pages/Home/Home'
import Footer from "./components/Footer/Footer";
import  Dashboard from "./components/Dashboard/Dashboard";



function App() {
  return (
    <Router>
      <div className="container_fluid">
        <Navbar />
           
             <Routes>
               <Route exact path="/" element={<Home />} />
               </Routes>

               
                 <Routes>
                  <Route exact path="/contact" element={ <Contact/>} />
                  <Route exact path="/dashboard" element={ <Dashboard/>} />
                  <Route path="/login" element={<Login/>} />
                  <Route path="/create" element={<Create/>}/>
                  </Routes>
                
          
           <Footer />
      </div> 
    </Router>
 
   
  );
}

export default App;
