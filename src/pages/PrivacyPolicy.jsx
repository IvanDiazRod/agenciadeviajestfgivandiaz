import React from "react";
import { Link } from "react-router-dom";

import {ShieldCheck, Lock, FileText, Cookie, Globe, ArrowLeft, Mail} from "lucide-react";

export default function PrivacyPolicy() {

  const sections = [
    {
      id: "privacy",
      title: "Privacy Policy",
      icon: ShieldCheck,
    },
    {
      id: "terms",
      title: "Terms & Conditions",
      icon: FileText,
    },
    {
      id: "cookies",
      title: "Cookies",
      icon: Cookie,
    },
    {
      id: "security",
      title: "Security",
      icon: Lock,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 py-24 px-6">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-blue-100 text-sm mb-8">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Legal</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm mb-6"><ShieldCheck size={16} />GDPR</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">Privacy & Terms</h1>
            <p className="mt-6 text-blue-100 text-lg leading-8">Your privacy, security and digital experience are important to us. Learn how Travel Agency manages data and protects users across the platform.</p>
            <p className="mt-6 text-sm text-blue-200">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-72 shrink-0">
            <div className="sticky top-28">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-6">Legal Sections</h3>

                <div className="space-y-3">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <a key={section.id} href={`#${section.id}`} className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-blue-50 transition group">
                        <Icon size={18} className="text-blue-600" />
                        <span className="text-gray-700 group-hover:text-blue-700 font-medium">{section.title}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>
          <div className="flex-1 space-y-8">
            <div id="privacy" className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600"><ShieldCheck size={28} /></div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Privacy Policy</h2>
                  <p className="text-gray-500 mt-1">How we collect and use information</p>
                </div>
              </div>

              <div className="space-y-6 text-gray-600 leading-8">
                <p>Travel Agency collects basic personal information such as name, email address and reservation details exclusively for educational and demonstration purposes.</p>
                <p>User data is used to simulate bookings, manage accounts, improve platform functionality and provide a realistic travel application experience.</p>
                <p>We do not sell, distribute or share personal information with third parties.</p>
              </div>

            </div>

            <div id="terms" className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700"><FileText size={28} /></div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Terms & Conditions</h2>
                  <p className="text-gray-500 mt-1">Platform usage conditions</p>
                </div>
              </div>

              <div className="space-y-6 text-gray-600 leading-8">
                <p>Travel Agency is my academic project developed as part of a web application portfolio and educational learning experience.</p>
                <p>All reservations, flights and transactions shown on the platform are simulated and do not represent real purchases.</p>
                <p>Users should avoid entering sensitive real-world banking information or confidential credentials.</p>
              </div>

            </div>

            <div id="cookies" className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">

                <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600"><Cookie size={28} /></div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Cookies & Analytics</h2>
                  <p className="text-gray-500 mt-1">Improving user experience</p>
                </div>
              </div>

              <div className="space-y-6 text-gray-600 leading-8">
                <p>Travel Agency may use cookies or local storage technologies to maintain sessions, remember preferences and improve application usability.</p>
                <p>These technologies are only used for educational and development purposes.</p>
              </div>

            </div>

            <div id="security" className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-600"><Lock size={28} /></div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Security & Data Protection</h2>
                  <p className="text-gray-500 mt-1">Protecting user information</p>
                </div>
              </div>

              <div className="space-y-6 text-gray-600 leading-8">
                <p>User passwords are encrypted using modern hashing techniques and authentication systems.</p>
                <p>We continuously aim to follow secure development practices and modern web security standards.</p>
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                  <div className="flex items-start gap-4"><Globe className="text-blue-600 mt-1" size={22} />
                    <div>
                      <h4 className="font-bold text-blue-800">Academic Disclaimer</h4>
                      <p className="text-blue-700 text-sm mt-2 leading-7">This platform is part of an academic Final Degree Project (PFG). No commercial services are provided and no real travel reservations are processed.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-500 p-10 text-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <h2 className="text-3xl font-bold">Questions about privacy?</h2>
                <p className="mt-4 text-blue-100 max-w-2xl leading-8">If you have questions regarding data handling, platform usage or legal information, feel free to contact the Travel Agency team.</p>
                <button className="mt-8 bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-2xl font-semibold transition inline-flex items-center gap-2 shadow-lg"><Mail size={18} /> Contact Support</button>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <button onClick={() => window.history.back()} className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-blue-200 hover:bg-blue-50 text-blue-600 px-6 py-3 rounded-2xl shadow-sm transition"><ArrowLeft size={18} /> Back to platform</button>
            </div>

            <div className="text-center text-sm text-gray-400 pb-8">© 2026 Travel Agency — Academic Travel Platform</div>

          </div>
        </div>
      </div>
    </section>
  );
}