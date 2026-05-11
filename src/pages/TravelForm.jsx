import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TravelForm() {
  const navigate = useNavigate();

  const destinationOptions = [{label: "Italy",options: ["Rome"]}, {label: "France",options: ["Paris"]}, {label: "Japan",options: ["Tokyo"]}];
  const tripTypes = ["Adventure", "Relax", "Cultural", "Family"];
  const durations = ["1 week", "2 weeks", "3 weeks", "1 month"];

  const [destination, setDestination] = useState("");
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (destination) {
      navigate(`/destinations/${destination}`);
    }
  };

  return (
    <section className="w-full flex items-center justify-center px-4 sm:px-6 md:px-8 -mt-6 relative z-20">
      <div className="w-full max-w-5xl">
        <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-4 md:p-6 shadow-2xl shadow-gray-300 rounded-2xl">
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1">Destination</label>
            <select className="w-full p-3 md:p-4 border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 rounded-xl outline-none transition bg-white" value={destination} onChange={(e) => setDestination(e.target.value)} required>
              <option value="" disabled>Select destination</option>
              {destinationOptions.map((group, groupIdx) => (
              <optgroup key={groupIdx} label={group.label} className="font-bold text-gray-700">
                {group.options.map((option, optIdx) => (<option key={optIdx} value={option.toLowerCase()}>{option}</option> ))}
              </optgroup>))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1">Trip type</label>
            <select className="w-full p-3 md:p-4 border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 rounded-xl outline-none transition" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="" disabled>Select type</option>
              {tripTypes.map((t, idx) => (<option key={idx} value={t.toLowerCase()}>{t}</option>))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1">Duration</label>
            <select className="w-full p-3 md:p-4 border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 rounded-xl outline-none transition" value={duration} onChange={(e) => setDuration(e.target.value)}>
              <option value="" disabled>Select duration</option>
              {durations.map((d, idx) => (<option key={idx} value={d.toLowerCase()}>{d}</option>))}
            </select>
          </div>

          <div className="flex items-end">
            <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium p-3 md:p-4 rounded-xl transition-all hover:scale-[1.02]">Search</button>
          </div>
        </form>
      </div>
    </section>
  );
}