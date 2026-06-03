import { motion, useInView } from "framer-motion";
import { Globe, ShieldCheck, Plane, Users, MessageCircle } from "lucide-react";
import { useRef, useMemo } from "react";

export default function TravelReasons() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
  });

  const reasons = useMemo(() => [
    {
      title: "Global Travel Community",
      text: "Connect with thousands of travelers, Erasmus students and adventurers worldwide through our modern travel ecosystem.",
      icon: Globe,
      gradient: "from-blue-500 to-cyan-400",
      size: "large",
    },
    {
      title: "Smart Booking Experience",
      text: "Book flights, tours and activities in seconds with our intuitive next-generation platform.",
      icon: Plane,
      gradient: "from-indigo-500 to-blue-500",
      size: "small",
    },
    {
      title: "Private WhatsApp Groups",
      text: "Meet travelers before arriving. Join exclusive destination groups and discover events, tips and friendships.",
      icon: MessageCircle,
      gradient: "from-green-500 to-emerald-400",
      size: "small",
    },
    {
      title: "Secure Payments",
      text: "Advanced encryption, protected transactions and modern payment infrastructure for maximum safety.",
      icon: ShieldCheck,
      gradient: "from-slate-700 to-slate-900",
      size: "small",
    },
    {
      title: "Built For everyone",
      text: "This platform was designed for travelers who are looking for unforgettable experiences abroad.",
      icon: Users,
      gradient: "from-pink-500 to-rose-400",
      size: "small",
    },
  ], []);

  const stats = useMemo(() => [
    { number: "12K+", label: "Travelers" },
    { number: "35+", label: "Cities" },
    { number: "120+", label: "Tours" },
    { number: "98%", label: "Satisfaction" },
  ], []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-28 px-4 sm:px-6 bg-gradient-to-b from-white via-slate-50 to-white transform-gpu">

      <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: "easeOut" }} className="relative max-w-5xl mx-auto text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold shadow-sm mb-6">Why do Travelers Choose Travel Agency?</div>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight text-slate-900">We Are More Than A <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">Travel Platform</span></h2>
        <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">We love creating unforgettable journeys, international communities and premium travel experiences designed for modern explorers.</p>
      </motion.div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;

          return (
            <motion.div key={index} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{duration: 0.5, delay: index * 0.05, ease: "easeOut"}} whileHover={{y: -6,}} className={`group relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-shadow duration-300 ${reason.size === "large" ? "xl:col-span-2 min-h-[320px]" : "min-h-[320px]"}`}>
              <div className="relative z-10 h-full flex flex-col p-8 md:p-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition duration-300`}><Icon size={30} /></div>

                <div className="mt-8 flex-1">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">{reason.title}</h3>
                  <p className="mt-4 text-slate-600 leading-relaxed text-base md:text-lg">{reason.text}</p>
                </div>

                <div className="flex items-center justify-between mt-10">
                  <span className="text-sm font-bold tracking-widest uppercase text-slate-400">The Travel Agency Experience</span>
                </div>

                <div className={`absolute bottom-0 left-0 h-[4px] bg-gradient-to-r ${reason.gradient} w-0 group-hover:w-full transition-all duration-500 ease-out`} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
