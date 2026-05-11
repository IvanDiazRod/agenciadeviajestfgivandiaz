import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TravelReasons() {
  const reasons = [
    {
      title: "Handpicked Destinations",
      text: "We carefully select unique and authentic locations around the world.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>
      ),
    },
    {
      title: "Customer Satisfaction",
      text: "Our priority is making sure every traveler has an amazing experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      ),
    },
    {
      title: "Fast & Easy Booking",
      text: "Plan your trip in minutes with our intuitive platform.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
        </svg>
      ),
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] } 
    }
  };

  return (
    <section ref={sectionRef} className="w-full bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 px-4 sm:px-6">
      
      <motion.div initial={{ opacity: 0, y: -20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }} className="max-w-6xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-800 italic">Why travel with us?</h2>
        <p className="mt-3 md:mt-4 text-gray-600 text-base md:text-lg">We create unforgettable experiences tailored just for you.</p>
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="max-w-6xl mx-auto grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, index) => (
          <motion.div key={index} variants={cardVariants} whileHover={{ y: -10 }} className="group bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-shadow duration-500 flex flex-col border border-gray-100">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl mb-4 md:mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">{reason.icon}</motion.div>
            <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">{reason.title}</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">{reason.text}</p>
            <div className="w-0 h-1 bg-blue-600 mt-4 group-hover:w-full transition-all duration-500 rounded-full" />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}