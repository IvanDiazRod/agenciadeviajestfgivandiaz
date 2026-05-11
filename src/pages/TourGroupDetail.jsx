import { useParams, useNavigate } from "react-router-dom";
import { Users, Calendar, MessageCircle, MapPin } from "lucide-react";

export default function TourGroupDetail() {
  const { countrySlug, citySlug, tourSlug } = useParams();
  const navigate = useNavigate();

  const countries = [
    {
      slug: "spain",
      cities: [
        {
          slug: "barcelona",
          tours: [
            {
              slug: "nightlife-tour",
              name: "Barcelona Nightlife Tour",
              image: "/img/tours/barcelonanightlife/BarcelonaNightlife1.jpg",
              description:
                "Discover Barcelona's nightlife with international travelers and local guides.",
              price: 120,
              travelers: 18,
              guide: "Carlos Martinez",
              nextDate: "May 12, 2026",
              whatsappLink: "https://chat.whatsapp.com/exampleBarcelona"
            },
            {
              slug: "sagrada-tour",
              name: "Sagrada Familia Tour",
              image: "/img/tours/sagradafamilia/SagradaFamilia1.jpg",
              description:
                "Explore Gaudí's masterpiece with a premium guided experience.",
              price: 80,
              travelers: 12,
              guide: "Laura Gómez",
              nextDate: "May 18, 2026",
              whatsappLink: "https://chat.whatsapp.com/exampleSagrada"
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
          tours: [
            {
              slug: "eiffel-tour",
              name: "Eiffel Tower Tour",
              image: "/img/tours/eiffeltower/EiffelTower1.jpg",
              description:
                "Visit Paris' most iconic landmark and meet fellow travelers.",
              price: 150,
              travelers: 24,
              guide: "Jean Dupont",
              nextDate: "May 20, 2026",
              whatsappLink: "https://chat.whatsapp.com/exampleParis"
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

  const tour = city?.tours.find(
    (tour) => tour.slug === tourSlug
  );

  if (!tour) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-red-500">Tour not found</h2>
        <button onClick={() => navigate("/groups")} className="mt-4 text-blue-600 underline">Go back to groups</button>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-sm text-gray-500">
          <button onClick={() => navigate("/groups")} className="hover:text-blue-600">Groups</button>
          <span className="mx-2">/</span>
          <button onClick={() => navigate(`/groups/${countrySlug}`)} className="hover:text-blue-600">{countrySlug}</button>
          <span className="mx-2">/</span>
          <button onClick={() => navigate(`/groups/${countrySlug}/${citySlug}`)} className="hover:text-blue-600">{citySlug}</button>
          <span className="mx-2">/</span>
          <span className="text-blue-600 font-medium">{tour.name}</span>
        </div>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <img src={tour.image} alt={tour.name} className="w-full h-[300px] md:h-[500px] object-cover" />
          <div className="p-8">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">{tour.name}</h1>
            <p className="text-gray-600 mt-4 text-lg">{tour.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

              <div className="bg-gray-50 p-5 rounded-2xl">
                <Users className="text-blue-600 mb-2" />
                <p className="text-sm text-gray-500">Travelers</p>
                <h3 className="text-xl font-bold">{tour.travelers}</h3>
              </div>

              <div className="bg-gray-50 p-5 rounded-2xl">
                <Calendar className="text-blue-600 mb-2" />
                <p className="text-sm text-gray-500">Next Tour Date</p>
                <h3 className="text-xl font-bold">{tour.nextDate}</h3>
              </div>

              <div className="bg-gray-50 p-5 rounded-2xl">
                <MapPin className="text-blue-600 mb-2" />
                <p className="text-sm text-gray-500">Tour Guide</p>
                <h3 className="text-xl font-bold">{tour.guide}</h3>
              </div>

            </div>

            <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6 bg-blue-50 p-6 rounded-2xl">
              <button onClick={() => window.open(tour.whatsappLink, "_blank")} className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 transition"><MessageCircle size={20} />Join WhatsApp Group</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}