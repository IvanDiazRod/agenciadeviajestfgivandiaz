import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Login from "./pages/login";
import Register from "./pages/register";
import Destination from "./pages/destination";
import Tours from "./pages/Tours";

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
        <Route path="/Tours" element={<Tours />} />
      </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;