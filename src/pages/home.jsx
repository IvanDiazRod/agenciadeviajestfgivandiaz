import Hero from "./Hero";

import TravelForm from "./TravelForm";

import PopularDestinations from "./PopularDestinations";

import TravelReasons from "./TravelReasons";

import Ratings from "./Ratings";

import { useState, useRef, useEffect } from "react";

  export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const countries = ["Italy", "France", "Germany", "Spain"];

  const tripTypes = ["Adventure", "Relax", "Cultural", "Family"];

  const durations = ["1 week", "2 weeks", "3 weeks", "1 month"];

  const [destination, setDestination] = useState("");

  const [type, setType] = useState("");

  const [duration, setDuration] = useState("");

  const storedUser = localStorage.getItem("user");

  const user = storedUser ? JSON.parse(storedUser) : null;

  const reviewsRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
    
      ([entry]) => {
      
        if (entry.isIntersecting) {
        
          setIsVisible(true);
      
        }
    
      },
    
      { threshold: 0.2 }
  
    );

  
    if (reviewsRef.current) {
    
      observer.observe(reviewsRef.current);
  
    }

    return () => {
    
      if (reviewsRef.current) {
      
        observer.unobserve(reviewsRef.current);
    
      }
  
    };

  }, []);

  const handleLogout = () => {

    localStorage.removeItem("user");

    localStorage.removeItem("token");

    window.location.reload();

  };

  return (

    <>

      <Hero />

      <TravelForm />

      <PopularDestinations />

      <TravelReasons />

      <Ratings />

    </>

  );

}