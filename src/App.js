import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Gallery from './Gallery';
import Contact from './Contact';
import './styles.css';
import logo from './assets/logo.png';

function App() {
  return (
    <Router basename="/forestkids"> {/* Set basename for GitHub Pages */}
      <div className="App">
        <div className="logo-container">
          <img src={logo} alt="Forest Kids Logo" className="logo-image" />
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
