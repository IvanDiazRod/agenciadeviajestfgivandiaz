import { useState } from "react";

export default function DestinationsSection() {

  const [selectedDestination, setSelectedDestination] = useState(null);

const destinations = [
  {
    name: "Paris",
    country: "France",
    src: "img/France.avif",
    images: [
      "img/France.avif",
      "img/paris2.jpg",
      "img/paris3.jpg",
    ],
  },
  {
    name: "Kyoto",
    country: "Japan",
    src: "img/kyoto.jpg",
    images: [
      "img/kyoto.jpg",
      "img/kyoto2.jpg",
      "img/kyoto3.jpg",
    ],
  },
  {
    name: "Santorini",
    country: "Greece",
    src: "img/Santorini.jpg",
    images: [
      "img/Santorini.jpg",
      "img/santorini2.jpg",
      "img/santorini3.jpg",
    ],
  },
  {
    name: "New York",
    country: "USA",
    src: "img/NewYork.jpg",
    images: [
      "img/NewYork.jpg",
      "img/newyork2.jpg",
      "img/newyork3.jpg",
    ],
  },
  {
    name: "Tashkent",
    country: "Uzbekistan",
    src: "img/Taskent.jpg",
    images: [
      "img/Taskent.jpg",
      "img/tashkent2.jpg",
      "img/tashkent3.jpg",
    ],
  },
  {
    name: "Hanoi",
    country: "Vietnam",
    src: "img/Hanoi.jpg",
    images: [
      "img/Hanoi.jpg",
      "img/hanoi2.jpg",
      "img/hanoi3.jpg",
    ],
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
          {filteredDestinations.map((dest, idx) => (<div key={idx} onClick={() => setSelectedDestination(dest)} className="group relative overflow-hidden rounded-3xl cursor-pointer"><img src={dest.src} alt={`${dest.name} in ${dest.country}`} className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition"></div><div className="absolute bottom-4 left-4 text-white"><h3 className="text-xl md:text-2xl font-semibold">{dest.name}</h3><p className="text-sm md:text-base text-gray-200">{dest.country}</p></div></div>))}
        </div>
        
        {selectedDestination && (<div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"><button onClick={() => setSelectedDestination(null)} className="absolute top-6 right-6 text-white text-4xl hover:scale-110 transition">✕</button><div className="max-w-6xl w-full"><h2 className="text-white text-2xl md:text-4xl mb-6 text-center">{selectedDestination.name}, {selectedDestination.country}</h2><div className="mb-4"><img src={selectedDestination.images[0]} alt="" className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl" /></div><div className="flex gap-3 overflow-x-auto pb-2">{selectedDestination.images.map((img, i) => (<img key={i} src={img} alt="" className="w-24 h-24 object-cover rounded-xl cursor-pointer opacity-80 hover:opacity-100 hover:scale-105 transition" />))}</div></div></div>)}

        {filteredDestinations.length === 0 && (<p className="text-center text-gray-500 mt-10">No destinations found...</p>)}
      
      </div>
    </section>
  );
}