import { useParams, useNavigate } from "react-router-dom";

export default function CityGroups() {
  const { countrySlug, citySlug } = useParams();
  const navigate = useNavigate();

  const countries = [
    {
      slug: "spain",
      cities: [
        {
          slug: "barcelona",
          name: "Barcelona",
          tours: [
            {
              name: "Barcelona Nightlife Tour",
              slug: "nightlife-tour",
              image: "/img/tours/barcelonanightlife/BarcelonaNightlife1.jpg",
              description: "Experience Barcelona's best clubs and nightlife.",
              price: 120
            },
            {
              name: "Sagrada Familia Tour",
              slug: "sagrada-tour",
              image: "/img/tours/sagradafamilia/SagradaFamilia1.jpg",
              description: "Discover Gaudí's masterpiece.",
              price: 80
            }
          ]
        }
      ]
    },
    {
      slug: "france",
      cities: [
        {
          slug: "paris",
          name: "Paris",
          tours: [
            {
              name: "Eiffel Tower Tour",
              slug: "eiffel-tour",
              image: "/img/tours/eiffeltower/EiffelTower1.jpg",
              description: "Visit Paris' most iconic monument.",
              price: 150
            }
          ]
        }
      ]
    }
  ];

  const country = countries.find(
    (country) => country.slug === countrySlug
  );

  const city = country?.cities.find(
    (city) => city.slug === citySlug
  );

  if (!country || !city) {
    return (
      <div className="p-10">
        <h2 className="text-2xl font-bold text-red-500">City not found</h2>
        <button onClick={() => navigate("/groups")} className="mt-4 text-blue-600 underline">Back to groups</button>
      </div>
    );
  }

  return (
    <section className="w-full min-h-screen bg-gray-50 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-sm text-gray-500">
          <button onClick={() => navigate("/groups")} className="hover:text-blue-600">Groups</button>
          <span className="mx-2">/</span>
          <button onClick={() => navigate(`/groups/${countrySlug}`)} className="hover:text-blue-600">{countrySlug}</button>
          <span className="mx-2">/</span>
          <span className="text-blue-600 font-medium">{city.name}</span>
        </div>

        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-600">{city.name} Tours</h1>
          <p className="mt-4 text-gray-600 text-lg">Join a tour and connect with other travelers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {city.tours.map((tour, index) => (
            <div key={index} onClick={() => navigate(`/groups/${countrySlug}/${citySlug}/${tour.slug}`)} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transition">
              <img src={tour.image} alt={tour.name} className="w-full h-[250px] object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{tour.name}</h3>
                <p className="text-gray-500 mt-2">{tour.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-blue-600 font-medium">View Group</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}