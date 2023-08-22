import Home from "./components/home/Home";
import About2 from "./components/about/About2";
import Service from "./components/service/Service";
import Features from "./components/Features/Features";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import './App.css';



function App() {
  return (
    <div className="App">
    
    
    
      <Home />
      <Features />
    
    <Service />
    <Portfolio />
    <About2 />
    <Contact />
     <Footer />

   {/* /* <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Portfolio" element={<Portfolio />} />
  
      <Route path="/Features" element={<Features />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Contact" element={<Contact />} />
     

      
    </Routes> */ }
    
    </div>
  );
}

export default App;
