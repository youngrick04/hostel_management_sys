import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, CreditCard, Users, ArrowRight } from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-navy-900 rounded-md flex items-center justify-center">
              <Home size={14} className="text-white" />
            </div>
            <span className="font-display font-bold text-navy-900 text-lg">
              HostelHub
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/signup")}
              className="px-4 py-2 text-sm font-medium text-navy-900 border border-navy-900 rounded-lg hover:bg-navy-900 hover:text-white transition-all"
            >
              Sign Up
            </button>
            
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 text-sm font-medium text-white bg-navy-900 rounded-lg hover:bg-navy-800 transition-all"
            >
              Log In
            </button>
          </div>
        </div>
      </nav>


      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block px-3 py-1 text-xs font-medium text-brand bg-blue-50 border border-blue-100 rounded-full mb-6 uppercase tracking-widest">
          Hostel Management Redefined
        </span>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-navy-900 leading-tight max-w-2xl mx-auto mb-6">
          Effortless Hostel Management, Built for Scale.
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
          The complete operating system for modern student housing. Manage
          occupancy, billing, and residents with total clarity.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate("/signup")}
            className="px-6 py-3 bg-brand text-white rounded-xl font-medium hover:bg-brand-dark transition-all shadow-md hover:shadow-lg"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-3 text-navy-900 border border-gray-200 rounded-xl font-medium hover:border-navy-900 transition-all"
          >
            Log In
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center font-display text-2xl font-bold text-navy-900 mb-12">
            Everything you need to run at 100%.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Home,
                title: "Room Allocation",
                desc: "Centralized records for communication, documents, and history in one place.",
              },
              {
                icon: CreditCard,
                title: "Payments",
                desc: "Centralized records for communication, documents, and history in one place.",
              },
              {
                icon: Users,
                title: "Student Profiles",
                desc: "Centralized records for communication, documents, and history in one place.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={18} className="text-brand" />
                </div>
                <h3 className="font-display font-semibold text-navy-900 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-navy-900 rounded-3xl p-12 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to streamline your operations?
          </h2>
          <p className="text-blue-200 mb-8">
            Join leading hostels using HostelHub to deliver a superior student
            experience.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="px-6 py-3 bg-brand text-white rounded-xl font-medium hover:bg-brand-dark transition-all inline-flex items-center gap-2"
          >
            Get Started Now <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-navy-900 rounded flex items-center justify-center">
              <Home size={10} className="text-white" />
            </div>
            <span>HostelHub</span>
          </div>
          <p>
            © 2025 Architectural Concierge Hostel Systems. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-600">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-600">
              Terms
            </a>
            <a href="#" className="hover:text-gray-600">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
