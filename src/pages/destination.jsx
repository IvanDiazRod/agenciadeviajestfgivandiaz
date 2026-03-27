import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function DestinationsSection() {

const [selectedDestination, setSelectedDestination] = useState(null);

const navigate = useNavigate();

const destinations = [
  {
    name: "Paris",
    slug: "paris",
    country: "France",
    src: "/img/cities/paris/France.avif",
    images: ["img/France.avif", "img/paris2.jpg", "img/paris3.jpg"],
    description: "The city of lights, known for its culture, art and iconic landmarks.",
    price: 1200,
  },
  {
    name: "Kyoto",
    slug: "kyoto",
    country: "Japan",
    src: "/img/cities/kyoto/kyoto.jpg",
    images: ["img/kyoto.jpg", "img/kyoto2.jpg", "img/kyoto3.jpg"],
    description: "Historic temples, cherry blossoms and traditional Japan.",
    price: 1400,
  },
  {
    name: "Santorini",
    slug: "santorini",
    country: "Greece",
    src: "/img/cities/santorini/Santorini.jpg",
    images: [],
    description: "Stunning sunsets, white-washed buildings, and the deep blue Aegean Sea.",
    price: 1100,
  },
  {
    name: "Rome",
    slug: "rome",
    country: "Italy",
    src: "/img/cities/rome/Rome.webp",
    images: [],
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

  const [search, setSearch] = useState("");
  const filteredDestinations = destinations.filter((dest) => `${dest.name} ${dest.country}`.toLowerCase().includes(search.toLowerCase()));

  return (
    <section className="w-full py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-blue-600">Our complete destinations list</h2>
          <p className="mt-3 md:mt-4 text-gray-600 text-base md:text-lg">Discover the most popular destinations around the world</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col sm:flex-row w-full max-w-xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <input type="text" placeholder="Where do you want to go?" value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 px-5 py-3 text-gray-700 outline-none" />
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 flex items-center justify-center gap-2 hover:bg-blue-700 transition">Search</button>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredDestinations.map((dest, idx) => (<div key={idx} onClick={() => navigate(`/destinations/${dest.slug}`)} className="group relative overflow-hidden rounded-3xl cursor-pointer"><img src={dest.src} alt={`${dest.name} in ${dest.country}`} className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition"></div><div className="absolute bottom-4 left-4 text-white"><h3 className="text-xl md:text-2xl font-semibold">{dest.name}</h3><p className="text-sm md:text-base text-gray-200">{dest.country}</p></div></div>))}
        </div>

        {filteredDestinations.length === 0 && (<p className="text-center text-gray-500 mt-10">No destinations found...</p>)}
      
      </div>
    </section>
  );
}