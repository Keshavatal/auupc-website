import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Users, Calendar, Book } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
        <img src="https://i.ibb.co/DwrxYXz/IMG-3355.jpg" alt="Photography collage" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Focusing Lenses, Building Community</h1>
          <p className="text-xl md:text-2xl mb-8">Explore the World Through Viewfinder</p>
          <div className="space-x-4">
            <Link to="/membership" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Join Now
            </Link>
            <Link to="/gallery" className="bg-transparent hover:bg-white hover:text-blue-600 text-white font-bold py-3 px-6 rounded-full border-2 border-white transition duration-300">
              Explore Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Welcome to AU United Photography Club</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Whether you're just starting your photography journey or are an experienced photographer, 
            our club is the perfect place for you to learn, create, and connect. At AUUPC, we believe 
            in the power of photography to tell stories, capture memories, and bring people together. 
            Join us and become a part of our vibrant photography community at Andhra University.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Join AUUPC?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Book size={48} />}
              title="Build Your Portfolio"
              description="Build a standout photography portfolio with ease through our monthly challenges and activities."
            />
            <FeatureCard 
              icon={<Camera size={48} />}
              title="Skill Development"
              description="Learn from experienced photographers and enhance your skills through workshops and hands-on sessions."
            />
            <FeatureCard 
              icon={<Users size={48} />}
              title="Vibrant Community"
              description="Connect with fellow photography enthusiasts, share experiences, and grow together in a supportive environment."
            />
            <FeatureCard 
              icon={<Calendar size={48} />}
              title="Exciting Events"
              description="Participate in photo walks, competitions, and platform to showcase your talent and gain exposure."
            />
          </div>
        </div>
      </section>

      {/* Latest Events Preview */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <EventCard 
            title="Sunday-Funday Activity"
            date="Theme for Augest 2024 'CLOUDSCAPE ☁️'"
            image="https://i.ibb.co/nwpCpnx/Harshitha-SRI-HARSHITHA-JAVANGULA.jpg"
          />
          <EventCard 
            title=" Photography Club Recruitment Drive"
            date="Coming soon..."
            image="https://i.ibb.co/ZG2BP1G/IMG-2660.jpg"
          />
          <EventCard 
            title="Photography Club Orientation"
            date="Coming soon..."
            image="https://i.ibb.co/DwrxYXz/IMG-3355.jpg"
          />
        </div>
        <div className="text-center mt-8">
          <Link to="/gallery" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            View Gallery
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
      Also Explore AU United Club
      {/* <img 
        src="https://i.ibb.co/BGyML1Y/cropped-au-club.png" 
        alt="AU United Club logo" 
        className="ml-4 h-12 w-12"
      /> */}
    </h2>
    <p className="text-xl mb-8">
      The Official Cultural Club of Andhra University, Join us today and take your passion to the next level!
    </p>
    <a 
      href="https://www.andhrauniversity.edu.in/img/AU UNITED CLUB DOC.pdf" 
      className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300"
      target="_blank" 
      rel="noopener noreferrer"
    >
      AU United Club
    </a>
  </div>
</section>

    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
    <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const EventCard = ({ title, date, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
    <img src={image} alt={title} className="w-full h-60 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{date}</p>
    </div>
  </div>
);

export default Home;