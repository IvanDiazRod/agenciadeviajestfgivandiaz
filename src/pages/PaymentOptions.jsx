import {CreditCard, ShieldCheck, Lock, CheckCircle2, Wallet, Landmark, ArrowRight, BadgeCheck} from "lucide-react";
import { Link } from "react-router-dom";

export default function PaymentOptions() {

  const paymentMethods = [
    {
      name: "Visa",
      description: "Fast and secure international payments.",
      status: "Popular",
      icon: CreditCard,
    },
    {
      name: "Mastercard",
      description: "Accepted worldwide with instant processing.",
      status: "Secure",
      icon: CreditCard,
    },
    {
      name: "PayPal",
      description: "Pay online safely with your PayPal account.",
      status: "Trusted",
      icon: Wallet,
    },
    {
      name: "Apple Pay",
      description: "Quick checkout for Apple users.",
      status: "Instant",
      icon: Wallet,
    },
    {
      name: "Google Pay",
      description: "Simple and modern mobile payments.",
      status: "Fast",
      icon: Wallet,
    },
    {
      name: "Bank Transfer",
      description: "Traditional payment for larger reservations.",
      status: "International",
      icon: Landmark,
    },
  ];

  const securityFeatures = [
    {
      icon: ShieldCheck,
      title: "256-bit SSL Encryption",
      description: "Your payment data is encrypted and protected at all times.",
    },
    {
      icon: Lock,
      title: "Protected Checkout",
      description: "Secure booking systems designed for safe transactions.",
    },
    {
      icon: CheckCircle2,
      title: "Verified Payments",
      description: "Every transaction is validated and monitored securely.",
    },
  ];

  const paymentSteps = [
    "Choose your destination",
    "Select your payment method",
    "Confirm your reservation",
    "Receive your tickets instantly",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white">
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-blue-600/10 blur-3xl rounded-full"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-6">
            <ShieldCheck size={16} className="text-cyan-400" />
            <span className="text-sm text-slate-300">Secure Payment System</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">Flexible payment options for{" "} <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">every traveler</span></h1>
          <p className="mt-6 text-slate-300 text-lg md:text-xl leading-relaxed">Enjoy secure, fast and flexible payment methods designed to make your booking experience simple and reliable.</p>
        </div>

        <div className="mt-24">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black">Payment Methods</h2>
              <p className="text-slate-400 mt-2">Choose the payment option that works best for you.</p>
            </div>

            <div className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-medium">Trusted Worldwide</div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

            {paymentMethods.map((method, index) => {

              const Icon = method.icon;

              return (
                <div key={index} className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] p-7 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">

                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"><Icon className="text-cyan-400" size={28} /></div>
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-cyan-300 font-medium">{method.status}</div>
                  </div>

                  <h3 className="text-2xl font-bold mt-6">{method.name}</h3>
                  <p className="text-slate-400 mt-3 leading-relaxed">{method.description}</p>

                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-28">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-400/20 text-green-300 text-sm font-medium mb-6"><BadgeCheck size={16} />Payment Protection</div>
            <h2 className="text-4xl md:text-5xl font-black">Built with security first</h2>
            <p className="text-slate-400 mt-5 text-lg">Every booking is protected using modern encryption and secure payment technologies.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {securityFeatures.map((feature, index) => {

              const Icon = feature.icon;

              return (
                <div key={index} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl hover:bg-white/10 transition-all duration-500">

                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-400/20 flex items-center justify-center mb-6">
                    <Icon className="text-green-400" size={30} />
                  </div>

                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-slate-400 mt-4 leading-relaxed">{feature.description}</p>

                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-28">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-white/10 rounded-[2.5rem] p-10 md:p-14 backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-medium mb-6">Flexible Booking Experience</div>
                <h2 className="text-4xl md:text-5xl font-black leading-tight">Pay your trip your way</h2>
                <p className="text-slate-300 mt-6 text-lg leading-relaxed">Choose flexible payment options designed for solo travelers, groups and international bookings.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {["Full Payment", "Partial Reservation", "Installments", "Group Payments",].map((item, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">

                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                      <CheckCircle2 className="text-cyan-400" size={24} />
                    </div>

                    <h3 className="text-xl font-bold">{item}</h3>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-28">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black">Simple payment process</h2>
            <p className="text-slate-400 mt-5 text-lg">Complete your booking in just a few easy steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {paymentSteps.map((step, index) => (
              <div key={index} className="relative bg-white/5 border border-white/10 rounded-[2rem] p-8 text-center backdrop-blur-xl hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-xl shadow-cyan-500/20">{index + 1}</div>
                <h3 className="text-xl font-bold leading-relaxed">{step}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              value: "50K+",
              label: "Secure Transactions",
            },
            {
              value: "99.9%",
              label: "Payment Success Rate",
            },
            {
              value: "24/7",
              label: "Fraud Monitoring",
            },
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-[2rem] p-10 text-center backdrop-blur-xl">
              <h3 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{stat.value}</h3>
              <p className="text-slate-400 mt-4 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center">

          <h2 className="text-4xl md:text-6xl font-black leading-tight max-w-4xl mx-auto">Ready to book your next adventure?</h2>
          <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto">Discover incredible destinations and enjoy a secure booking experience with Travel Agency.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
            <Link to="/Tours" className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-xl shadow-cyan-500/20">Explore Tours</Link>
            <Link to="/destination" className="group border border-white/10 bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-3">Book Flights <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}