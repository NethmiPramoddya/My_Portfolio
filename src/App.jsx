import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import HireMeSection from "./components/HireMeSection";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <HireMeSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
