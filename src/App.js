import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router> 
        <Navbar />
          <Routes>
            <Route path='/' exact element={<Home/>} /> 
            <Route path='/menu' exact element={<Menu/>} /> 
            <Route path='/about' exact element={<About/>} /> 
            <Route path='/contact' exact element={<Contact/>} /> 
          </Routes> 
      <Footer />
      </Router>
    </div>
  );
}

export default App;
