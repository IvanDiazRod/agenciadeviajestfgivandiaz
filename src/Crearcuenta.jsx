import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Crearcuenta() {
  const [count, setCount] = useState(0)

  return (
    <>
<header class="flex items-center justify-between w-full px-8 py-6 bg-blue-700 shadow-lg sticky top-0">

  <h1 class="text-white text-2xl md:text-4xl font-semibold self-center">Travel agency</h1>

  <button id="menu-btn" class="text-white text-3xl md:hidden">☰</button>

  <nav id="mobile-menu" aria-label="Main navigation" class="hidden self-center md:flex">

    <ul class="flex flex-col md:flex-row items-center gap-4 md:gap-8 bg-blue-700 md:bg-transparent absolute md:static top-full left-0 w-full md:w-auto p-6 md:p-0 shadow-md md:shadow-none">

      <li><a href="#"class="relative pb-1 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Destinations</a></li>

      <li><a href="#"class="relative pb-1 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Tours</a></li>

      <li><a href="#"class="relative pb-1 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">About</a></li>

      <li><a href="#"class="relative pb-1 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contact</a></li>

      <li><a href="crearcuenta.html"class="relative pb-1 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Iniciar sesión</a></li>

    </ul>

  </nav>

</header>
    </>
  )
}

export default Crearcuenta