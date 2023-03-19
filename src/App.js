import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Faq from './components/Faq';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Faq/>} />
      </Routes>
    </div>
  );
}

export default App;
