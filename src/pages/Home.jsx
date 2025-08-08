import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center px-8 sticky top-0 z-50">
        <h1 className="text-2xl font-extrabold text-blue-700 flex items-center space-x-2">
          <span>🌸</span> <span>Mardy Charity Initiative</span>
        </h1>
        <nav className="space-x-6 font-medium">
          <Link to="/" className="hover:text-blue-600 hover:underline underline-offset-4 transition">Home</Link>
          <Link to="/donate" className="hover:text-blue-600 hover:underline underline-offset-4 transition">Donate</Link>
          <Link to="/orphanages" className="hover:text-blue-600 hover:underline underline-offset-4 transition">Orphanages</Link>
          <Link to="/contact" className="hover:text-blue-600 hover:underline underline-offset-4 transition">Contact</Link>
          <Link to="/about" className="hover:text-blue-500 hover:underline underline-offset-4 transition">About</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="relative text-center py-28 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(1, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <h2 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
          Give Hope. Change Lives.
        </h2>
        <p className="mb-6 text-lg text-gray-100 max-w-xl mx-auto">
          Support children in need by donating money, items, or your time.
        </p>
        <div className="space-x-4">
          <Link to="/donate">
            <button className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 hover:scale-105 transition">
              Donate Now
            </button>
          </Link>
          <Link to="/orphanages">
            <button className="px-6 py-3 border border-white text-white rounded shadow hover:bg-white hover:text-blue-600 hover:scale-105 transition">
              See Our Work
            </button>
          </Link>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 text-center bg-blue-50">
        <h3 className="text-2xl font-semibold mb-10">Your Donations Help</h3>
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-16">
          {[
            { number: "10+", text: "Orphanages Supported" },
            { number: "500+", text: "Kids Helped" },
            { number: "1000+", text: "Items Donated" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center bg-blue-600 text-white rounded-full text-3xl font-bold shadow">
                {stat.number}
              </div>
              <p className="mt-4 font-medium">{stat.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Orphanage Highlights */}
<section className="py-16 bg-white text-center">
  <h3 className="text-2xl font-semibold mb-6">Orphanage Highlights</h3>
  <p className="max-w-2xl mx-auto mb-12 text-gray-600">
    Meet some of the amazing children and orphanages we support. Your
    kindness makes their smiles brighter.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
    {[
      {
        name: "Sunrise Children’s Home",
        story:
          "Home to 40 children, Sunrise provides shelter, education, and love to kids who have lost their families.",
        img: "https://plus.unsplash.com/premium_photo-1683140462356-d5a02ba9d06b?auto=format&fit=crop&w=800&q=80", // updated working URL
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
        className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition p-4 transform hover:scale-105 hover:-translate-y-1 duration-300"
      >
        <div className="h-40 overflow-hidden rounded">
          <img
            src={orphanage.img}
            alt={orphanage.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="font-bold mt-4">{orphanage.name}</h4>
        <p className="text-sm text-gray-600 mt-2">{orphanage.story}</p>
        <div className="flex justify-between mt-4">
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
      <footer className="bg-gray-800 text-white text-center py-6 mt-12">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Mardy Charity Initiative. All rights
          reserved.
        </p>
        <p className="text-sm text-gray-400">
          Built with love to bring hope to those in need.
        </p>
      </footer>
    </div>
  );
}

export default Home;
