import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




//CSS
import "./App.css"

//Compponents
import Footer from "./components/Footer/Footer"
import Homepage from "./components/Homepage/Homepage"
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About';
import Bod from './components/BOD/Bod';
import Directories from './components/Directry/Directories';
import Ventures from './components/Ventures/Ventures';
import Manufacturing from './components/Manufacturing/Manufacturing';
import Tour from './components/Tour/Tour';
import Services from './components/Services/Services';
import Upcoming from './components/Upcoming/Upcoming';
import Contact from './components/Contact/Contact';
import Trading from './components/Trading/Trading';




const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path='about-us/' element={<About/>}/>
        <Route path="Board-of-directors/" element={<Bod/>}/>
        <Route path='Our-Directories' element={<Directories/>}/>
        <Route path="Ventures" element={<Ventures/>}/>
        <Route path="Trading" element={<Trading/>}/>
        <Route path='Manufacturing' element={<Manufacturing/>}/>
        <Route path='Upcoming' element={<Upcoming/>}/>
        <Route path='Services' element={<Services/>}/>
        <Route path='Tour' element={<Tour/>}/>
        <Route path='Contact-Us' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}
export default App