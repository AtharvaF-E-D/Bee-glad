import Image from "next/image";
import Container from "./Container";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ChevronRight,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[url('/Footer-bg.svg')] bg-cover bg-center text-white py-12 md:py-20 px-4">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 max-w-7xl mx-auto">

          {/* Logo & About */}
          <div className="space-y-5">
            <Image
              src="/logo.svg"
              width={120}
              height={40}
              alt="logo"
              className="w-28 sm:w-32 md:w-[140px]"
            />

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              The proper Footer on proper time can preserve you protection.
              We assist you make sure everybody forward.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <Icon
                  key={index}
                  size={24}
                  strokeWidth={2}
                  className="sm:size-10 md:size-10 bg-white text-yellow-500 rounded-full sm:p-2.5 md:p-3 
                  hover:bg-yellow-500 hover:text-white 
                  transition duration-300 cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Quick Link
            </h3>
            <div className="w-6 sm:w-8 h-1 bg-yellow-400 mb-4 sm:mb-6"></div>

            <ul className="space-y-3 sm:space-y-4">
              {["Home", "About Us", "Services", "Product"].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-gray-300 text-sm sm:text-base hover:text-yellow-400 transition cursor-pointer"
                >
                  <ChevronRight size={14} className="text-yellow-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Blog
            </h3>
            <div className="w-6 sm:w-8 h-1 bg-yellow-400 mb-4 sm:mb-6"></div>

            <div className="space-y-4 sm:space-y-5">
              {[1, 2].map((_, index) => (
                <div key={index} className="flex gap-2">
                  <ChevronRight size={14} className="text-yellow-400 mt-1" />
                  <div>
                    <p className="text-gray-300 text-sm sm:text-base hover:text-yellow-400 cursor-pointer transition">
                      People Saying About Footer.
                    </p>
                    <span className="text-xs sm:text-sm text-gray-400">
                      8 Nov, 2021
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Contact
            </h3>
            <div className="w-6 sm:w-8 h-1 bg-yellow-400 mb-4 sm:mb-6"></div>

            <div className="space-y-4 sm:space-y-5 text-gray-300 text-sm sm:text-base">
              <div className="flex gap-3">
                <MapPin size={16} className="text-yellow-400 mt-1" />
                <p>44 Danwers, NY City, USA, 70-102</p>
              </div>

              <div className="flex gap-3">
                <Mail size={16} className="text-yellow-400" />
                <p className="break-all">Lamaro@lamaroyc.us</p>
              </div>

              <div className="flex gap-3">
                <Phone size={16} className="text-yellow-400" />
                <p>91+585-656-658</p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
}