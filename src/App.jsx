import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServiceDetail from "./components/ServiceDetail";

const Home = () => (
  <>
    <Hero />
    <Services />
    <WhyUs />
    <Contact />
  </>
);

// Scrolls to the section matching the URL hash (e.g. /#contact)
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    } else if (location.pathname === "/") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <>
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;