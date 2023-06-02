import "./App.css";
import Navbar from "./component/navbar/Navbar"
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Services } from "./pages/services/services";
import { Testimony } from "./pages/testimony/Testimony";
import { Contact } from "./pages/contact/Contact";
import Footer from './component/footer/Footer'


function App() {
  return (
  <>  
    <Router>
    <Navbar />
      <Routes>     
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/services" element={ <Services /> } />
        <Route path="/testimony" element={ <Testimony /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes> 
    </Router>
    <Footer />

  </>
  );
}

export default App;
