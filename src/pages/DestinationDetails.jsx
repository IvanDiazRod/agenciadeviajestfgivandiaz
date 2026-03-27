import { useParams, useNavigate } from "react-router-dom";

import.meta.glob

export default function DestinationDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const parisImages = Object.values(
  import.meta.glob("/public/img/cities/paris/*.{jpg,png,jpeg,avif,webp}", { eager: true })
).map((img) => img.default);

const kyotoImages = Object.values(
  import.meta.glob("/public/img/cities/kyoto/*.{jpg,png,jpeg,avif,webp}", { eager: true })
).map((img) => img.default);

const santoriniImages = Object.values(
  import.meta.glob("/public/img/cities/santorini/*.{jpg,png,jpeg,avif,webp}", { eager: true })
).map((img) => img.default);

const romeImages = Object.values(
  import.meta.glob("/public/img/cities/rome/*.{jpg,png,jpeg,avif,webp}", { eager: true })
).map((img) => img.default);

  const destinations = [
    {
      name: "Paris",
      slug: "paris",
      country: "France",
      images: parisImages,
      description: "The city of lights, known for its culture, art and iconic landmarks.",
      price: 1200,
    },
    {
      name: "Kyoto",
      slug: "kyoto",
      country: "Japan",
      images: kyotoImages,
      description: "Historic temples, cherry blossoms and traditional Japan.",
      price: 1400,
    },
    {
    name: "Santorini",
    slug: "santorini",
    country: "Greece",
    images: santoriniImages,
    description: "Stunning sunsets, white-washed buildings, and the deep blue Aegean Sea.",
    price: 1100,
  },
  {
    name: "Rome",
    slug: "rome",
    country: "Italy",
    images: romeImages,
    description: "The eternal city, where every corner holds a piece of ancient history.",
    price: 950,
  },
  {
    name: "Reykjavik",
    slug: "reykjavik",
    country: "Iceland",
    images: [],
    description: "A land of fire and ice, featuring dramatic landscapes and northern lights.",
    price: 1600,
  },
  {
    name: "Bali",
    slug: "bali",
    country: "Indonesia",
    images: [],
    description: "Tropical paradise known for its lush jungles, rice terraces, and spirituality.",
    price: 1300,
  },
  ];

  console.log("Kyoto images:", kyotoImages);

  const destination = destinations.find(d => d.slug === slug);

  if (!destination) {
    return (
      <div className="p-10 text-center">
        <p>Destination not found</p>
        <button onClick={() => navigate("/destinations")} className="text-blue-600 underline">
          Go back
        </button>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 p-6 md:p-12">

      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:underline"
      >
        ← Back
      </button>

      {/* HERO */}
      <div className="mb-8">
        <img
          src={destination.images[0]}
          alt=""
          className="w-full h-[300px] md:h-[500px] object-cover rounded-2xl"
        />
      </div>

      {/* INFO */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          {destination.name}, {destination.country}
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          {destination.description}
        </p>

        {/* PRICE */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 mb-8">
          <p className="text-xl font-semibold text-gray-800">
            From ${destination.price}
          </p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Book now
          </button>
        </div>

        {/* GALLERY */}
        <div className="flex gap-3 overflow-x-auto pb-4">
          {destination.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="w-32 h-32 object-cover rounded-xl hover:scale-105 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}