
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import About from './components/About'
import Projects from './components/Projects';
import ContactPage from './components/ContactPage'

function App() {
  return (
    <div className="App">
    <NavBar/>
  
    <Routes>
    <Route path= "/" element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
 
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/contacts' element={<ContactPage/>}/>


    </Routes>
    <Footer/>
      
    </div>
  );
}

export default App;
