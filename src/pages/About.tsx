import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Rocket, ChevronRight } from 'lucide-react';

export function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-[#0A2342]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Mission: Redefining Dining Experiences
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At Intuora, we believe dining should be seamless, efficient, and enjoyable for everyone. Our platform empowers restaurants to automate food ordering, reduce costs, and deliver exceptional customer experiences.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0A2342] mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Customer First",
                description: "Every feature we build starts with our customers' needs. We're committed to making dining better for everyone."
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Innovation",
                description: "We constantly push boundaries to create solutions that transform the restaurant industry."
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "Excellence",
                description: "We strive for excellence in everything we do, from our technology to our customer support."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="text-[#FF6B35]">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[#0A2342] mt-4">{value.title}</h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        {/* <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0A2342] mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Samarth Patil",
                role: "Co-founder",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
                description: "Passion for technology and innovation."
              },
              {
                name: "Sarvesh Deshpande",
                role: "Co-founder",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
                description: "Lorem"
              },
              {
                name: "Jay Sable",
                role: "Co-founder & CTO",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
                description: "Dedicated to build a top-notch product."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-[#0A2342]">{member.name}</h3>
                <p className="text-[#FF6B35] font-medium">{member.role}</p>
                <p className="mt-2 text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div> */}
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0A2342] mb-6">
            Join Us in Revolutionizing the Restaurant Industry
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Ready to be part of the future of dining? Let's work together to transform your restaurant operations.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3 bg-[#FF6B35] text-white rounded-lg font-semibold hover:bg-[#ff5a1f] transition inline-flex items-center"
          >
            Get Started Today
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}