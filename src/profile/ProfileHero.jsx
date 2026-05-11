import { Camera } from "lucide-react";

export default function ProfileHero({
  user,
  bookings,
  flights,
  uploading,
  fileInputRef,
}) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-8 md:p-10 shadow-2xl mb-10">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-300/10 rounded-full blur-3xl"></div>

      <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">

        {/* PROFILE IMAGE */}
        <div className="relative group w-fit">
          <img
            src={`${user.profile_photo_url}${
              user.profile_photo_url.includes("?") ? "&" : "?"
            }t=${new Date().getTime()}`}
            alt="Profile"
            className={`w-32 h-32 rounded-[2rem] object-cover border-4 border-white/30 shadow-2xl transition duration-300 ${
              uploading ? "opacity-50" : ""
            }`}
          />

          {/* HOVER OVERLAY */}
          <div
            onClick={() => fileInputRef.current.click()}
            className="absolute inset-0 rounded-[2rem] bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center cursor-pointer backdrop-blur-sm"
          >
            <Camera className="text-white" size={28} />
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="flex-1 text-white">

          <p className="uppercase tracking-[0.35em] text-xs font-semibold text-blue-100">
            Premium Traveler
          </p>

          <h1 className="text-4xl md:text-6xl font-black mt-3 leading-tight">
            {user.firstname} {user.surname}
          </h1>

          <p className="mt-4 text-blue-100 text-lg max-w-2xl">
            Manage your bookings, flights and travel experiences from your personal dashboard.
          </p>

          {/* STATS */}
          <div className="flex flex-wrap gap-4 mt-8">

            <div className="bg-white/10 border border-white/10 backdrop-blur-xl px-5 py-4 rounded-2xl min-w-[140px]">
              <p className="text-xs uppercase tracking-wider text-blue-100">
                Tours
              </p>

              <h3 className="text-3xl font-black mt-1">
                {bookings.length}
              </h3>
            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-xl px-5 py-4 rounded-2xl min-w-[140px]">
              <p className="text-xs uppercase tracking-wider text-blue-100">
                Flights
              </p>

              <h3 className="text-3xl font-black mt-1">
                {flights.length}
              </h3>
            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-xl px-5 py-4 rounded-2xl min-w-[140px]">
              <p className="text-xs uppercase tracking-wider text-blue-100">
                Status
              </p>

              <h3 className="text-2xl font-black mt-2">
                Active
              </h3>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}