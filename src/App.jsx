import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/pages/About"
import Service from "./components/pages/Service"
import PortfolioP from "./components/pages/PortfolioP";
import Career from "./components/pages/Career";
import Blog from "./components/pages/Blog";
import Header from './components/header/Header';




function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/portfolio" element={<PortfolioP />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
