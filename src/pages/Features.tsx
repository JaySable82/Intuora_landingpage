import React from 'react';
import { Link } from 'react-router-dom';
import {
  QrCode,
  BarChart3,
  TrendingUp,
  Clock,
  DollarSign,
  Smartphone,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

export function Features() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-[#0A2342]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Why Choose Intuora?
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our comprehensive suite of features can transform your restaurant operations and enhance customer experience.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                icon: <QrCode className="h-12 w-12" />,
                title: "Smart QR Code Ordering",
                description: "Enable customers to browse menus, place orders, and pay directly from their phones. No app download required.",
                benefits: [
                  "Instant table-side ordering",
                  "Multilingual menu support",
                  "Real-time menu updates",
                  "Customizable QR codes"
                ]
              },
              {
                icon: <BarChart3 className="h-12 w-12" />,
                title: "Advanced Analytics",
                description: "Get deep insights into your business performance with our comprehensive analytics dashboard.",
                benefits: [
                  "Sales tracking and forecasting",
                  "Customer behavior analysis",
                  "Inventory optimization",
                  "Peak hour predictions"
                ]
              },
              {
                icon: <TrendingUp className="h-12 w-12" />,
                title: "Smart Upselling",
                description: "Increase average order value with AI-powered recommendations and promotions.",
                benefits: [
                  "Personalized suggestions",
                  "Combo deal optimization",
                  "Special offer management",
                  "Customer preference tracking"
                ]
              },
              {
                icon: <Clock className="h-12 w-12" />,
                title: "Time Management",
                description: "Optimize your operations with real-time order management and kitchen display system.",
                benefits: [
                  "Order prioritization",
                  "Kitchen workload balancing",
                  "Service time tracking",
                  "Staff performance metrics"
                ]
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="text-[#FF6B35] mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-[#0A2342] mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-[#FF6B35] mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0A2342] mb-12">
            Intuora vs Traditional Ordering
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="border-b">
                  <th className="p-4 text-left text-[#0A2342]">Feature</th>
                  <th className="p-4 text-center text-[#0A2342]">Traditional Ordering</th>
                  <th className="p-4 text-center text-[#0A2342]">With Intuora</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Order Processing Time",
                    traditional: "5-10 minutes",
                    intuora: "Under 1 minute"
                  },
                  {
                    feature: "Order Accuracy",
                    traditional: "85-90%",
                    intuora: "99.9%"
                  },
                  {
                    feature: "Staff Required",
                    traditional: "4-6 per shift",
                    intuora: "2-3 per shift"
                  },
                  {
                    feature: "Customer Wait Time",
                    traditional: "15-20 minutes",
                    intuora: "5-10 minutes"
                  }
                ].map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4 font-medium text-[#0A2342]">{row.feature}</td>
                    <td className="p-4 text-center text-gray-600">{row.traditional}</td>
                    <td className="p-4 text-center text-[#FF6B35] font-medium">{row.intuora}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0A2342] mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Transform your restaurant operations with Intuora's powerful features. Get started today and see the difference.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3 bg-[#FF6B35] text-white rounded-lg font-semibold hover:bg-[#ff5a1f] transition inline-flex items-center"
          >
            Schedule a Demo
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}