import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Aboutme from './pages/Aboutme'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


function App() {
  return (
    

      
        <Router>

            <Routes>

              <Route path="/" element={<Home />}/>
              <Route path="/skills" element={<Skills />}/>
              <Route path="/aboutme" element={<Aboutme />}/>
              <Route path="/projects" element={<Projects />}/>
              <Route path="/contact" element={<Contact />}/>

            </Routes>

        </Router>
        
  );
}

export default App;
