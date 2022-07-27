import './App.css';
import Header from './Components/Header';
import HomePage from "./Pages/HomePage"
import About from "./Pages/About";
import Packages from "./Pages/Packages";
import Demo from "./Pages/Demo";
import { useState, useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import FAQ from './Pages/FAQ';
import Footer from './Components/Footer';
import CreateImage from './Pages/CreateImage';
import Features from './Pages/Features';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPost from './Pages/BlogPost';
import Image from './Pages/Image';

function App() {
  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/about' element={<About />} />
          {/* <div className='parallax' id='parallax1_image'><div className='overlay'></div></div> */}
          <Route path='/packages' element={<Packages />} />
          <Route path='/features' element={<Features />} />
          {/* <div className='parallax' id='parallax2_image'><div className='overlay'></div></div> */}
          <Route path='/demo' element={<Demo />} />
          <Route path='/demo/uploads/:imgsrc' element={<Image />} />
          {/* <div className='parallax' id='parallax3_image'><div className='overlay'></div></div> */}
          <Route path='/faqs' element={<FAQ />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/createimage' element={<CreateImage />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:id' element={<BlogPost />} />
        </Routes>
        <Footer />
      </Router>
      <div>
        <TawkMessengerReact
          propertyId="5e8f103169e9320caac1e468"
          widgetId="default"
          ref={tawkMessengerRef} />
      </div>
    </div>
  );
}

export default App;
