import React from 'react';
import { Check } from 'lucide-react';


const Membership = () => {
  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <section className="text-center">
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 my-8 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-yellow-800 mb-2">
            Exciting News!
          </h3>
          <p className="text-xl font-semibold mb-4">
            We are recruiting on 28th & 29th August 2024!
          </p>
          <p>
            Venue: NCRC, Andhra University College of Engineering, Visakhapatnam
          </p>
          <p className="mb-4">
            Don't miss your chance to join AU United Photography Club.
          </p>
          <a 
            href="https://www.instagram.com/au_united_photography_club" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-bold py-2 px-4 rounded-full transition-colors"
          >
            Follow us for updates
          </a>
        </div>
        <h1 className="text-4xl font-bold mb-6">Join AU United Photography Club</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Become a part of our vibrant community and take your photography skills to the next level. 
          Whether you're a beginner or an experienced photographer, AUUPC has something for everyone.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Membership Benefits</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard 
            title="Build Your Portfolio"
            description="Build a standout photography portfolio with ease through our monthly challenges and activities"
            animationDelay="0s"
            direction="left"
          />
          <BenefitCard 
            title="Skill Development"
            description="Learn photography techniques and skills from experienced members and mentors."
            animationDelay="0.2s"
            direction="right"
          />
          <BenefitCard 
            title="Creative Outlet"
            description="Express and enhance your creativity through various photography challenges and activities."
            animationDelay="0.4s"
            direction="left"
          />
          <BenefitCard 
            title="Exclusive Events"
            description="Participate in member-only photo walks, competitions, and social gatherings."
            animationDelay="0.6s"
            direction="right"
          />
          <BenefitCard 
            title="Opportunities"
            description="Gain access to exciting events and opportunities for hands-on experience"
            animationDelay="0.8s"
            direction="left"
          />
          <BenefitCard 
            title="Networking"
            description="Connect with fellow photographers, alumni, and industry professionals."
            animationDelay="1s"
            direction="right"
          />
        </div>
      </section>

      <section className="bg-gray-100 py-16 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">How to Join</h2>
          <ol className="space-y-4 text-xl text-gray-600 text-left list-decimal list-inside">
            <li><strong>Get Your Portfolio Ready:</strong> Bring your best work to show off your skills.</li>
            <li><strong>Come to Our Recruitment Day:</strong> Stay tuned on Instagram for the date and location!</li>
            <li><strong>Bring Your Device:</strong> You’ll need it for a few quick tasks during recruitment.</li>
            <li><strong>Complete Spontaneous Challenges:</strong> We'll have some fun, on-the-spot tasks for you.</li>
            <li><strong>Attend Club Orientation:</strong> Learn about the club and get started.</li>
            <li><strong>Receive Your Membership Card:</strong> You’re in! Start enjoying all the club activities.</li>
          </ol>
          <div className="mt-8">
            <a 
              href="https://www.instagram.com/au_united_photography_club" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              AU United Photography Club
            </a>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Membership FAQ</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <FAQItem 
            question="Do I need to have a professional camera to join?"
            answer="No, you don't need a professional camera to join AUUPC. Many of our members use smartphones or entry-level cameras. We welcome photographers of all equipment levels!"
          />
          <FAQItem 
            question="How often does the club meet?"
            answer="We have general meetings once a month, but we organize various events and activities throughout the month. You can participate in as many or as few as you like."
          />
          <FAQItem 
            question="Can alumni join the club?"
            answer="Yes, we have a special alumni membership category. Please contact us for more details on alumni membership options."
          />
        </div>
      </section>
    </div>
  );
};



const BenefitCard = ({ title, description, animationDelay, direction }) => (
  <div
    className={`bg-white p-6 rounded-lg shadow-md transform transition-transform duration-700 ${
      direction === 'left' ? 'translate-x-0 animate-slide-in-left' : 'translate-x-0 animate-slide-in-right'
    }`}
    style={{ animationDelay: animationDelay }}
  >
    <h3 className="text-xl font-bold mb-4 flex items-center">
      <Check className="text-green-500 mr-2" />
      {title}
    </h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FAQItem = ({ question, answer }) => (
  <div>
    <h3 className="text-xl font-bold mb-2">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
);

export default Membership;
