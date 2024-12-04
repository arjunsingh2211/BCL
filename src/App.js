import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Careers from './components/Careers';
import ContactUs from './components/ContactUs';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from './components/AboutUs';

function App() {
  return(
    <>
    <Router>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/services' element={<Services/>}/>
      <Route exact path='/career' element={<Careers/>}/>
      <Route exact path='/about-us' element={<AboutUs/>}/>
      <Route exact path='/contact-us' element={<ContactUs/>}/>
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App;
