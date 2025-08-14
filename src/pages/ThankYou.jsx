import React from 'react';
import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center p-6">
      <div className="bg-white p-8 rounded shadow-md max-w-md">
        <h1 className="text-4xl font-bold text-green-600 mb-4">🎉 Thank You!</h1>
        <p className="text-gray-700 mb-6">
          Your generosity means a lot to us. We have received your donation, and it will make a real difference.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ThankYou;
