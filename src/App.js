import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home, About, Membership, Gallery, Contact } from './components';
import { Menu, X } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-black text-white sticky top-0 z-50 shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link to="/" className="flex items-center space-x-2">
                <img 
                  src="https://i.ibb.co/zr3rTHY/AU-UNITED-PHOTOGRAPHY-CLUB-png-White.png" 
                  alt="AU United Photography Club Logo" 
                  className="h-12 w-auto"
                />
                <span className="text-2xl font-bold">AUUPC</span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/membership">Membership</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                <a href="https://www.instagram.com/au_united_photography_club" target="_blank" rel="noopener noreferrer">
                  Contact
                </a>
              </nav>
              <button className="md:hidden" onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </header>

        {isMenuOpen && (
          <div className="md:hidden bg-black text-white">
            <div className="container  mx-auto px-4 py-2">
              <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
              <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
              <MobileNavLink to="/membership" onClick={toggleMenu}>Membership</MobileNavLink>
              <MobileNavLink to="/gallery" onClick={toggleMenu}>Gallery</MobileNavLink>
              <MobileNavLink to="https://www.instagram.com/au_united_photography_club" target="_blank" onClick={toggleMenu}>Contact</MobileNavLink>
            </div>
          </div>
        )}

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">AU United Photography Club</h3>
                <p>Focusing lenses, building photography community at Andhra University.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/about" className="hover:text-blue-300">About Us</Link></li>
                  <li><Link to="/membership" className="hover:text-blue-300">Join AUUPC</Link></li>
                  <li><Link to="/gallery" className="hover:text-blue-300">Gallery</Link></li>
                  <li>
                    <a className="hover:text-blue-300" href="https://www.instagram.com/au_united_photography_club" target="_blank" rel="noopener noreferrer">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/au_unitedclub_official" target='_blank' rel="noopener noreferrer" className="hover:text-blue-300">AU United Club</a>
                </div>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/au_united_photography_club" target='_blank' rel="noopener noreferrer" className="hover:text-blue-300">AU United Photography Club</a>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p>&copy; 2024 AU United Photography Club. All rights reserved.</p>
              <p>Designed and maintained by <a href="https://www.instagram.com/keshav.atal" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">Keshav Atal</a></p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

const NavLink = ({ to, children }) => (
  <Link to={to} className="hover:text-blue-200 transition duration-150 ease-in-out">
    {children}
  </Link>
);

const MobileNavLink = ({ to, onClick, children }) => (
  <Link to={to} className="block py-2 hover:bg-blue-600 transition duration-150 ease-in-out" onClick={onClick}>
    {children}
  </Link>
);

export default App;
