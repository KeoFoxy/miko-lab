//import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { NavBar } from './components/NavBar.js'
import { Banner } from './components/Banner.js'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer';
import { Contact } from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
