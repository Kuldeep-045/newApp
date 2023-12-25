


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home"
import Footer from "./components/Footer"
import Contact from './components/Contact.jsx';
import Services from './components/Services.jsx'

import "./styles/App.scss"
import "./styles/color.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/Footer.scss"
import "./styles/contact.scss"
import "./styles/mediaquery.scss"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path="/services" element={<Services />} />
      </Routes>
      {/* <Contact /> */}
      <Footer/>
    </Router>
  );
};

export default App
