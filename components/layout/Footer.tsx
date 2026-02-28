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
    <footer className="bg-[url('/Footer-bg.svg')] bg-cover bg-center text-white py-20">
      <Container>
        <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">

          {/* Logo & About */}
          <div className="space-y-6">
            <Image
              src="/logo.svg"
              width={140}
              height={40}
              alt="logo"
            />

            <p className="text-gray-300 leading-relaxed">
              The proper Footer on proper time can preserve you protection.
              We assist you make sure everybody forward.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <Icon
                  key={index}
                  size={40}
                  strokeWidth={2}
                  className="bg-white text-yellow-500 rounded-full p-3 
                  hover:bg-yellow-500 hover:text-white 
                  transition duration-300 cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Link</h3>
            <div className="w-8 h-1 bg-yellow-400 mb-6"></div>

            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Product"].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition cursor-pointer"
                >
                  <ChevronRight size={16} className="text-yellow-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Blog</h3>
            <div className="w-8 h-1 bg-yellow-400 mb-6"></div>

            <div className="space-y-5">
              {[1, 2].map((_, index) => (
                <div key={index} className="flex gap-2">
                  <ChevronRight size={16} className="text-yellow-400 mt-1" />
                  <div>
                    <p className="text-gray-300 hover:text-yellow-400 cursor-pointer transition">
                      People Saying About Footer.
                    </p>
                    <span className="text-sm text-gray-400">
                      8 Nov, 2021
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <div className="w-8 h-1 bg-yellow-400 mb-6"></div>

            <div className="space-y-5 text-gray-300">
              <div className="flex gap-3">
                <MapPin size={18} className="text-yellow-400 mt-1" />
                <p>44 Danwers, NY City, USA, 70-102</p>
              </div>

              <div className="flex gap-3">
                <Mail size={18} className="text-yellow-400" />
                <p>Lamaro@lamaroyc.us</p>
              </div>

              <div className="flex gap-3">
                <Phone size={18} className="text-yellow-400" />
                <p>91+585-656-658</p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
}