import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function DestinationDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [travelDate, setTravelDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [peopleCount, setPeopleCount] = useState(1);
  const [bookingLoading, setBookingLoading] = useState(false);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/destinations/${slug}`);
        setDestination(response.data);
      } catch (error) {
        console.error("Error fetching destination", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDestination();
  }, [slug]);

  const handleBooking = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    if (!travelDate) {
      alert("Please select a departure date.");
      return;
    }
    if (isRoundTrip && !returnDate) {
      alert("Please select a return date for your round trip.");
      return;
    }

    try {
      setBookingLoading(true);
      const response = await axios.post("http://127.0.0.1:8000/api/flight-bookings", {destination_id: destination.id, departure_date: travelDate, return_date: isRoundTrip ? returnDate : null, price: destination.price * peopleCount, passengers: peopleCount}, {headers: { Authorization: `Bearer ${token}`, Accept: "application/json" }});
      navigate("/UserProfile");
    } catch (error) {
      console.error("Booking error:", error);
      alert("Something went wrong with your booking. Please try again.");
    } finally {
      setBookingLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="relative mb-4">
          <div className="w-12 h-12 border-4 border-blue-200 rounded-full"></div>
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
        </div>
        <p className="text-blue-600 font-medium animate-pulse">Fetching destination details...</p>
      </div>
    );
  }

  if (!destination) return <div className="p-10 text-center">Destination not found</div>;

  const gallery = destination.images || [];

  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="min-h-screen bg-gray-50 p-6 md:p-12">
      <button onClick={() => navigate(-1)} className="mb-6 text-blue-600 hover:underline font-medium">Go Back</button>
      <div className="mb-8"><img src={destination.src} alt={destination.name} className="w-full h-[300px] md:h-[500px] object-cover rounded-3xl shadow-2xl" /></div>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">{destination.name}, {destination.country}</h1>
        <p className="text-gray-600 text-lg mb-10 leading-relaxed">{destination.description}</p>
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 mb-12">
          <div className="flex gap-4 mb-6">
            <button onClick={() => setIsRoundTrip(false)} className={`px-4 py-2 rounded-full text-xs font-bold transition ${!isRoundTrip ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>One Way</button>
            <button onClick={() => setIsRoundTrip(true)} className={`px-4 py-2 rounded-full text-xs font-bold transition ${isRoundTrip ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>Round Trip</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
      
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase text-gray-400 ml-1">Departure Date</label>
              <input type="date" min={today} className="p-3 border border-gray-200 rounded-xl focus:ring-2 ring-blue-500 outline-none transition" value={travelDate} onChange={(e) => setTravelDate(e.target.value)} />
            </div>

            <div className={`flex flex-col gap-2 transition-all ${isRoundTrip ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
              <label className="text-xs font-bold uppercase text-gray-400 ml-1">Return Date</label>
              <input type="date" disabled={!isRoundTrip} className="p-3 border border-gray-200 rounded-xl focus:ring-2 ring-blue-500 outline-none transition" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} min={travelDate} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase text-gray-400 ml-1">Passengers</label>
              <input type="number" min={1} max={60} value={peopleCount} className="p-3 border border-gray-200 rounded-xl focus:ring-2 ring-blue-500 outline-none transition" onChange={(e) => setPeopleCount(Number(e.target.value))} />
            </div>

            <div className="flex flex-col">
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Price Total</p>
              <p className="text-3xl font-black text-blue-700 mb-2">€{(destination.price * peopleCount * (isRoundTrip ? 1.8 : 1)).toLocaleString()}</p>
              <button onClick={handleBooking} disabled={bookingLoading} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-blue-200 flex items-center justify-center gap-2">{bookingLoading ? "Processing..." : "Confirm Booking"}</button>
            </div>
          </div>
        </div>

        {gallery.length > 0 && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore the place</h2>
            <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide">
              {gallery.map((img, i) => (
                <img key={i} src={img} className="w-64 h-44 object-cover rounded-2xl shadow-md hover:scale-105 transition duration-300" alt="Gallery" />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}