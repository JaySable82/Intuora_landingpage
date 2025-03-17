import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, QrCode, BarChart3, TrendingUp, ChevronRight } from 'lucide-react';
import user from '../assets/user.jpg';
export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#0A2342] leading-tight">
                Revolutionize Dining with Intuora
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Empower your business with faster service, happier customers, and lower costs—all through a simple QR code.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-[#FF6B35] text-white rounded-lg font-semibold hover:bg-[#ff5a1f] transition flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3 border-2 border-[#0A2342] text-[#0A2342] rounded-lg font-semibold hover:bg-gray-50 transition"
                >
                  Request a Demo
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?auto=format&fit=crop&q=80"
                alt="Customer scanning QR code"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0A2342] mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <QrCode className="h-8 w-8" />,
                title: "QR Code Ordering",
                description: "Scan, Order, Enjoy. Streamline the entire ordering process."
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: "Real-Time Analytics",
                description: "Track Everything, Anytime. Make data-driven decisions."
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Upsell Bestsellers",
                description: "Boost Revenue Effortlessly with smart recommendations."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="text-[#FF6B35]">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#0A2342] mt-4">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0A2342] mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Intuora has transformed our operations. Table turnover time has reduced by 30%, and our customers love the convenience!",
                author: "Sachin",
                role: "Owner, Ambika Sandwich",
                image: user
              },
              {
                quote: "Implementation was smooth, and the results were immediate. Our staff can now focus on delivering great food and service.",
                author: "Harshal",
                role: "Owner,Pari Poorna ",
                image: user
              },
              // {
              //   quote: "Implementation was smooth, and the results were immediate. Our staff can now focus on delivering great food and service.",
              //   author: "Aditya",
              //   role: "owner,Bedekar Misal ",
              //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
              // }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="mt-4 flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-[#0A2342]">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0A2342] px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Restaurant?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of restaurants already using Intuora to streamline their operations and delight customers.
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
    </>
  );
}