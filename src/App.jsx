import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Login from "./pages/login";
import Register from "./pages/register";
import Destination from "./pages/destination";
import DestinationDetail from "./pages/DestinationDetails";
import Tours from "./pages/Tours";
import UserProfile from "./pages/UserProfile";
import TourDetail from "./pages/TourDetail";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />      
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destinations/:slug" element={<DestinationDetail />} />
        <Route path="/Tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetail />} />
        <Route path="UserProfile" element={<UserProfile />} />
      </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;