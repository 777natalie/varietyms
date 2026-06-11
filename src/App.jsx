import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <div className="bg-navy min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
    </div>
  );
}

export default App;