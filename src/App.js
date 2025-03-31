import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import Footer from '../src/components/Footer';
import About from "./components/pages/About";
import Projects from "./components/pages/projects/Projects";
import ContactPage from "./components/pages/ContactPage";


function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
