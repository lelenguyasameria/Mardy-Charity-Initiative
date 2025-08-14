import React from "react";
import { useParams, Link } from "react-router-dom";
import { orphanages } from "../data/orphanages";
import Header from "../components/Header";

const OrphanageDetail = () => {
  const { id } = useParams();
  const orphanage = orphanages.find((o) => o.id === id);

  if (!orphanage) {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold">Orphanage Not Found</h2>
        <Link to="/see-our-work" className="text-blue-500 underline">
          Back to See Our Work
        </Link>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-2">{orphanage.name}</h1>
        <p className="text-gray-600 mb-4">{orphanage.location}</p>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {orphanage.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${orphanage.name} ${index + 1}`}
              className="rounded-lg shadow"
            />
          ))}
        </div>

        {/* Description */}
        <p className="mb-6">{orphanage.description}</p>

        {/* Story */}
        <div className="bg-yellow-50 p-4 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-2">Success Story</h2>
          <p>{orphanage.story}</p>
        </div>

        {/* Donate Button */}
        <Link
          to="/donate"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow"
        >
          Donate to {orphanage.name}
        </Link>
      </div>
    </>
  );
};

export default OrphanageDetail;
