import { useState } from "react";
import {ChevronDown, Search, Plane, Map, User, CreditCard, MessageCircle} from "lucide-react";
import { faqData } from "../data/FaqData";

export default function FrequentAskedQuestions() {

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    { name: "All", icon: MessageCircle },
    { name: "Flights", icon: Plane },
    { name: "Tours", icon: Map },
    { name: "Account", icon: User },
    { name: "Payments", icon: CreditCard },
  ];

  const filteredQuestions = faqData.filter((item) => {

    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(search.toLowerCase()) || item.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;

  });

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-950 to-indigo-950 py-24 px-6">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl top-0 left-0"></div>
          <div className="absolute w-96 h-96 bg-cyan-300 rounded-full blur-3xl bottom-0 right-0"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <span className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm backdrop-blur-md">Support Center</span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">Frequent Asked Questions</h1>
          <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">Everything you need to know about flights, tours, reservations...</p>
          <div className="mt-10 relative max-w-2xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input type="text" placeholder="What are you looking for help?" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full bg-white text-gray-800 rounded-2xl pl-14 pr-5 py-4 shadow-2xl outline-none border border-white/30 focus:ring-4 focus:ring-blue-300 transition" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button key={category.name} onClick={() => setActiveCategory(category.name)} className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-medium transition-all duration-300 ${activeCategory === category.name ? "bg-blue-600 text-white shadow-lg scale-105" : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-100"}`}>
                <Icon size={18} />{category.name}
              </button>
            );
          })}
        </div>

        <div className="space-y-5">
          {filteredQuestions.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg">
                <button onClick={() => setOpenIndex(isOpen ? null : index)} className="w-full flex items-center justify-between text-left p-6 md:p-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-500">{item.category}</span>
                    <h3 className="mt-2 text-lg md:text-xl font-semibold text-gray-800">{item.question}</h3>
                  </div>
                  <ChevronDown className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-8 text-gray-600 leading-relaxed">{item.answer}</div>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredQuestions.length === 0 && (
            <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100">
              <Search size={48} className="mx-auto text-gray-300" />
              <h3 className="mt-4 text-2xl font-bold text-gray-700">No questions found</h3>
              <p className="mt-2 text-gray-500">Try searching with different keywords.</p>
            </div>
          )}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] p-10 md:p-14 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">Still need help?</h2>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">Our support team is ready to help you with your reservations, tours and travel questions.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

            <button onClick={() => window.open("https://chat.whatsapp.com/", "_blank")} className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">Contact via WhatsApp</button>
            <button className="bg-white/10 border border-white/20 backdrop-blur-md px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition">Visit Support Center</button>
          
          </div>
        </div>
      </div>
    </section>
  );
}