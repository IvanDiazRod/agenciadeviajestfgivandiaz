import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>

      <header className="flex items-center justify-between w-full px-8 py-6 bg-blue-700 shadow-lg">

        <h1 className="text-white text-2xl md:text-4xl font-semibold">Travel agency</h1>

        <button id="menu-btn" class="text-white text-3xl md:hidden">☰</button>

        <nav className="mobile-menu hidden self-center md:flex" aria-label="Main navigation">

          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 bg-blue-700 md:bg-transparent absolute md:static top-full left-0 w-full md:w-auto p-6 md:p-0 shadow-md md:shadow-none">
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

      <main>
        <article>
          <section className="w-full min-h-screen flex items-center justify-center p-6 bg-gray-100">
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
              <form className="w-full flex flex-col gap-6 p-8 border-2 border-blue-600 rounded-3xl shadow-xl bg-white">
                <h1 className="text-3xl md:text-4xl font-semibold text-center">
                  Log in!
                </h1>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-gray-700 font-medium">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="p-2 border-2 border-blue-500 outline-none rounded-2xl focus:border-blue-700"
                    type="email"
                    id="email"
                    placeholder="Introduce your email"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="password" className="text-gray-700 font-medium">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="p-2 border-2 border-blue-500 outline-none rounded-2xl focus:border-blue-700"
                    type="password"
                    id="password"
                    placeholder="Introduce your password"
                    required
                  />
                </div>

                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl font-medium text-lg hover:bg-blue-700 transition shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                  Log in
                </button>

                <p className="text-center text-gray-500 text-sm">
                  You don’t have an account?{" "}
                  <Link to="/register" className="text-blue-600 hover:underline font-medium">
                    Create one
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