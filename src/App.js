import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Parallax } from 'react-parallax';
import Footer from './components/Footer';
import Gallary from './components/Gallary';
import Contact from './components/Contact'
function App() {
  return (
    <div className="App">
      <Navbar/>
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/gallary" element={<Gallary/>}/>
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Parallax>
        <Footer/>
      </Parallax>
    </div>
  );
}

export default App;
