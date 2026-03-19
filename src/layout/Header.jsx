import { useContext, useState } from "react"; // Quitamos useEffect
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext); // Extraemos los datos globales
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // La función del contexto ya limpia el localStorage y el estado
    setMenuOpen(false);
    navigate("/login");
  };

  return (

      <header className="flex relative items-center justify-between w-full px-8 py-6 bg-blue-700 shadow-lg">

        <h1 className="text-white text-2xl md:text-4xl font-semibold self-center">Travel agency</h1>

      <button className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1 self-center" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={`self-center block w-8 h-0.5 bg-white transform transition duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`self-center block w-8 h-0.5 bg-white transition duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
        <span className={`self-center block w-8 h-0.5 bg-white transform transition duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>

<nav
  className={`
    absolute md:static top-full left-0 w-full md:w-auto
    bg-blue-700 md:bg-transparent
    overflow-hidden md:overflow-visible
    transition-all duration-300 ease-in-out
    z-50
    ${menuOpen ? "max-h-[500px] opacity-100 p-6" : "max-h-0 opacity-0 p-0"}
    md:max-h-none md:opacity-100 md:p-0
  `}
  aria-label="Main navigation"
>
  <ul
    className="
      flex flex-col md:flex-row
      items-center md:items-center
      gap-6 md:gap-8
      w-full md:w-auto
    "
  >
          
            <li><Link to="/destination" className="relative text-white inline-block pb-0.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full transition-transform duration-300 ease-in-out">Destinations</Link></li>

            <li><Link to="/Tours" className="relative text-white inline-block pb-0.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full transition-transform duration-300 ease-in-out">Tours</Link></li>
          
            <li><Link to="/" className="relative text-white inline-block pb-0.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full transition-transform duration-300 ease-in-out">About</Link></li>
          
            <li><Link to="/" className="relative text-white inline-block pb-0.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full transition-transform duration-300 ease-in-out">Contact</Link></li>
        
            {user ? (<><li><span className="text-white font-medium">Hello, {user.firstname}</span></li><li><Link onClick={() => { localStorage.removeItem("user"); localStorage.removeItem("token"); window.location.reload(); }} className="relative text-white inline-block pb-0.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full transition-transform duration-300 ease-in-out">Logout</Link></li></>) : (<li><Link className="relative text-white inline-block pb-0.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full transition-transform duration-300 ease-in-out" to="/login">Log in</Link></li>)}

          </ul>
      
        </nav>

      </header>

  );
}