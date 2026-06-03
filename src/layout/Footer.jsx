import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
export default function Footer() {

  const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            await axios.post("http://127.0.0.1:8000/api/subscribe", { email });
            
            setStatus({ 
                type: 'success', 
                message: 'Thank you for your subscription!' 
            });
            setEmail("");
        } catch (error) {
            setStatus({ 
                type: 'error', 
                message: "You are already suscribed!"
            });
        } finally {
            setLoading(false);
        }
    };

    return (
      <footer className="bg-blue-950 text-white pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Travel Agency</h2>
            <p className="text-blue-100 leading-relaxed max-w-md">It’s not about the trip, it’s about the experience. We love traveling around the world with you.</p>
          </div>

          <div className="md:justify-self-end w-full max-w-md">
            <h3 className="font-semibold text-lg mb-4">Subscribe to our newsletter</h3>
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-md w-full">
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your@email.com" className="flex-1 px-4 py-2 text-gray-700 outline-none w-full" />
              <button type="submit" disabled={loading} className={`${loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-800'} text-white px-5 py-2 mt-2 md:mt-0 md:ml-2 font-medium transition w-full md:w-auto flex items-center justify-center`}>{loading ? (<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>) : ('Subscribe')}</button>
            </form>
            <p className={`mt-3 text-sm font-medium ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>{status.message}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-blue-800 text-center text-blue-200 text-sm"></div>
          <div className="max-w-7xl mx-auto mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4 tracking-wide">Quick links</h3>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li><Link to="/AboutUs" className="hover:text-white transition">About Us</Link></li>
                <li><Link to="/destinations" className="hover:text-white transition">Destinations</Link></li>
                <li><Link to="/Tours" className="hover:text-white transition">Tours</Link></li>
                <li><Link to="/ContactUs" className="hover:text-white transition">Contact Us</Link></li>
              </ul>
            </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">Customer support</h3>
          <ul className="space-y-2 text-blue-100 text-sm">
            <li><Link to="/FrequentAskedQuestions" className="hover:text-white transition">FAQs</Link></li>
            <li><Link to="/PaymentOptions" className="hover:text-white transition">Payment options</Link></li>
            <li><Link to="/FullRatings" className="hover:text-white transition">Ratings</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">Resources</h3>
          <ul className="space-y-2 text-blue-100 text-sm">
            <li><Link to="/TravelTips" className="hover:text-white transition">Tips to have a better travel</Link></li>
            <li><Link to="/PrivacyPolicy" className="hover:text-white transition">Privacy policy</Link></li>
          </ul>
        </div>
      
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">Contact Us</h3>
          <ul className="space-y-2 text-blue-100 text-sm mb-6">
            <li>Madrid, Spain</li>
            <li>+34 663 88 40 81</li>
            <li>info@travelagency.es</li>
          </ul>

        <p className="text-sm font-medium mb-3">Follow us</p>

            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" className="text-blue-200 hover:text-white transition"><span className="sr-only">Facebook</span><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></a>
              <a href="https://www.instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition"><span className="sr-only">Instagram</span><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 7.235a4.765 4.765 0 100 9.53 4.765 4.765 0 000-9.53zm0 7.728a2.963 2.963 0 110-5.926 2.963 2.963 0 010 5.926zm5.334-8.139a1.144 1.144 0 11-2.288 0 1.144 1.144 0 012.288 0z" clipRule="evenodd" /></svg></a>
              <a href="https://www.tiktok.com/@tu_usuario" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition"><span className="sr-only">TikTok</span><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31 0 2.591.21 3.793.627v4.523a5.056 5.056 0 01-2.46-.632v9.522a5.5 5.5 0 11-4-5.322v4.302a1.497 1.497 0 101.497 1.497V0z" /></svg></a>
              <a href="https://www.youtube.com/@tu_canal" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition"><span className="sr-only">YouTube</span><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></a>
            </div>
          </div>
        </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-blue-800 text-center text-blue-200 text-sm">© 2026 Travel Agency. All rights reserved.</div>
      <div className="hidden mx-auto text-center text-blue-200 text-sm">Made by Iván Díaz Rodríguez</div>
    </footer>
  )
}