import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // v6 imports
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Gallery from './Gallery';
import Contact from './Contact';
import './styles.css';
import logo from './assets/logo.png';

function App() {
  return (
    // Notice the `basename="/forestkids"` added to Router
    <Router basename="/forestkids">
      <div className="App">
        <div className="logo-container">
          <img src={logo} alt="Forest Kids Logo" className="logo-image" />
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* This is the root path */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
