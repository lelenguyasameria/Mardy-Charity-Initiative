import React from "react";
import { motion as Motion } from "framer-motion";
import { FaHandsHelping, FaLeaf, FaUsers } from "react-icons/fa";
import Header from "../components/Header";
import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
    <Motion.div
      className="min-h-screen bg-gray-50 text-gray-800 p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row gap-8">
        
        {/* Text Section */}
        <Motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-700">About Us</h2>
          <p className="text-lg leading-relaxed mb-6">
            We are committed to making a difference by supporting communities 
            through donations and impactful projects. Our mission is to empower, 
            uplift, and create sustainable change for those in need.
          </p>

          {/* Icons Section */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaHandsHelping className="text-blue-600 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Helping Communities</h3>
                <p className="text-gray-600">
                  We partner with local organizations to deliver real, measurable help 
                  where it’s needed most.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaLeaf className="text-green-600 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Sustainable Projects</h3>
                <p className="text-gray-600">
                  Our initiatives focus on long-term solutions to ensure a lasting impact.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaUsers className="text-purple-600 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Community Engagement</h3>
                <p className="text-gray-600">
                  We believe in involving people in shaping their future through 
                  participatory projects.
                </p>
              </div>
            </div>
          </div>
        </Motion.div>

        {/* Image Section */}
        <Motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
            alt="Helping Hands"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </Motion.div>
      </div>
    </Motion.div>
    </Layout>
  );
}

export default About;
