import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {

  const [form, setForm] = useState({
    firstname: "",
    surname: "",
    secondsurname: "",
    email: "",
    dateofbirth: "",
    gender: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/register",
      form
    );

    console.log("REGISTER OK:", response.data);
    setSuccess(true);
    setErrors({});

  } catch (error) {
    if (error.response) {
      console.log("REGISTER ERROR:", error.response.data);
      setErrors(error.response.data.errors || {});
    } else {
      console.log("NETWORK ERROR:", error);
    }
  }
};

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

      {/* MAIN */}
      <main>
        <article>
          <section className="w-full min-h-screen flex items-center justify-center p-6 bg-gray-100">
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
              <form className="w-full flex flex-col gap-6 p-8 border-2 border-blue-600 rounded-3xl shadow-xl bg-white" onSubmit={handleSubmit}>
                <h1 className="text-3xl md:text-4xl font-semibold text-center">
                  Create your account
                </h1>

                {/* First Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstname" className="text-gray-700 font-medium">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="p-2 border-2 border-blue-500 outline-none rounded-2xl focus:border-blue-700"
                    type="text"
                    name="firstname"
                    value={form.firstname}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                {/* Surname */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="surname" className="text-gray-700 font-medium">
                    Surname <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="p-2 border-2 border-blue-500 outline-none rounded-2xl focus:border-blue-700"
                    type="text"
                    name="surname"
                    value={form.surname}
                    onChange={handleChange}
                    placeholder="Enter your surname"
                    required
                  />
                </div>

                {/* Second Surname */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="secondsurname" className="text-gray-700 font-medium">
                    Second surname (optional)
                  </label>
                  <input
                    className="p-2 border-2 border-blue-500 outline-none rounded-2xl focus:border-blue-700"
                    type="text"
                    name="secondsurname"
                    value={form.secondsurname}
                    onChange={handleChange}
                    placeholder="Enter your second surname"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-gray-700 font-medium">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="p-2 border-2 border-blue-500 outline-none rounded-2xl focus:border-blue-700"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                {/* Date of Birth */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="dateofbirth" className="text-gray-700 font-medium">
                    Date of birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="p-2 border-2 border-blue-500 outline-none rounded-2xl focus:border-blue-700"
                    type="date"
                    name="dateofbirth"
                    value={form.dateofbirth}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Gender */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="gender" className="text-gray-700 font-medium">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="p-2 border-2 border-blue-500 outline-none rounded-2xl focus:border-blue-700"
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    required
                  >

                  <option value="nogender" disabled>Select your gender</option>

                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="iprefernotsay">I prefer not to say it</option>
                  </select>
                </div>

                {/* Password */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="password" className="text-gray-700 font-medium">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="p-2 border-2 border-blue-500 outline-none rounded-2xl focus:border-blue-700"
  type="password"
  name="password"
  value={form.password}
  onChange={handleChange}
  placeholder="Enter your password"
  required
                  />
                  <p className="text-sm text-gray-500">
                    This password must contain at least 8 characters.
                  </p>
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="password_confirmation" className="text-gray-700 font-medium">
                    Confirm password <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="p-2 border-2 border-blue-500 outline-none rounded-2xl focus:border-blue-700"
  type="password"
  name="password_confirmation"
  value={form.password_confirmation}
  onChange={handleChange}
  placeholder="Repeat your password"
  required
                  />
                </div>

                {/* Button */}
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl font-medium text-lg hover:bg-blue-700 transition shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                  Create my account
                </button>

                {/* Link to login */}
                <p className="text-center text-gray-500 text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-600 hover:underline font-medium">
                    Log in
                  </Link>
                </p>
              </form>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}