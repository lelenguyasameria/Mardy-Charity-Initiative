import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center px-4 sm:px-6 md:px-12 sticky top-0 z-50">
        <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-700 flex items-center space-x-2">
          <span>🌸</span> <span>Mardy Charity Initiative</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-blue-600 hover:underline underline-offset-4 transition">Home</Link>
          <Link to="/donate" className="hover:text-blue-600 hover:underline underline-offset-4 transition">Donate</Link>
          <Link to="/orphanages" className="hover:text-blue-600 hover:underline underline-offset-4 transition">Orphanages</Link>
          <Link to="/contact" className="hover:text-blue-600 hover:underline underline-offset-4 transition">Contact</Link>
          <Link to="/about" className="hover:text-blue-500 hover:underline underline-offset-4 transition">About</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-6 z-40">
            <Link onClick={() => setMenuOpen(false)} to="/" className="hover:text-blue-600">Home</Link>
            <Link onClick={() => setMenuOpen(false)} to="/donate" className="hover:text-blue-600">Donate</Link>
            <Link onClick={() => setMenuOpen(false)} to="/orphanages" className="hover:text-blue-600">Orphanages</Link>
            <Link onClick={() => setMenuOpen(false)} to="/contact" className="hover:text-blue-600">Contact</Link>
            <Link onClick={() => setMenuOpen(false)} to="/about" className="hover:text-blue-500">About</Link>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        className="relative text-center py-16 sm:py-20 md:py-28 bg-cover bg-center px-4 sm:px-6 md:px-12"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(1, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
          Give Hope. Change Lives.
        </h2>
        <p className="mb-6 text-sm sm:text-base md:text-lg text-gray-100 max-w-xl mx-auto">
          Support children in need by donating money, items, or your time.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/donate">
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">
              Donate Now
            </button>
          </Link>
          <Link to="/orphanages">
            <button className="w-full sm:w-auto px-6 py-3 border border-white text-white rounded shadow hover:bg-white hover:text-blue-600 transition">
              See Our Work
            </button>
          </Link>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 sm:py-16 text-center bg-blue-50 px-4 sm:px-6 md:px-12">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-10">Your Donations Help</h3>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-16">
          {[
            { number: "10+", text: "Orphanages Supported" },
            { number: "500+", text: "Kids Helped" },
            { number: "1000+", text: "Items Donated" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center bg-blue-600 text-white rounded-full text-xl sm:text-2xl md:text-3xl font-bold shadow">
                {stat.number}
              </div>
              <p className="mt-4 font-medium text-xs sm:text-sm md:text-base">{stat.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Orphanage Highlights */}
      <section className="py-12 sm:py-16 bg-white text-center px-4 sm:px-6 md:px-12">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6">Orphanage Highlights</h3>
        <p className="max-w-2xl mx-auto mb-12 text-gray-600 text-sm sm:text-base">
          Meet some of the amazing children and orphanages we support. Your
          kindness makes their smiles brighter.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sunrise Children’s Home",
              story:
                "Home to 40 children, Sunrise provides shelter, education, and love to kids who have lost their families.",
              img: "https://plus.unsplash.com/premium_photo-1683140462356-d5a02ba9d06b?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Hope Haven Orphanage",
              story:
                "A safe place for over 60 children, offering not just food and shelter but also hope for a brighter tomorrow.",
              img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Bright Future Center",
              story:
                "Empowering children through education and vocational training to prepare them for independent living.",
              img: "https://plus.unsplash.com/premium_photo-1663045404966-d3a01937f1df?auto=format&fit=crop&w=800&q=80",
            },
          ].map((orphanage, id) => (
            <div
              key={id}
              className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
            >
              <div className="h-40 overflow-hidden rounded">
                <img
                  src={orphanage.img}
                  alt={orphanage.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold mt-4 text-base sm:text-lg">{orphanage.name}</h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 flex-grow">{orphanage.story}</p>
              <div className="flex flex-col sm:flex-row justify-between gap-2 mt-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                  ❤️ Support
                </button>
                <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-100 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-12 px-4 sm:px-6 md:px-12">
        <p className="mb-2 text-xs sm:text-sm md:text-base">
          &copy; {new Date().getFullYear()} Mardy Charity Initiative. All rights reserved.
        </p>
        <p className="text-xs sm:text-sm text-gray-400">
          Built with love to bring hope to those in need.
        </p>
      </footer>
    </div>
  );
}

export default Home;
