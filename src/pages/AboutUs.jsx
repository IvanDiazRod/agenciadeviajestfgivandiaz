import { Globe2, ShieldCheck, Users, Plane, HeartHandshake, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutUs() {

  const stats = [
    { value: "25K+", label: "Happy Travelers" },
    { value: "120+", label: "Destinations" },
    { value: "340+", label: "Tours" },
    { value: "24/7", label: "Support Team" },
  ];

  const values = [
    {
      icon: Globe2,
      title: "Global Experiences",
      description:
        "We connect travelers with unforgettable destinations, tours and unique adventures around the world.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Trusted",
      description:
        "Your bookings, flights and personal information are protected using modern security standards.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Travel is better together. Join WhatsApp groups, meet travelers and create international friendships.",
    },
    {
      icon: HeartHandshake,
      title: "Human Connection",
      description:
        "We believe traveling is not only about places, but also about emotions, stories and unforgettable moments.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[-120px] w-[320px] h-[320px] bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-[-120px] w-[340px] h-[340px] bg-cyan-400/20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <Sparkles size={16} className="text-cyan-300" />
            <span className="text-sm text-gray-200 tracking-wide">About Travel Agency</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight">Creating unforgettable{" "}<span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">travel experiences</span></h1>
          <p className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">Travel Agency is more than a what its name says. We are building a modern ecosystem where flights, tours, communities and unforgettable experiences come together in a digital experience.</p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/destinations" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl">Explore Destinations</Link>
            <Link to="/Tours" className="border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold transition-all duration-300">Discover Our Tours</Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">

          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-4xl md:text-5xl font-black text-cyan-300">{stat.value}</h3>
              <p className="mt-3 text-gray-300 text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-28">
          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-6">
              <Plane size={16} className="text-cyan-300" />
              <span className="text-cyan-200 text-sm font-medium">Our Mission</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">Transforming the way people{" "} <span className="text-cyan-300">discover the world</span></h2>

            <p className="mt-8 text-gray-300 leading-relaxed text-lg">Our mission is to create a digital travel experience that combines technology, community and adventure. We want every traveler to feel inspired before, during and after every journey.</p>
            <p className="mt-6 text-gray-400 leading-relaxed">From flights and tours to international traveling communities through WhatsApp groups, Travel Agency is designed to make every experience easier, more social and more exciting.</p>

          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-2xl rounded-[40px]"></div>
            
            <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10">
              <img src="/img/aboutus/AboutUs.jpg" alt="Travel Experience" className="w-full h-[420px] object-cover rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>

        <div className="mt-32">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black">What makes us different</h2>
            <p className="mt-6 text-gray-300 text-lg leading-relaxed">We combine modern design, traveling experiences and social travel features to create a next-generation travel platform.</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 backdrop-blur-xl">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-300/20 flex items-center justify-center mb-6 group-hover:scale-110 transition"><Icon size={30} className="text-cyan-300" /></div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              );
            })}

          </div>

        </div>

        <div className="mt-32 text-center">

          <div className="bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-indigo-500/20 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 md:p-16">

            <h2 className="text-4xl md:text-6xl font-black leading-tight">Your next adventure{" "} <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">starts here</span></h2>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">Discover destinations, connect with travelers and explore the world with Travel Agency.</p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

              <Link to="/destinations" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl">Start Exploring</Link>
              <Link to="/groups" className="border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold transition-all duration-300">Join Our Community</Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}