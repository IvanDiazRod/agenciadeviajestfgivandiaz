import {
  Mail,
  Phone,
  MapPin,
  Headphones,
  Send,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function ContactUs() {

  const contactCards = [
    {
      icon: Mail,
      title: "Email Support",
      value: "support@travelagency.vercel.app",
      description: "Fast replies for all travel inquiries.",
    },
    {
      icon: Phone,
      title: "Phone Number",
      value: "+34 999 999 999",
      description: "Available Monday to Friday.",
    },
    {
      icon: MapPin,
      title: "Headquarters",
      value: "Madrid, Spain",
      description: "Our international operations center.",
    },
    {
      icon: Headphones,
      title: "Live Assistance",
      value: "24/7 Support",
      description: "We are here whenever you need us.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white">

      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        <div className="text-center max-w-4xl mx-auto">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <MessageCircle size={16} className="text-cyan-400" />
            <span className="text-sm text-slate-200">Contact Travel Agency</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">We are here to help you with your{" "}<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">travel experience</span></h1>
          <p className="mt-6 text-slate-300 text-lg md:text-xl leading-relaxed">Questions about flights, tours, reservations or WhatsApp groups? Our team is ready to help you create unforgettable travel experiences.</p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-20">

          {contactCards.map((card, index) => {

            const Icon = card.icon;

            return (
              <div key={index} className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">

                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"><Icon className="text-cyan-400" size={26} /></div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-cyan-300 font-medium mb-3">{card.value}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>

              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-24">
          <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2rem] p-8 md:p-10 shadow-2xl">
            <div className="mb-8">
              <h2 className="text-3xl font-bold">Send us a message</h2>
              <p className="text-slate-400 mt-3">Fill out the form and our team will contact you as soon as possible.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-slate-300 mb-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all" />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all" />
                </div>

              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">Subject</label>
                <input type="text" placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all" />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">Category</label>

                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all">
                  <option className="bg-slate-900">Flights</option>
                  <option className="bg-slate-900">Tours</option>
                  <option className="bg-slate-900">WhatsApp Groups</option>
                  <option className="bg-slate-900">Technical Support</option>
                  <option className="bg-slate-900">Partnerships</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">Message</label>
                <textarea rows="6" placeholder="Write your message here..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none resize-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"></textarea>
              </div>

              <button type="submit" className="group w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-2xl py-4 font-bold text-lg transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-3">Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" /></button>
            </form>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/10 rounded-[2rem] p-8 backdrop-blur-xl">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-6"><MessageCircle className="text-cyan-400" size={30} /></div>
              <h3 className="text-3xl font-bold mb-4">Frequently Asked Questions</h3>
              <p className="text-slate-300 leading-relaxed mb-8">Maybe your question has already been answered in our FAQ section. Find information about bookings, tours, flights and much more.</p>
              <Link to="/faq" className="inline-flex items-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold hover:bg-slate-200 transition-all">Visit FAQ <ArrowRight size={18} /></Link>
            </div>

            <div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl flex-1">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
              <div className="relative z-10">
                <div className="inline-flex px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-medium mb-6">Global Travel Network</div>
                <h3 className="text-4xl font-black leading-tight">Connecting travelers across Europe and beyond.</h3>

                <p className="text-slate-400 mt-6 leading-relaxed">Travel Agency helps students and travelers discover destinations, connect through communities and explore unforgettable tours.</p>

                <div className="mt-10 grid grid-cols-2 gap-5">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <h4 className="text-3xl font-black text-cyan-400">25+</h4>
                    <p className="text-slate-400 text-sm mt-2">European destinations</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <h4 className="text-3xl font-black text-cyan-400">24/7</h4>
                    <p className="text-slate-400 text-sm mt-2">Support available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-28 text-center">
          <h2 className="text-4xl md:text-6xl font-black leading-tight max-w-4xl mx-auto">Your next journey starts with a conversation.</h2>
          <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto">Reach out to our team and start building your next unforgettable experience today.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
            <Link to="/Tours" className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-xl shadow-cyan-500/20">Explore Tours</Link>
            <Link to="/groups" className="border border-white/10 bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300">Join Community</Link>
          </div>
        </div>
      </div>
    </section>
  );
}