import { useNavigate } from "react-router-dom";

export default function GroupsPage() {
  const navigate = useNavigate();

  const countries = [
    {
      name: "Spain",
      slug: "spain",
      image: "/img/countries/Spain.svg",
      description: "Sunny beaches, nightlife and unforgettable cities.",
    },
    {
      name: "France",
      slug: "france",
      image: "/img/countries/France.svg",
      description: "Culture, gastronomy and iconic landmarks.",
    },
    {
      name: "Italy",
      slug: "italy",
      image: "/img/countries/Italy.svg",
      description: "History, architecture and amazing food.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-blue-600">Travel Communities</h1>
          <p className="mt-3 md:mt-4 text-gray-600 text-base md:text-lg">Select your destination country and join travelers.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {countries.map((country, idx) => (
            <div key={idx} onClick={() => navigate(`/groups/${country.slug}`)} className="group relative overflow-hidden rounded-3xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={country.image} alt={country.name} className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl md:text-2xl font-semibold">{country.name}</h3>
                <p className="text-sm md:text-base text-gray-200 mt-1">{country.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}