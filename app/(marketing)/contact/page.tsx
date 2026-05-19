/* eslint-disable @next/next/no-img-element */
import { Rocket } from "lucide-react";
import React from "react";

const contactCards = [
  {
    icon: "/contact/contact.png",
    title: "Customer Care Phone",
    desc: "Solutions that grow with your business",
    highlight: "+91 70201 30253",
    sub: "Mon-Sat: 9:30 AM - 6:30 PM",
  },
  {
    icon: "/contact/mail.png",
    title: "Email Support",
    desc: "Write to us anytime",
    highlight: "+91 70201 30253",
    sub: "Write to us anytime",
  },
  {
    icon: "/contact/location.png",
    title: "Head Office",
    desc: "Find us at our headquarters",
    highlight: "+91 70201 30253",
    sub: "Write to us anytime",
  },
];

const page = () => {
  return (
    <div className="bg-black text-white py-15">
      <div
        style={{
          background: "url(/contact/getintouch.jpg)",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundPositionY: "32%",
        }}
        className="h-77.25 w-7xl mx-auto flex items-center rounded-4xl pb-10"
      >
        <h1 className="text-5xl font-[350] text-center w-full">Get In Touch</h1>
      </div>
      <div className="bg-black min-h-screen flex items-center justify-center my-15">
        <div className="max-w-6xl w-full bg-[#0b0b0b] rounded-3xl p-10 px-7 flex gap-10 shadow-xl">
          {/* LEFT SIDE */}
          <div className="flex-1 text-white p-6">
            <h2 className="text-3xl font-light mb-2">
              Let’s connect constellations
            </h2>

            <p className="text-gray-400 text-sm mb-8">
              Let’s align our constellations! Reach out and let the magic of
              collaboration illuminate our skies.
            </p>

            {/* FORM */}
            <form className="space-y-4">
              {/* NAME ROW */}
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="flex-1 bg-transparent border border-gray-700 rounded-lg px-4 py-3 focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="First Name"
                  className="flex-1 bg-transparent border border-gray-700 rounded-lg px-4 py-3 focus:outline-none"
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 focus:outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 focus:outline-none"
              />

              <textarea
                rows={4}
                placeholder="Message"
                className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 focus:outline-none"
              ></textarea>

              {/* BUTTON */}
              <button className="w-full bg-yellow-400 text-[18px] text-black py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-yellow-300 transition">
                Send it to Bee-Glad
                <span>
                  <Rocket className="rotate-45 text-white ml-4" fill="white" strokeWidth={0.5} />
                </span>
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div
            style={{
              background: "url(/contact/Contact-bee.jpg)",
              backgroundSize: "148%",
              backgroundPositionX: "50%",
            }}
            className="flex-1 rounded-2xl relative"
          >
            <div className="text-gray-300  absolute bottom-5 p-5">
              <p>
                “Two lunar months revealed Earth’s fragile beauty against vast
                silence, transforming my view of our place in the universe.”
              </p>

              <p className="mt-2 text-white font-medium">Irinel Traista</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-16 pb-60 flex justify-center">
        <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-6">
          {contactCards.map((card, index) => {
            return (
              <div
                key={index}
                className="bg-[#7E827F24] flex justify-center items-center p-3 rounded-md"
              >
                <div className="bg-[#7E827F24] p-6 rounded-md w-full flex flex-col items-center">
                  {/* ICON */}
                  <div className="flex justify-center mb-6">
                    <img src={card.icon} alt="" className="w-15" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-white text-lg mb-2">{card.title}</h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-400 text-sm mb-3">{card.desc}</p>

                  {/* HIGHLIGHT TEXT */}
                  <p className="text-yellow-400 font-medium mb-2">
                    {card.highlight}
                  </p>

                  {/* SUBTEXT */}
                  <p className="text-gray-500 text-sm">{card.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
