import { useParams, useNavigate } from "react-router-dom";

export default function CountryGroups() {
  const { countrySlug } = useParams();
  const navigate = useNavigate();

  const countries = [
    {
      name: "Spain",
      slug: "spain",
      cities: [
        {
          name: "Barcelona",
          slug: "barcelona",
          image: "/img/cities/barcelona/Barcelona1.jpg",
          description: "Beach, nightlife and Erasmus life."
        },
        {
          name: "Madrid",
          slug: "madrid",
          image: "/img/cities/madrid/Madrid1.jpg",
          description: "Spain's capital full of culture."
        }
      ]
    },
    {
      name: "France",
      slug: "france",
      cities: [
        {
          name: "Paris",
          slug: "paris",
          image: "/img/cities/paris/Paris1.jpg",
          description: "Culture and unforgettable monuments."
        }
      ]
    },
    {
      name: "Italy",
      slug: "italy",
      cities: [
        {
          name: "Rome",
          slug: "rome",
          image: "/img/cities/rome/Rome1.jpg",
          description: "Ancient history and amazing food."
        }
      ]
    }
  ];

  const country = countries.find(
    (country) => country.slug === countrySlug
  );

  if (!country) {
    return (
      <div className="p-10">
        <h2 className="text-2xl font-bold text-red-500">Country not found</h2>
        <button onClick={() => navigate("/groups")} className="mt-4 text-blue-600 underline">Go back to countries</button>
      </div>
    );
  }

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <button onClick={() => navigate("/groups")} className="text-blue-600 hover:underline mb-4">Go back to countries</button>
          <h1 className="text-3xl md:text-5xl font-bold text-blue-600">{country.name} Cities</h1>
          <p className="mt-3 text-gray-600">Choose your city and find your travel community</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {country.cities.map((city, index) => (
            <div key={index} onClick={() => navigate(`/groups/${country.slug}/${city.slug}`)} className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition">
              <img src={city.image} alt={city.name} className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-2xl font-semibold">{city.name}</h3>
                <p className="text-sm text-gray-200 mt-1">{city.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}