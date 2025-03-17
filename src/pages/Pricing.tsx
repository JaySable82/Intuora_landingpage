import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronRight } from 'lucide-react';

export function Pricing() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-[#0A2342]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your restaurant. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "₹1,000",
                description: "Perfect for small cafes and food trucks",
                features: [
                  "Basic QR code ordering",
                  "Menu management",
                  "Order notifications",
                  "Basic analytics",
                  "Email support"
                ]
              },
              {
                name: "Business",
                price: "₹1,200",
                description: "Ideal for growing restaurants",
                popular: true,
                features: [
                  "Everything in Starter, plus:",
                  "Advanced analytics",
                  "Custom branding",
                  "Multiple QR codes",
                  "Priority support",
                  "Staff management",
                  "Inventory tracking"
                ]
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large chains and franchises",
                features: [
                  "Everything in Business, plus:",
                  "Multi-location support",
                  "API access",
                  "Custom integrations",
                  "Dedicated account manager",
                  "24/7 phone support",
                  "Custom features"
                ]
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-sm hover:shadow-md transition p-8 relative ${
                  plan.popular ? 'border-2 border-[#FF6B35]' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-[#FF6B35] text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-[#0A2342]">{plan.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-[#0A2342]">{plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-[#FF6B35] mr-2 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition flex items-center justify-center ${
                    plan.popular
                      ? 'bg-[#FF6B35] text-white hover:bg-[#ff5a1f]'
                      : 'border-2 border-[#0A2342] text-[#0A2342] hover:bg-gray-50'
                  }`}
                >
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0A2342] mb-12">
            Frequently Asked Questions </h2>
           <boltAction type="file" filePath="src/pages/Pricing.tsx" />          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "Do I need to sign a long-term contract?",
                answer: "No, all our plans are month-to-month. You can upgrade, downgrade, or cancel at any time without penalties."
              },
              {
                question: "Is there a setup fee?",
                answer: "No, we don't charge any setup fees. Our team will help you get started at no additional cost."
              },
              {
                question: "Can I switch plans later?",
                answer: "Yes, you can switch between plans at any time. Changes will be reflected in your next billing cycle."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, UPI, and bank transfers for Indian businesses."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-[#0A2342] mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0A2342] mb-6">
            Not Sure Which Plan Is Right for You?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Our team is here to help you choose the perfect plan for your business. Let's discuss your needs.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3 bg-[#FF6B35] text-white rounded-lg font-semibold hover:bg-[#ff5a1f] transition inline-flex items-center"
          >
            Contact Sales
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}