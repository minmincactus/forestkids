import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Gallery from './Gallery';
import Contact from './Contact';
import ArtPiece from './ArtPiece';
import './styles.css';
import logo from './assets/logo.png';

function App() {
  return (
    <Router> {/* Using HashRouter instead of BrowserRouter */}
      <div className="App">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Forest Kids Logo" className="logo-image" />
          </Link>
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/art/:id" element={<ArtPiece />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
