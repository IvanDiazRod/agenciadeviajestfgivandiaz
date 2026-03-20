import { useContext, useState, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { User, MapPin, Calendar, Camera, Package, Settings, LogOut } from "lucide-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function UserProfile() {
  const { user, logout, login } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("profile");

  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("photo", file);

    try {
      setUploading(true);
      const token = localStorage.getItem("token");
      
      const response = await axios.post(
        "http://127.0.0.1:8000/api/user/photo",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      login(response.data.user, token);
      alert("Photo updated!");

    } catch (error) {
      console.error("Error uploading photo", error);
      alert("Failed to upload photo.");
    } finally {
      setUploading(false);
    }
  };

  if (!user) return <div className="p-10 text-center">Loading user data...</div>;

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col md:flex-row max-w-4xl animate-[fadeIn_.4s_ease]">
      <aside className="w-full md:w-64 bg-white shadow-md md:min-h-screen p-6">
        <div className="flex flex-col items-center mb-8">
<div className="relative group">
  <img 
    src={`${user.profile_photo_url}${user.profile_photo_url.includes('?') ? '&' : '?' }t=${new Date().getTime()}`} 
    alt="Profile" 
    className={`w-24 h-24 rounded-full object-cover border-4 border-blue-100 shadow-sm transition ${
      uploading ? "opacity-50" : ""
    }`}
  />

  {/* Overlay hover */}
  <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
    <Camera className="text-white" size={20} />
  </div>

  <button
    onClick={() => fileInputRef.current.click()}
    className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 shadow-lg"
  >
    <Camera size={16} />
  </button>
    <input
    type="file"
    ref={fileInputRef}
    onChange={handleFileChange}
    className="hidden"
    accept="image/*"
  />
</div>
          <h2 className="mt-4 font-bold text-gray-800 text-xl">{user.firstname} {user.surname}</h2>
          <p className="text-gray-500 text-sm">{user.email}</p>
        </div>

<nav className="space-y-2">

  {[
    { key: "profile", label: "Personal Info", icon: User },
    { key: "tours", label: "My Tours", icon: Package },
  ].map((item) => {
    const Icon = item.icon;

    return (
      <button
        key={item.key}
        onClick={() => setActiveTab(item.key)}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
          activeTab === item.key
            ? "bg-blue-600 text-white shadow-lg scale-[1.02]"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <Icon size={20} />
        {item.label}
      </button>
    );
  })}

  <hr className="my-4 border-gray-200" />

  <button
    onClick={logout}
    className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition"
  >
    <LogOut size={20} /> Logout
  </button>

</nav>
      </aside>

      <main className="flex-1 p-6 md:p-12">
        
        {activeTab === "profile" && (
          <section className="max-w-4xl animate-fadeIn">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Personal Information</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-gray-100">
              <InfoItem label="First Name" value={user.firstname} />
              <InfoItem label="Surnames" value={`${user.surname} ${user.secondsurname || ''}`} />
              <InfoItem label="Email" value={user.email} />
              <InfoItem label="Date of Birth" value={user.dateofbirth} />
              <InfoItem label="Gender" value={user.gender} />
              <div className="md:col-span-2 mt-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Edit Profile
                </button>
              </div>
            </div>
          </section>
        )}

        {activeTab === "tours" && (
          <section className="max-w-4xl animate-fadeIn">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">My Booked Tours</h1>
            {/* Aquí mapearemos los tours en el futuro */}
            <div className="bg-blue-50 border-2 border-dashed border-blue-200 p-12 rounded-2xl text-center">
              <Package className="mx-auto text-blue-300 mb-4" size={48} />
              <p className="text-blue-600 font-medium">You haven't booked any tours yet.</p>
              <Link to="/Tours" className="mt-4 text-blue-700 underline font-semibold">Explore destinations</Link>
            </div>
          </section>
        )}

      </main>
    </section>
  );
}

// Componente pequeño para las filas de información
function InfoItem({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">{label}</span>
      <span className="text-lg text-gray-700">{value || "Not specified"}</span>
    </div>
  );
}