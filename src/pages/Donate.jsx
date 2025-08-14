import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import Layout from "../components/Layout";

function Donate() {
  const [type, setType] = useState('money');
  const navigate = useNavigate(); //Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to Thank You page after form submission
    navigate('/thank-you');
  };

  return (
    <Layout>
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <Header /> 
      <div className="max-w-2xl mx-auto bg-white p-8 shadow rounded">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Make a Donation</h2>

        {/* Donation Type Toggle */}
        <div className="flex justify-center mb-6 space-x-4">
          <button
            className={`px-4 py-2 rounded ${type === 'money' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setType('money')}
          >
            Donate Money
          </button>
          <button
            className={`px-4 py-2 rounded ${type === 'items' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setType('items')}
          >
            Donate Items
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="Your Name" required />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email Address</label>
            <input type="email" className="w-full p-2 border rounded" placeholder="you@example.com" required />
          </div>

          {type === 'money' ? (
            <>
              <div>
                <label className="block font-semibold mb-1">Amount (KES)</label>
                <input type="number" className="w-full p-2 border rounded" placeholder="1000" required />
              </div>

              <div>
                <label className="block font-semibold mb-1">Payment Method</label>
                <select className="w-full p-2 border rounded">
                  <option>M-PESA</option>
                  <option>Credit/Debit Card</option>
                  <option>PayPal</option>
                </select>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block font-semibold mb-1">Item Description</label>
                <textarea className="w-full p-2 border rounded" placeholder="e.g., 10 school bags, 5 blankets" required />
              </div>

              <div>
                <label className="block font-semibold mb-1">Preferred Drop-off Location</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Nairobi, Kisumu, etc." />
              </div>
            </>
          )}

          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
            Confirm Donation
          </button>
        </form>
      </div>
    </div>
    </Layout>
  );
}

export default Donate;
