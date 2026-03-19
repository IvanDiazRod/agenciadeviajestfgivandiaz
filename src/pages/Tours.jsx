import { useSearchParams } from "react-router-dom";

export default function Tours() {
  const [searchParams] = useSearchParams();

  const destination = searchParams.get("destination");
  const type = searchParams.get("type");
  const duration = searchParams.get("duration");

  return (
    <main className="w-full px-6 py-12">

      {/* HEADER */}
      <section className="max-w-6xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Available Tours
        </h1>

        <p className="text-gray-600 text-lg">
          Showing results for:
        </p>

        <div className="flex flex-wrap gap-3 mt-4">
          {destination && (
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              Destination: {destination}
            </span>
          )}

          {type && (
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
              Type: {type}
            </span>
          )}

          {duration && (
            <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">
              Duration: {duration}
            </span>
          )}
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {/* CARD EJEMPLO */}
        {[1, 2, 3, 4, 5, 6, 7].map((_, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col gap-4"
          >
            <figure className="w-full h-48 overflow-hidden rounded-xl">
              <img
                src="https://source.unsplash.com/random/400x300?travel"
                alt="Tour"
                className="w-full h-full object-cover"
              />
            </figure>

            <h3 className="text-xl font-semibold">
              Amazing Tour #{idx + 1}
            </h3>

            <p className="text-gray-600 text-sm">
              Discover incredible places and live unforgettable experiences.
            </p>

            <div className="flex justify-between items-center mt-auto">
              <span className="text-blue-700 font-bold text-lg">
                €999
              </span>

              <button className="bg-blue-700 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition">
                View
              </button>
            </div>
          </div>
        ))}

      </section>

    </main>
  );
}