import { Link } from "react-router-dom";

import { useState } from "react";

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

  const handleLogout = () => {

    localStorage.removeItem("user");

    localStorage.removeItem("token");

    window.location.reload();

  };

  return (

    <>
    
      <header className="flex relative items-center justify-between w-full px-8 py-6 bg-blue-700 shadow-lg">

        <h1 className="text-white text-2xl md:text-4xl font-semibold">Travel agency</h1>

        <button className="text-white text-3xl md:hidden" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

        {/* Menú */}

        <nav className={`mobile-menu ${menuOpen ? "flex" : "hidden"} self-center md:flex z-50`} aria-label="Main navigation">
        
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 bg-blue-700 md:bg-transparent absolute md:static top-full left-0 w-full md:w-auto p-6 md:p-0 shadow-md md:shadow-none">
          
            <li><Link className="relative pb-1 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full" to="/destination">Destinations</Link></li>

            <li><Link className="relative pb-1 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full" to="/">Tours</Link></li>
          
            <li><Link className="relative pb-1 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full" to="/">About</Link></li>
          
            <li><Link className="relative pb-1 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full" to="/">Contact</Link></li>
        
            {user ? (<><li><span className="text-white font-medium">Hello, {user.firstname}</span></li><li><Link onClick={() => { localStorage.removeItem("user"); localStorage.removeItem("token"); window.location.reload(); }} className="relative pb-1 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Logout</Link></li></>) : (<li><Link className="relative pb-1 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full" to="/login">Log in</Link></li>)}

          </ul>
      
        </nav>

      </header>

      <main>

        <section className="relative flex items-center min-h-[85vh] w-full bg-[url('../img/destinos.jpg')] bg-cover bg-center px-8 md:px-20">

          <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/20"></div>

          <div className="relative z-10 flex flex-col gap-6 max-w-xl text-white">

            <h2 className="text-4xl md:text-6xl font-semibold leading-tight">Discover your</h2>

            <h2 className="text-4xl md:text-6xl font-semibold leading-tight">perfect tour</h2>

            <p className="text-lg md:text-xl">Explore the world with us and live unforgettable experiences.</p>
            
            <button className="bg-blue-700 hover:bg-blue-800 transition-all text-white text-lg md:text-xl px-8 py-4 rounded-2xl w-fit cursor-pointer">Find tours</button>
          
          </div>
        
        </section>

        <section className="w-full flex items-center justify-center p-8">

          <div className="w-full max-w-4xl">
    
            <form className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 bg-white p-4 shadow-xl shadow-gray-300 rounded-2xl">
      
                {/* Select destino */}
      
                <select className="w-full text-center p-4 border-2 border-black bg-white rounded-2xl" name="destination" value={destination} onChange={(e) => setDestination(e.target.value)}>
        
                  <option value="" disabled>Select destination</option>
        
                  {countries.map((country, idx) => (<option key={idx} value={country.toLowerCase()}>{country}</option>))}
      
                </select>

                {/* Select tipo de viaje */}
      
                <select className="w-full text-center p-4 border-2 border-black bg-white rounded-2xl" name="type" value={type} onChange={(e) => setType(e.target.value)}>
        
                  <option value="" disabled>Select type</option>
        
                  {tripTypes.map((t, idx) => (<option key={idx} value={t.toLowerCase()}>{t}</option>))}
      
                </select>

                {/* Select duración */}
      
                <select className="w-full text-center p-4 border-2 border-black bg-white rounded-2xl" name="duration" value={duration} onChange={(e) => setDuration(e.target.value)}>
        
                  <option value="" disabled>Select duration</option>
        
                  {durations.map((d, idx) => (<option key={idx} value={d.toLowerCase()}>{d}</option>))}
      
                </select>

                <input type="submit" value="Search" className="bg-blue-700 text-white p-4 rounded-2xl w-full cursor-pointer hover:bg-blue-600 transition-all"/>
    
            </form>

          </div>
        
        </section>

        <section className="w-full flex items-center justify-center py-16 px-6">

          <div className="w-full max-w-6xl flex flex-col items-start gap-6">

            <h2 className="font-semibold text-4xl">Popular Destinations</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {[{ src: "img/Honolulu.jpeg", name: "Honolulu", country: "Hawaii" },{ src: "img/Roma.webp", name: "Rome", country: "Italy" },{ src: "img/Bali.jpeg", name: "Bali", country: "Indonesia" },{ src: "img/France.avif", name: "Paris", country: "France" },].map((dest, idx) => (
              
               <div key={idx} className="flex flex-col items-center gap-2 p-4 bg-white rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-out cursor-pointer">

                  <figure className="w-full overflow-hidden rounded-3xl aspect-4/5">

                    <img className="w-full h-full object-cover" src={dest.src} alt={`${dest.name} in ${dest.country}`} />

                  </figure>

                  <h3 className="font-semibold text-2xl">{dest.name}</h3>

                  <p className="text-gray-600">{dest.country}</p>

                </div>

              ))}

            </div>

          </div>

        </section>

        <section className="w-full flex items-center justify-center px-6 py-12">

          <div className="max-w-3xl text-center flex flex-col gap-4">

            <h2 className="text-3xl sm:text-4xl font-semibold">Why should you travel with us?</h2>

            <p className="text-gray-600 text-lg leading-relaxed">We offer customized tours, exclusive services, and we can make you sure that you will never forget every experience.</p>

          </div>

        </section>
      
      </main>
    
    </>

  );

}