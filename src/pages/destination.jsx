import { useState } from "react";

import { Link } from "react-router-dom";

export default function Destinos() {

  const [menuOpen, setMenuOpen] = useState(false);

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
        <article>

            <section class="w-full py-20 px-6 bg-gray-50">
              
  <div class="max-w-7xl mx-auto mb-12 text-center">
    <h2 class="text-4xl md:text-5xl font-semibold text-blue-600">
      Our complete destinations list
    </h2>
    <p class="mt-4 text-gray-600 text-lg">
      Discover the most popular destinations around the world
    </p>

<form class="mt-10 flex w-full max-w-xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

  <input
    type="text"
    placeholder="Where do you want to go?"
    class="flex-1 px-5 py-3 text-gray-700 outline-none"
  />

  <button
    type="submit"
    class="bg-blue-600 text-white px-6 flex items-center gap-2 hover:bg-blue-700 cursor-pointer transition"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
 Search
  </button>

</form>



  </div>

  <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
    <div class="group bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      
      <figure class="aspect-[4/5] overflow-hidden">
        <img
          src="img/France.avif"
          alt="Eiffel Tower in Paris, France"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </figure>

      <div class="p-6 text-center">
        <h3 class="text-2xl font-semibold text-gray-800">Paris</h3>
        <p class="text-gray-500 mt-1">France</p>
      </div>

    </div>

        <div class="group bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      
      <figure class="aspect-[4/5] overflow-hidden">
        <img
          src="../img/kyoto.jpg"
          alt="Eiffel Tower in Paris, France"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </figure>

      <div class="p-6 text-center">
        <h3 class="text-2xl font-semibold text-gray-800">Kyoto</h3>
        <p class="text-gray-500 mt-1">Japan</p>
      </div>

    </div>

        <div class="group bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      
      <figure class="aspect-[4/5] overflow-hidden">
        <img
          src="img/Santorini.jpg"
          alt="Eiffel Tower in Paris, France"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </figure>

      <div class="p-6 text-center">
        <h3 class="text-2xl font-semibold text-gray-800">Santorini</h3>
        <p class="text-gray-500 mt-1">Greece</p>
      </div>

    </div>

        <div class="group bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      
      <figure class="aspect-[4/5] overflow-hidden">
        <img
          src="img/NewYork.jpg"
          alt="Eiffel Tower in Paris, France"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </figure>

      <div class="p-6 text-center">
        <h3 class="text-2xl font-semibold text-gray-800">New York</h3>
        <p class="text-gray-500 mt-1">USA</p>
      </div>

    </div>

        <div class="group bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      
      <figure class="aspect-[4/5] overflow-hidden">
        <img
          src="img/Taskent.jpg"
          alt="Eiffel Tower in Paris, France"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </figure>

      <div class="p-6 text-center">
        <h3 class="text-2xl font-semibold text-gray-800">Taskent</h3>
        <p class="text-gray-500 mt-1">Uzbekistan</p>
      </div>

    </div>

        <div class="group bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      
      <figure class="aspect-[4/5] overflow-hidden">
        <img
          src="img/Hanoi.jpg"
          alt="Eiffel Tower in Paris, France"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </figure>

      <div class="p-6 text-center">
        <h3 class="text-2xl font-semibold text-gray-800">Hanoi</h3>
        <p class="text-gray-500 mt-1">Vietnam</p>
      </div>

    </div>

  </div>

</section>


        </article>
    </main>

      </>

  );
}