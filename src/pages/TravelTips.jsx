import { Plane, ShieldCheck, Globe, Backpack, Smartphone, CheckCircle2, Luggage, Wifi, CreditCard, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

export default function TravelTips() {

  const categories = [
    {
      title: "Flight Essentials",
      icon: Plane,
      color: "from-blue-600 to-cyan-500",
      tips: [
        "Arrive at the airport at least 2 hours before departure.",
        "Download your boarding pass before traveling.",
        "Choose your seat early for a better experience.",
      ],
    },
    {
      title: "Packing Smart",
      icon: Backpack,
      color: "from-indigo-600 to-blue-500",
      tips: [
        "Use packing cubes to save space.",
        "Carry only versatile clothing.",
        "Always keep essentials in your carry-on bag.",
      ],
    },
    {
      title: "Travel Safety",
      icon: ShieldCheck,
      color: "from-emerald-600 to-green-500",
      tips: [
        "Keep digital copies of your passport.",
        "Avoid unsecured public WiFi networks.",
        "Store emergency contacts offline.",
      ],
    },
    {
      title: "International Travel",
      icon: Globe,
      color: "from-violet-600 to-fuchsia-500",
      tips: [
        "Check visa requirements in advance.",
        "Bring a universal power adapter.",
        "Exchange a small amount of currency beforehand.",
      ],
    },
  ];

  const checklist = [
    "Passport / ID",
    "Boarding Pass",
    "Phone Charger",
    "Hotel Reservation",
    "Travel Insurance",
    "Local Currency",
  ];

  const travelerTypes = [
    {
      title: "Backpacker",
      desc: "Travel light, save money and explore freely.",
      icon: Backpack,
    },
    {
      title: "Luxury Traveler",
      desc: "Premium comfort, exclusive experiences and style.",
      icon: CreditCard,
    },
    {
      title: "Digital Nomad",
      desc: "Stay connected while working around the world.",
      icon: LaptopIcon,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden">

      <div className="relative px-6 md:px-12 py-28">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 blur-3xl rounded-full"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <Plane className="text-cyan-400" size={16} />
            <span className="text-sm tracking-wide">
              Smart Travel Guide
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">

            Travel Smart.
            <br />

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Travel Better.
            </span>

          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Essential travel advice, safety recommendations and expert tips
            designed for modern explorers around the world.
          </p>

        </div>

      </div>

      <div className="px-6 md:px-12 mb-24">

        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-r from-blue-600 to-cyan-500 p-10 md:p-16 shadow-2xl">

          <div className="relative z-10">

            <div className="inline-flex px-4 py-2 rounded-full bg-white/10 text-sm mb-6 backdrop-blur-md">
              Featured Travel Advice
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 max-w-3xl leading-tight">
              Never exchange currency directly at airports.
            </h2>

            <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
              Airport exchange rates are usually significantly more expensive.
              Use local ATMs or digital banks for better international rates.
            </p>

          </div>

        </div>

      </div>

      <div className="px-6 md:px-12 mb-28">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-black mb-5">
              Essential Travel Tips
            </h2>

            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Everything you need for a safer, smarter and smoother journey.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {categories.map((category, index) => {

              const Icon = category.icon;

              return (
                <div
                  key={index}
                  className="group relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl"
                >

                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition bg-gradient-to-br ${category.color}`}></div>

                  <div className="relative z-10">

                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-xl mb-8`}>
                      <Icon size={36} />
                    </div>

                    <h3 className="text-3xl font-bold mb-6">
                      {category.title}
                    </h3>

                    <div className="space-y-5">

                      {category.tips.map((tip, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-4 text-slate-300"
                        >

                          <CheckCircle2
                            className="text-cyan-400 mt-1 shrink-0"
                            size={18}
                          />

                          <p className="leading-relaxed">
                            {tip}
                          </p>

                        </div>
                      ))}

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

      <div className="px-6 md:px-12 mb-28">

        <div className="max-w-6xl mx-auto rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-14">

          <div className="flex items-center gap-4 mb-10">

            <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-xl">
              <Luggage size={30} />
            </div>

            <div>

              <h2 className="text-4xl font-black">
                Before You Fly
              </h2>

              <p className="text-slate-400 mt-1">
                Your essential pre-flight checklist.
              </p>

            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {checklist.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-slate-900/60 border border-white/5 rounded-2xl p-5 hover:border-cyan-500/30 transition"
              >

                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                  <CheckCircle2 className="text-emerald-400" size={20} />
                </div>

                <span className="text-lg font-medium">
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>

      <div className="px-6 md:px-12 mb-28">

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            {
              value: "2H",
              label: "Recommended airport arrival",
              icon: Clock3,
            },
            {
              value: "98%",
              label: "Travelers recommend insurance",
              icon: ShieldCheck,
            },
            {
              value: "24/7",
              label: "Digital tools available worldwide",
              icon: Smartphone,
            },
          ].map((stat, index) => {

            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="rounded-[32px] bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-10 text-center hover:translate-y-[-6px] transition-all duration-500"
              >

                <div className="w-16 h-16 rounded-2xl bg-blue-600 mx-auto flex items-center justify-center mb-6 shadow-xl">
                  <Icon size={30} />
                </div>

                <div className="text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>

                <p className="text-slate-400 leading-relaxed">
                  {stat.label}
                </p>

              </div>
            );
          })}

        </div>

      </div>

      <div className="px-6 md:px-12 mb-32">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Choose Your Travel Style
            </h2>

            <p className="text-slate-400 text-lg">
              Different travelers. Different adventures.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {travelerTypes.map((type, index) => {

              const Icon = type.icon;

              return (
                <div
                  key={index}
                  className="group rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 hover:border-cyan-400/40 hover:scale-[1.03] transition-all duration-500"
                >

                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-8 shadow-2xl">
                    <Icon size={36} />
                  </div>

                  <h3 className="text-3xl font-bold mb-5">
                    {type.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed text-lg">
                    {type.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>

      <div className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700 opacity-90"></div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white blur-3xl rounded-full"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-28 text-center">

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">

            The World
            <br />

            Is Waiting For You.

          </h2>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Explore new destinations, discover unforgettable experiences and
            travel beyond limits with Travel Agency.
          </p>

          <Link to="/destinations" className="px-10 py-5 rounded-2xl bg-white text-blue-700 font-bold text-lg shadow-2xl hover:scale-105 transition-all duration-300">
            Start Your Next Adventure
          </Link>

        </div>

      </div>

    </section>
  );
}

function LaptopIcon(props) {
  return <Wifi {...props} />;
}