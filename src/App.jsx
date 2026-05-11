import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Login from "./pages/login";
import Register from "./pages/Register";
import Destination from "./pages/destination";
import DestinationDetail from "./pages/DestinationDetails";
import Tours from "./pages/Tours";
import UserProfile from "./pages/UserProfile";
import TourDetail from "./pages/TourDetail";
import GroupsPage from "./pages/GroupsPage";
import CityGroups from "./pages/CityGroups";
import ScrollToTop from "./layout/ScrollToTop";
import CountryGroups from "./pages/CountryGroups";
import TourGroupDetail from "./pages/TourGroupDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FrequentAskedQuestions from "./pages/FrequentAskedQuestions";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PaymentOptions from "./pages/PaymentOptions";
import axios from 'axios';

axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
        <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/FrequentAskedQuestions" element={<FrequentAskedQuestions />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/PaymentOptions" element={<PaymentOptions />} />
              <Route path="/destinations" element={<Destination />} />
              <Route path="/destinations/:slug" element={<DestinationDetail />} />
              <Route path="/Tours" element={<Tours />} />
              <Route path="/tours/:id" element={<TourDetail />} />
              <Route path="/UserProfile" element={<UserProfile />} />
              <Route path="/groups" element={<GroupsPage />} />
              <Route path="/groups/:countrySlug" element={<CountryGroups />} />
              <Route path="/groups/:countrySlug/:citySlug" element={<CityGroups />} />
              <Route path="/groups/:countrySlug/:citySlug/:tourSlug" element={<TourGroupDetail />} />
            </Routes>
          </main>
        <Footer />
    </BrowserRouter>
  );
}

export default App;