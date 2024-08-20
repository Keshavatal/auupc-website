import React from 'react';


const About = () => {
  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <section>
        <h1 className="text-4xl font-bold mb-8 text-center">About AU United Photography Club</h1>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            AU United Photography Club (AUUPC) is a sub-club under the AU United Club, which is based at Andhra University. From inception, we were a photography club with only one enthusiastic photographer but have grown into this dynamic community of intense passion. AUUPC is not just a club; it's a creative space where students, faculty, and staff meet up to share in this love for photography. We believe in the transformative power of photography to tell stories, inspire change, and bridge cultures.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            The place where each frame captured speaks of a story, void of any barriers to creativity, and students, faculty, and staff coming together with their common love for photography. AUUPC is not a club; it's an odyssey of inspiration, learning, and bonding. We believe here at AUUPC that there is more to a photograph than a moment: one can view one picture and take inspiration from it, be educated by it, and connect through it.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            As you join the dynamic group, you become part of the group that affords you opportunities to explore your creativity, develop your skills, and share your very own perspective with the world. From hands-on workshops and thrilling photo contests to inspiring photo walks and exhibitions, AUUPC is your platform to shine.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Whether you are a seasoned professional photographer or just embarking on your journey, this is one great environment where your passion will find root. Join us, and together we will embrace this adventure to the hilt—capturing the beauty, feelings, and stories of our incredible world, frame by frame.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
        <div className="max-w-3xl mx-auto">
          <ul className="list-disc list-inside space-y-4 text-xl text-gray-600">
            <li>Foster a supportive community for photography enthusiasts</li>
            <li>Provide opportunities for skill development and creative expression</li>
            <li>Promote photography as an art form and means of communication</li>
            <li>Organize events and exhibitions to showcase members' work</li>
            <li>Collaborate with other university clubs and local organizations</li>
          </ul>
        </div>
      </section>
      {/* <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Club Head</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember 
            name= <a target='_blank' href="https://keshavatal.com.np/">Keshav Atal</a>
            role="Head - AUUPC"
            image="https://i.ibb.co/nsqRz29/DSC-0761-01.jpg"
          />
          <TeamMember 
            name="Rahul Kapoor"
            role="Vice President"
            image="/api/placeholder/300/300"
          />
          <TeamMember 
            name="Ananya Reddy"
            role="Event Coordinator"
    image="/api/placeholder/300/300"
          />
          <TeamMember 
            name="Vikram Choudhury"
            role="Treasurer"
            image="/api/placeholder/300/300"
          />
          <TeamMember 
            name="Meera Patel"
            role="Social Media Manager"
            image="/api/placeholder/300/300"
          />
          <TeamMember 
            name="Arjun Nair"
            role="Technical Lead"
            image="/api/placeholder/300/300"
          />
        </div>
      </section> */}
      <section className="bg-gray-100 py-16 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <ul className="space-y-4 text-xl text-gray-600">
            <li><strong>Inclusivity:</strong> We welcome photographers of all skill levels and backgrounds.</li>
            <li><strong>Creativity:</strong> We encourage innovative approaches and unique perspectives.</li>
            <li><strong>Learning:</strong> We believe in continuous improvement and skill development.</li>
            <li><strong>Community:</strong> We foster a supportive and collaborative environment.</li>
            <li><strong>Ethics:</strong> We promote responsible and ethical photography practices.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

// const TeamMember = ({ name, role, image }) => (
//   <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
//     <img src={image} alt={name} className="w-full h-64 object-cover" />
//     <div className="p-6">
//       <h3 className="text-xl font-bold mb-2">{name}</h3>
//       <p className="text-gray-600">{role}</p>
//     </div>
//   </div>
// );

export default About;