import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Nav from "./Nav.jsx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate("/login");
  };

  return (
      <header className="flex sticky top-0 z-30 items-center justify-between w-full px-8 py-6 bg-blue-700 shadow-lg">
        <h1 className="relative group select-none"><span className="absolute inset-0 blur-2xl opacity-30 bg-blue-400 rounded-full scale-110 group-hover:opacity-50 transition duration-700"></span><span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-300 text-1xl md:text-4xl font-extrabold tracking-tight animate-heroTitle">Travel<span className="ml-2 text-white">Agency</span></span></h1>
        <Nav />
      </header>
  );
}