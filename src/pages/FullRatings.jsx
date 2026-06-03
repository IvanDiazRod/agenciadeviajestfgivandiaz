import {
  Star,
  Quote,
  MapPin,
  Plane,
  Heart,
  Globe,
} from "lucide-react";

export default function FullRatings() {

  const firstRow = [
    {
      name: "Emily Carter",
      country: "United Kingdom",
      image: "https://i.pravatar.cc/150?img=32",
      rating: 5,
      review:
        "Absolutely incredible experience. The organization was perfect and I met amazing people during the tour.",
      trip: "Barcelona Summer Tour",
    },
    {
      name: "Lucas Martin",
      country: "France",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      review:
        "The flights, hotels and activities were perfectly coordinated. SkyTravel exceeded my expectations.",
      trip: "Rome Adventure",
    },
    {
      name: "Sophia Williams",
      country: "Canada",
      image: "https://i.pravatar.cc/150?img=45",
      rating: 5,
      review:
        "One of the best travel experiences of my life. Everything felt premium and super professional.",
      trip: "Paris Experience",
    },
    {
      name: "Daniel Costa",
      country: "Portugal",
      image: "https://i.pravatar.cc/150?img=15",
      rating: 5,
      review:
        "I loved the WhatsApp groups feature. It helped me connect with travelers before the trip even started.",
      trip: "Milan City Tour",
    },
    {
      name: "Anna Becker",
      country: "Germany",
      image: "https://i.pravatar.cc/150?img=28",
      rating: 5,
      review:
        "The support team was incredibly fast and helpful. The whole platform feels modern and premium.",
      trip: "Amsterdam Escape",
    },
  ];

  const secondRow = [
    {
      name: "Marco Rossi",
      country: "Italy",
      image: "https://i.pravatar.cc/150?img=18",
      rating: 5,
      review:
        "Amazing atmosphere and unforgettable memories. I will definitely book another trip soon.",
      trip: "Prague Nightlife Tour",
    },
    {
      name: "Isabella Moore",
      country: "United States",
      image: "https://i.pravatar.cc/150?img=50",
      rating: 5,
      review:
        "The interface is beautiful and booking flights was extremely easy and intuitive.",
      trip: "Vienna Cultural Tour",
    },
    {
      name: "Hugo Fernandes",
      country: "Brazil",
      image: "https://i.pravatar.cc/150?img=22",
      rating: 5,
      review:
        "Honestly felt like a luxury travel agency. Every detail was carefully designed.",
      trip: "Budapest Experience",
    },
    {
      name: "Eva Novak",
      country: "Slovakia",
      image: "https://i.pravatar.cc/150?img=36",
      rating: 5,
      review:
        "The best thing was meeting people from all around Europe through the travel groups.",
      trip: "Berlin Erasmus Tour",
    },
    {
      name: "Noah Peterson",
      country: "Sweden",
      image: "https://i.pravatar.cc/150?img=41",
      rating: 5,
      review:
        "The ticket system and profile dashboard are incredibly well made. Everything feels futuristic.",
      trip: "Lisbon Coastal Tour",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 py-24">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-blue-200 text-sm font-medium mb-6">
            <Heart size={16} />
            Trusted by travelers worldwide
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Thousands of travelers
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              already trust SkyTravel
            </span>
          </h2>

          <p className="mt-6 text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover what our community says about their unforgettable
            adventures, premium travel experiences and global connections.
          </p>

          {/* STATS */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">

            <div className="text-center">
              <h3 className="text-4xl font-black text-white">15K+</h3>
              <p className="text-slate-400 text-sm mt-1">
                Happy Travelers
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-black text-white">4.9★</h3>
              <p className="text-slate-400 text-sm mt-1">
                Average Rating
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-black text-white">50+</h3>
              <p className="text-slate-400 text-sm mt-1">
                Destinations
              </p>
            </div>

          </div>

        </div>

        {/* FIRST ROW */}
        <div className="relative flex overflow-hidden mb-8">

          <div className="flex animate-marquee gap-6 min-w-full">
            {[...firstRow, ...firstRow].map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>

        </div>

        {/* SECOND ROW */}
        <div className="relative flex overflow-hidden">

          <div className="flex animate-marquee-reverse gap-6 min-w-full">
            {[...secondRow, ...secondRow].map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

function ReviewCard({ review }) {

  return (
    <div className="min-w-[360px] max-w-[360px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">

      {/* TOP */}
      <div className="flex items-center justify-between mb-5">

        <div className="flex items-center gap-4">

          <img
            src={review.image}
            alt={review.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-blue-400"
          />

          <div>
            <h3 className="text-white font-bold text-lg">
              {review.name}
            </h3>

            <div className="flex items-center gap-1 text-slate-400 text-sm">
              <MapPin size={14} />
              {review.country}
            </div>
          </div>

        </div>

        <div className="bg-blue-500/10 p-3 rounded-2xl border border-blue-400/20">
          <Quote className="text-blue-300" size={20} />
        </div>

      </div>

      {/* STARS */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(review.rating)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* REVIEW */}
      <p className="text-slate-300 leading-relaxed text-sm mb-6">
        "{review.review}"
      </p>

      {/* FOOTER */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">

        <div className="flex items-center gap-2 text-blue-300 text-sm font-medium">
          <Plane size={15} />
          {review.trip}
        </div>

        <div className="flex items-center gap-1 text-slate-400 text-xs">
          <Globe size={14} />
          Verified Traveler
        </div>

      </div>

    </div>
  );
}