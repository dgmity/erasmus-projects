import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar  item1="Home" item2="About" item3="Skills" item4="Projects" item5="Contact"/>
      <Hero name="Maksim Buranok" profession="Junior FullStack Developer" text="I can build anything"/>
      <About name="Maksim" age={17} city="Grodno" university="BSUIR"/> 
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App