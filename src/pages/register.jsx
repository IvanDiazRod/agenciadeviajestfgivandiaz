import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      {/* HEADER */}
      <header className="flex items-center justify-between w-full px-8 py-6 bg-blue-700 shadow-lg">
        <h1 className="text-white text-2xl md:text-4xl font-semibold self-center">
          Travel agency
        </h1>

        <nav className="self-center hidden md:flex">
          <ul className="flex items-center gap-8">
            <li>
              <Link className="relative pb-1 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full" to="/">
                Destinations
              </Link>
            </li>
            <li>
              <Link className="relative pb-1 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full" to="/">
                Tours
              </Link>
            </li>
            <li>
              <Link className="relative pb-1 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full" to="/">
                About
              </Link>
            </li>
            <li>
              <Link className="relative pb-1 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full" to="/">
                Contact
              </Link>
            </li>
            <li>
              <Link className="relative pb-1 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full" to="/login">
                Log in
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* MAIN */}
      <main>
        <article>
          <section className="w-full min-h-screen flex items-center justify-center p-6 bg-gray-100">
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
              <form className="w-full flex flex-col gap-6 p-8 border-2 border-blue-600 rounded-3xl shadow-xl bg-white">
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
                    id="firstname"
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
                    id="surname"
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
                    id="secondsurname"
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
                    id="email"
                    placeholder="your@email.com"
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
                    id="dateofbirth"
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
                    id="gender"
                    required
                  >
                    <option value="" selected disabled>
                      Select your gender
                    </option>
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
                    id="password"
                    placeholder="Create a password"
                    required
                  />
                  <p className="text-sm text-gray-500">
                    This password must contain at least 8 characters.
                  </p>
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="confirmpassword" className="text-gray-700 font-medium">
                    Confirm password <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="p-2 border-2 border-blue-500 outline-none rounded-2xl focus:border-blue-700"
                    type="password"
                    id="confirmpassword"
                    placeholder="Repeat your password"
                    required
                  />
                </div>

                {/* Button */}
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl font-medium text-lg hover:bg-blue-700 transition shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
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