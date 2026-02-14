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

        <section className="w-full bg-gray-50 py-20 px-6">

          <div className="max-w-6xl mx-auto text-center mb-14">
    
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-800">Why travel with us?</h2>

            <p className="mt-4 text-gray-600 text-lg">We create unforgettable experiences tailored just for you.</p>

          </div>

          <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">

              <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl mb-6">
              
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>
              
              </div>

              <h3 className="text-xl font-semibold mb-2 text-gray-800">Handpicked Destinations</h3>

              <p className="text-gray-600 leading-relaxed">We carefully select unique and authentic locations around the world.</p>
            
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">

              <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl mb-6">
              
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" /></svg>
              
              </div>

              <h3 className="text-xl font-semibold mb-2 text-gray-800">Handpicked Destinations</h3>

              <p className="text-gray-600 leading-relaxed">We carefully select unique and authentic locations around the world.</p>
            
            </div>


            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">

              <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl mb-6">
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg>

              </div>

              <h3 className="text-xl font-semibold mb-2 text-gray-800">Handpicked Destinations</h3>

              <p className="text-gray-600 leading-relaxed">We carefully select unique and authentic locations around the world.</p>

            </div>

          </div>

        </section>

        <section className="w-full bg-gray-50 py-20 px-6">

          <div className="max-w-6xl mx-auto text-center mb-14">
    
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-800">What our clients say</h2>
    
            <p className="mt-4 text-gray-600 text-lg">Real experiences from happy travelers around the world</p>
  
          </div>

          <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

            <div className="bg-blue-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">

              <div className="flex items-center gap-4 mb-4">
        
                <img src="https://randomuser.me/api/portraits/women/40.jpg" alt="Client" className="w-14 h-14 rounded-full object-cover"/>
        
              <div>
          
            <h3 className="font-semibold text-white">Emily Johnson</h3>
          
            <p className="text-sm text-gray-100">United Kingdom</p>
        
          </div>
      
        </div>

        <div className="flex gap-1 text-yellow-300 mb-3">
  
          {[...Array(5)].map((_, i) => (<svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>))}

        </div>

        <p className="text-white leading-relaxed">The trip was perfectly organized. Every detail was taken care of and the experience exceeded our expectations. We will definitely travel with them again!</p>

      </div>

    <div className="bg-orange-700 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">

      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://randomuser.me/api/portraits/women/60.jpg"
          alt="Client"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-white">Emily Johnson</h3>
          <p className="text-sm text-gray-100">United Kingdom</p>
        </div>
      </div>

<div className="flex gap-1 text-yellow-300 mb-3">
  {[...Array(4)].map((_, i) => (
    <svg
      key={i}
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  ))}
</div>

      <p className="text-white leading-relaxed">The trip was perfectly organized. Every detail was taken care of and the experience exceeded our expectations. We will definitely travel with them again!</p>

    </div>

    <div className="bg-green-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">

      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://randomuser.me/api/portraits/women/80.jpg"
          alt="Client"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-white">Emily Johnson</h3>
          <p className="text-sm text-gray-100">United Kingdom</p>
        </div>
      </div>

<div className="flex gap-1 text-yellow-300 mb-3">
  {[...Array(5)].map((_, i) => (
    <svg
      key={i}
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  ))}
</div>

      <p className="text-white leading-relaxed">
        The trip was perfectly organized. Every detail was taken care of and the experience exceeded our expectations. We will definitely travel with them again!
      </p>

    </div>

  </div>

</section>

      
      </main>
    
      <footer className="bg-blue-700 text-white pt-16 pb-8 px-6">

<div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 items-start">

  {/* Brand */}
  <div>
    <h2 className="text-3xl font-semibold mb-4">
      Travel Agency
    </h2>
    <p className="text-blue-100 leading-relaxed max-w-md">
      It’s not about the trip, it’s about the experience.
      We create unforgettable journeys around the world.
    </p>
  </div>

  {/* Newsletter */}
  <div className="md:justify-self-end w-full max-w-md">
    <h3 className="font-semibold text-lg mb-4">
      Subscribe to our newsletter
    </h3>

    <form className="flex bg-white rounded-xl overflow-hidden shadow-md">
      <input
        type="email"
        placeholder="Your@email.com"
        className="flex-1 px-4 py-2 text-gray-700 outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 px-5 font-medium hover:bg-blue-800 transition"
      >
        Subscribe
      </button>
    </form>
  </div>

</div>


    <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-blue-500 text-center text-blue-200 text-sm"></div>

<div className="max-w-7xl mx-auto mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

  {/* Quick Links */}
  <div>
    <h3 className="text-lg font-semibold mb-4 tracking-wide">
      Quick links
    </h3>
    <ul className="space-y-2 text-blue-100 text-sm">
      <li><a href="#" className="hover:text-white transition">About Us</a></li>
      <li><a href="#" className="hover:text-white transition">Destinations</a></li>
      <li><a href="#" className="hover:text-white transition">Tours and packages</a></li>
      <li><a href="#" className="hover:text-white transition">Travel blog</a></li>
      <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
    </ul>
  </div>

  {/* Customer Support */}
  <div>
    <h3 className="text-lg font-semibold mb-4 tracking-wide">
      Customer support
    </h3>
    <ul className="space-y-2 text-blue-100 text-sm">
      <li><a href="#" className="hover:text-white transition">FAQs</a></li>
      <li><a href="#" className="hover:text-white transition">Payment options</a></li>
      <li><a href="#" className="hover:text-white transition">Travel insurance</a></li>
    </ul>
  </div>

  {/* Resources */}
  <div>
    <h3 className="text-lg font-semibold mb-4 tracking-wide">
      Resources
    </h3>
    <ul className="space-y-2 text-blue-100 text-sm">
      <li><a href="#" className="hover:text-white transition">Travel guides</a></li>
      <li><a href="#" className="hover:text-white transition">Visa information</a></li>
      <li><a href="#" className="hover:text-white transition">Tips to have a better travel</a></li>
      <li><a href="#" className="hover:text-white transition">Terms and conditions</a></li>
    </ul>
  </div>

  {/* Contact */}
  <div>
    <h3 className="text-lg font-semibold mb-4 tracking-wide">
      Contact Us
    </h3>

    <ul className="space-y-2 text-blue-100 text-sm mb-6">
      <li>Madrid, Spain</li>
      <li>+34 663 88 40 81</li>
      <li>info@travelagency.es</li>
    </ul>

    <p className="text-sm font-medium mb-3">Follow us</p>

    <div className="flex gap-4">
      <a
        href="#"
        className="text-blue-200 hover:text-white transition"
      >
        <span className="sr-only">Facebook</span>
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  </div>

</div>


  {/* Bottom line */}
  <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-blue-500 text-center text-blue-200 text-sm">
    © 2024 Travel Agency. All rights reserved.
  </div>

</footer>


    </>

  );

}