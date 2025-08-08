import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center px-8">
      <h1 className="text-2xl font-bold text-blue-700">Mardy Charity Initiative</h1>
      <nav className="space-x-6">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/donate" className="hover:text-blue-600">Donate</Link>
        <Link to="/orphanages" className="hover:text-blue-600">Orphanages</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        <Link to="/about" className="hover:text-blue-500 transition-colors">About</Link>
      </nav>
    </header>
  );
}

export default Header;
