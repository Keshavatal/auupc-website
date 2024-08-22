import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-black bg-center text-white p-6 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <img src="https://i.ibb.co/BGyML1Y/cropped-au-club.png" alt="AU United Logo" className="w-12 h-12 md:w-16 md:h-16 mr-4 rounded-full" />
        <h1 className="text-2xl md:text-3xl font-bold">AU United Club</h1>
      </div>
      <nav>
        <ul className="flex space-x-4 md:space-x-6">
          {['About', 'Clubs', 'Events', 'Contact'].map((item) => (
            <li key={item}>
              <Link to={`#${item.toLowerCase()}`} className="hover:text-yellow-300 transition duration-300 ease-in-out">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section
    className="text-center py-20 md:py-24 text-white relative overflow-hidden"
    style={{
      backgroundImage: "url('https://i.ibb.co/jWX0GSs/IMG-2670.gif')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Background Overlay */}
    <div className="absolute inset-0 bg-black opacity-50"></div>

    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 animate-fadeIn text-3d">LEARN - LIVE - LEAD</h2>
      <p className="text-xl md:text-2xl mb-8 md:mb-10 animate-fadeIn animation-delay-300 text-3d">
        Official Cultural Club of Andhra University
      </p>
      <Link
        to="#join"
        className="bg-white text-black py-3 px-6 md:py-3 md:px-8 rounded-full font-bold text-lg hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-105 animate-fadeIn animation-delay-600"
      >
        Join AU United
      </Link>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 md:py-24 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-blue-800">About AU United</h2>
      <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
        AU United is a vibrant world that unveils the ecstasy of life. Here, you can forge new friendships,
        encounter diverse individuals, face exciting challenges, and immerse yourself in novel cultural experiences.
        Our mission is to empower students with new skills and broaden their social horizons, creating a platform
        for personal and professional growth.
      </p>
    </div>
  </section>
);

const ClubCard = ({ title, description, logoUrl, instagramUrl }) => (
  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:-translate-y-1">
    <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="block mb-4">
      <img src={logoUrl} alt={`${title} logo`} className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full" />
    </a>
    <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-800 text-center">{title}</h3>
    <p className="text-gray-700 text-center">{description}</p>
  </div>
);

const Clubs = () => {
  const clubsData = [
    { title: "Socio Club", description: "Plan, design, and organize. Explore things with lateral thinking.", logoUrl: "https://i.ibb.co/TwLHymN/AU-united-club-new-logo.png", instagramUrl: "https://www.instagram.com/au_unitedclub_official" },
    { title: "Dance Club", description: "Experience mental health and physical fitness through the art of dance.", logoUrl: "https://i.ibb.co/jgmncHw/AU-united-dance-club-logo.png", instagramUrl: "https://www.instagram.com/au_united_dance_club" },
    { title: "Music Club", description: "Exercise your vocal cords and spread melody into the air.", logoUrl: "https://i.ibb.co/5cmR1fs/AU-united-music-club-logo.png", instagramUrl: "https://www.instagram.com/au_united_music" },
    { title: "Arts & Crafts Club", description: "Unleash your creativity and craft your future.", logoUrl: "https://i.ibb.co/bRn5JRN/AU-united-arts-and-craft-club-logo.png", instagramUrl: "https://www.instagram.com/au_united_arts_and_crafts_club" },
    { title: "Sports Club", description: "Develop your physical fitness and teamwork through a wide range of sporting activities, coupled with a spirit of healthy competition.", logoUrl: "https://i.ibb.co/tJxpMKc/AU-united-arts-and-craft-club-logo-2.png", instagramUrl: "https://www.instagram.com/au_unitedclub_official" },
    { title: "Theatres Club", description: "Discover the real actor in you and bring stories to life.", logoUrl: "https://i.ibb.co/pJRBrJJ/AU-united-theater-club-logo.png", instagramUrl: "https://www.instagram.com/au_united_theatres_club" },
    { title: "Photography Club", description: "Capture moments and create lasting memories through your lens.", logoUrl: "https://i.ibb.co/GHqyK32/AU-UNITED-PHOTOGRAPHY-CLUB-png-Black.png", instagramUrl: "https://www.instagram.com/au_united_photography_club" },
  ];

  return (
    <section id="clubs" className="py-20 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-center text-blue-800">Our Clubs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {clubsData.map((club) => (
            <ClubCard key={club.title} {...club} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Events = () => (
  <section id="events" className="py-20 md:py-24 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-center text-blue-800">Upcoming Events</h2>
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700 text-center">AU United Cultural Fest</h3>
        <p className="text-lg md:text-xl text-gray-700 mb-4 text-center">Date: October 15-17, 2024</p>
        <p className="text-base md:text-lg text-gray-600 text-center">
          Join us for three days of music, dance, and cultural celebrations!
          Experience the vibrant diversity of talents across our university community.
        </p>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 md:py-24 bg-blue-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-center text-blue-800">Contact Us</h2>
      <div className="text-center max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <p className="text-lg md:text-xl mb-4">
          <span className="font-bold">Email:</span>{" "}
          <a href="mailto:auunitedclub@andhrauniversity.edu.in">
            auunitedclub@andhrauniversity.edu.in
          </a>
        </p>

        <p className="text-lg md:text-xl mb-4">
          <span className="font-bold">Instagram:</span>{" "}
          <a
            href="https://www.instagram.com/au_unitedclub_official/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @au_unitedclub_official
          </a>
        </p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-white py-6 md:py-8">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 AU United. All rights reserved.</p>
      <p>Designed and maintained by <a href="https://www.instagram.com/keshav.atal" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">Keshav Atal</a></p>
    </div>
  </footer>
);

const App = () => (
  <Router>
    <div className="font-sans min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <About />
        <Clubs />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;