/* eslint-disable @next/next/no-img-element */
import React from "react";

const PortfolioFeatured = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="bg-[#2F2F2F] py-20">
        <div className="max-w-7xl mx-auto">
          {/* Top Heading */}
          <div className="mb-16">
            <p className="text-gray-300 font-light text-[44px] mb-4">
              Portfolio Highlights
            </p>

            <h1 className="text-7xl md:text-[180px] font-light leading-[1.1] tracking-wide w-full">
              FEATURED
            </h1>
            <h1 className="text-6xl md:text-[180px] text-end font-light leading-[1.1] tracking-wide w-full">
              PROJECTS
            </h1>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start py-20">
            {/* Left Side */}
            <div>
              <img
                src="/company-logo/Boligmatch.svg"
                alt=""
                className="w-[308.76px]"
              />

              <p className="text-gray-300 text-2xl font-light mb-4 max-w-lg">
                Boligmatch.dk set out to simplify how homeowners find trusted
                skilled professionals such as electricians, plumbers,
                carpenters, and other service providers.
              </p>

              <p className="text-gray-300 text-2xl font-light mb-4 max-w-lg">
                Bee Glad partnered on building a centralized digital platform
                that connects homeowners with verified suppliers based on
                location and skillset, eliminating the need for manual, offline
                searching.
              </p>
            </div>

            {/* Right Side */}
            <div className="space-y-6">
              {/* Item */}
              <div className="flex items-center justify-between border-b-2 border-white/10 pb-5">
                <div className="flex items-center gap-2  text-gray-300 text-xl">
                  <span className="w-2 h-2 bg-yellow-400 rotate-45 inline-block"></span>
                  Industry :
                </div>
                <div className="flex gap-2">
                  <span className="bg-white text-black text-xl px-3 py-1">
                    Real Estate
                  </span>
                  <span className="bg-white text-black text-xl px-3 py-1">
                    Home Services
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between border-b-2 border-white/10 pb-4">
                <div className="flex items-center gap-2 text-xl text-gray-300">
                  <span className="w-2 h-2 bg-yellow-400 rotate-45 inline-block"></span>
                  Platform :
                </div>
                <div className="flex gap-2">
                  <span className="bg-white text-black text-xl px-3 py-1">
                    Web Application
                  </span>
                  <span className="bg-white text-black text-xl px-3 py-1">
                    Mobile App
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between border-b-2 border-white/10 pb-4">
                <div className="flex items-center gap-2 text-xl text-gray-300">
                  <span className="w-2 h-2 bg-yellow-400 rotate-45 inline-block"></span>
                  Region :
                </div>
                <div>
                  <span className="bg-white text-black text-xl px-3 py-1">
                    Denmark
                  </span>
                </div>
              </div>

              {/* Button */}
              <div>
                <button className="bg-yellow-400 text-black text-xl px-5 py-2 rounded-full flex items-center gap-2 hover:bg-yellow-300 transition">
                  View More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mb-10">
        <img src="/resources/bolig-portfolio.png" alt="" className="w-full" />
      </div>
      <div className="bg-[#001225]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-start pt-20">
            {/* Left Side */}
            <div>
              <h1 className="text-4xl py-5">Hobby Hub</h1>

              <p className="text-gray-300 text-2xl font-light mb-4 max-w-lg">
                Hobby Hub is a digital platform designed to simplify how people
                discover, book, and manage hobby and sports activities such as
                football courts, cricket turfs, swimming, dance, skating, and
                other skill-based classes.
              </p>

              <p className="text-gray-300 text-2xl font-light mb-4 max-w-lg">
                Bee Glad worked on creating a centralized booking ecosystem that
                connects users, court owners, and class providers on a single,
                easy-to-use platform.
              </p>

              {/* Right Side */}
              <div className="space-y-6">
                {/* Item */}
                <div className="flex items-center justify-between border-b-2 border-white/10 pb-5">
                  <div className="flex items-center gap-2  text-gray-300 text-xl">
                    <span className="w-2 h-2 bg-yellow-400 rotate-45 inline-block"></span>
                    Industry :
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-white text-black text-xl px-3 py-1">
                      Sports
                    </span>
                    <span className="bg-white text-black text-xl px-3 py-1">
                      Fitness
                    </span>
                    <span className="bg-white text-black text-xl px-3 py-1">
                      Hobbies
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b-2 border-white/10 pb-4">
                  <div className="flex items-center gap-2 text-xl text-gray-300">
                    <span className="w-2 h-2 bg-yellow-400 rotate-45 inline-block"></span>
                    Platform :
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-white text-black text-xl px-3 py-1">
                      Web Application
                    </span>
                    <span className="bg-white text-black text-xl px-3 py-1">
                      Mobile App
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b-2 border-white/10 pb-4">
                  <div className="flex items-center gap-2 text-xl text-gray-300">
                    <span className="w-2 h-2 bg-yellow-400 rotate-45 inline-block"></span>
                    Product Type: :
                  </div>
                  <div>
                    <span className="bg-white text-black text-xl px-3 py-1">
                      Booking & Management Platform
                    </span>
                  </div>
                </div>

                {/* Button */}
                <div>
                  <button className="bg-yellow-400 text-black text-xl px-5 py-2 rounded-full flex items-center gap-2 hover:bg-yellow-300 transition">
                    View More →
                  </button>
                </div>
              </div>
            </div>
            {/*Right Side */}
            <div>
              <img
                src="/resources/hobby-hub-portfolio.png"
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#17314c] mb-10">
        <img src="/resources/hobby-hub-port2.png" alt="" className="w-full" />
      </div>
      <div className="bg-[#2F2F2F]">
        <div className="max-w-360">
          <div className="grid md:grid-cols-2 gap-20 items-center py-20">
            {/* Left Side */}
            <div>
              <img src="/resources/ITA-Port1.png" alt="" className="w-[80%]" />
            </div>
            {/*Right Side */}
            <div>
              <h1 className="text-4xl py-5">
                ITA – Indian Taxpayers Association
              </h1>
              <p className="text-gray-300 text-2xl font-light mb-4 max-w-lg">
                Indian Taxpayers Association (ITA) is a social impact initiative
                focused on supporting underprivileged communities through
                structured programs, awareness campaigns, and humanitarian
                activities.
              </p>

              <p className="text-gray-300 text-2xl font-light mb-4 max-w-lg">
                Bee Glad partnered to design and develop a digital platform that
                strengthens transparency, engagement, and program management for
                social work initiatives.The platform acts as a centralized
                system for connecting contributors, volunteers, and
                beneficiaries.
              </p>

              {/* Right Side */}
              <div className="space-y-6">
                {/* Item */}
                <div className="flex items-center justify-between border-b-2 border-white/10 pb-5">
                  <div className="flex items-center gap-2  text-gray-300 text-xl">
                    <span className="w-2 h-2 bg-yellow-400 rotate-45 inline-block"></span>
                    Industry :
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-white text-black text-xl px-3 py-1">
                      NGO
                    </span>
                    <span className="bg-white text-black text-xl px-3 py-1">
                      Social Impact
                    </span>
                    <span className="bg-white text-black text-xl px-3 py-1">
                      Public Welfare
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b-2 border-white/10 pb-4">
                  <div className="flex items-center gap-2 text-xl text-gray-300">
                    <span className="w-2 h-2 bg-yellow-400 rotate-45 inline-block"></span>
                    Platform :
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-white text-black text-xl px-3 py-1">
                      Web Application
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b-2 border-white/10 pb-4">
                  <div className="flex items-center gap-2 text-xl text-gray-300">
                    <span className="w-2 h-2 bg-yellow-400 rotate-45 inline-block"></span>
                    Product Type: :
                  </div>
                  <div>
                    <span className="bg-white text-black text-xl px-3 py-1">
                      Non-Profit & Social Initiative Management System
                    </span>
                  </div>
                </div>

                {/* Button */}
                <div>
                  <button className="bg-yellow-400 text-black text-xl px-5 py-2 rounded-full flex items-center gap-2 hover:bg-yellow-300 transition">
                    View More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#3e3e83] mb-10">
        <img src="/resources/ITA-Port2.png" alt="" className="w-full" />
      </div>
      ..
      <div className="bg-[#2F2F2F]">
        <div className="max-w-360">
          <div className="grid md:grid-cols-2 gap-20 items-center py-20">
            {/* Left Side */}
            <div>
              <img
                src="/resources/Glossgenic-port1.png"
                alt=""
                className="max-w-3xl"
              />
            </div>
            {/*Right Side */}
            <div>
              <h1 className="text-4xl py-5">Glossonic</h1>
              <p className="text-gray-300 text-2xl font-light mb-4 max-w-lg">
                Glossonic is a digital admin dashboard developed for a car
                modification showroom to streamline operations, bookings,
                service management, customer tracking, and performance
                analytics. Bee Glad designed and developed a centralized admin
                panel that provides real-time visibility into bookings, revenue,
                job cards, inventory, referrals, and customer management. The
                system replaces fragmented manual processes with a structured
                and scalable digital solution.
              </p>


              {/* Right Side */}
              <div className="space-y-6">
                {/* Item */}
                <div className="flex items-center justify-between border-b-2 border-white/10 pb-5">
                  <div className="flex items-center gap-2  text-gray-300 text-xl">
                    <span className="w-2 h-2 bg-yellow-400 rotate-45 inline-block"></span>
                    Industry :
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-white text-black text-xl px-3 py-1">
                      Automotive
                    </span>
                    <span className="bg-white text-black text-xl px-3 py-1">
                      Car Customization
                    </span>
                    <span className="bg-white text-black text-xl px-3 py-1">
                      Workshop Management
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b-2 border-white/10 pb-4">
                  <div className="flex items-center gap-2 text-xl text-gray-300">
                    <span className="w-2 h-2 bg-yellow-400 rotate-45 inline-block"></span>
                    Platform :
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-white text-black text-xl px-3 py-1">
                      Web-Based Admin Panel
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b-2 border-white/10 pb-4">
                  <div className="flex items-center gap-2 text-xl text-gray-300">
                    <span className="w-2 h-2 bg-yellow-400 rotate-45 inline-block"></span>
                    Product Type: :
                  </div>
                  <div>
                    <span className="bg-white text-black text-xl px-3 py-1">
                      Operations & Service Management System
                    </span>
                  </div>
                </div>

                {/* Button */}
                <div>
                  <button className="bg-yellow-400 text-black text-xl px-5 py-2 rounded-full flex items-center gap-2 hover:bg-yellow-300 transition">
                    View More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#3e3e83]">
        <img src="/resources/Glossgenic-port2.png" alt="" className="w-full" />
      </div>
    </section>
  );
};

export default PortfolioFeatured;
