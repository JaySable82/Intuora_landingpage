import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { QrCode } from 'lucide-react';

export function Layout() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center">
              <QrCode className="h-8 w-8 text-[#0A2342]" />
              <span className="ml-2 text-xl font-bold text-[#0A2342]">Intuora</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/about" className="text-gray-700 hover:text-[#0A2342]">About</Link>
              <Link to="/features" className="text-gray-700 hover:text-[#0A2342]">Features</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-[#0A2342]">Pricing</Link>
              <Link to="/contact" className="text-gray-700 hover:text-[#0A2342]">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <Outlet />

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center">
                <QrCode className="h-8 w-8 text-[#0A2342]" />
                <span className="ml-2 text-xl font-bold text-[#0A2342]">Intuora</span>
              </Link>
              <p className="mt-4 text-gray-600">
                Revolutionizing the dining experience through innovative technology.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0A2342] mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-gray-600 hover:text-[#0A2342]">Features</Link></li>
                <li><Link to="/pricing" className="text-gray-600 hover:text-[#0A2342]">Pricing</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-[#0A2342]">Demo</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#0A2342] mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-600 hover:text-[#0A2342]">About</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-[#0A2342]">Contact</Link></li>
                {/* <li><a href="#" className="text-gray-600 hover:text-[#0A2342]">Blog</a></li> */}
              </ul>
            </div>
            {/* <div>
              <h3 className="font-semibold text-[#0A2342] mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-600 hover:text-[#0A2342]">Privacy</Link></li>
                <li><Link to="/terms" className="text-gray-600 hover:text-[#0A2342]">Terms</Link></li>
              </ul>
            </div> */}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Intuora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}