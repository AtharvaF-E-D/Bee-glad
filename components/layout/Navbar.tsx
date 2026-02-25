"use client";

import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/lib/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-[#2c2d2f] text-white">
      <div className="mx-auto px-6 h-19.25 flex items-center justify-between">
        
        {/* Logo */}
        <div className="relative h-10 w-32">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Company Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) =>
            item.type === "dropdown" ? (
              <DropdownMenu key={item.title}>
                <DropdownMenuTrigger className="hover:text-yellow-400 transition font-normal flex items-center text-[17px]">
                  {item.title}
                  <ChevronDown strokeWidth={1} size={22} className="ml-1" />
                </DropdownMenuTrigger>

                {/*
                  CONDITION:
                  Show right panel only for Solutions & Resources
                */}
                {(() => {
                  const showRightGrid =
                    item.title === "Solutions" ||
                    item.title === "Resources";

                  return (
                    <DropdownMenuContent
                      sideOffset={0}
                      align="center"
                      className="relative mt-6 overflow-visible w-auto bg-[#272626] border-0 rounded-lg p-4 text-white"
                    >
                      {/* Arrow */}
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#272626] rotate-45 z-50" />

                      {/* Dynamic Grid */}
                      <div
                        className={`grid ${
                          showRightGrid
                            ? "grid-cols-2 gap-10"
                            : "grid-cols-1"
                        }`}
                      >
                        {/* LEFT SIDE */}
                        <div
                          className={`space-y-5 pr-10 ${
                            showRightGrid
                              ? "border-r border-gray-600"
                              : ""
                          }`}
                        >
                          <h3 className="text-yellow-400 font-medium text-lg">
                            {item.title}
                          </h3>

                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition"
                            >
                              <span className="w-3 h-3 border border-gray-400 rounded-sm" />
                              {subItem.label}
                            </Link>
                          ))}
                        </div>

                        {/* RIGHT SIDE */}
                        {showRightGrid && (
                          <div>
                            <h3 className="text-yellow-400 font-medium text-lg mb-4">
                              Platform Value
                            </h3>

                            <div className="bg-black rounded-xl p-6 relative overflow-hidden border border-gray-700">
                              <div className="text-xs text-yellow-400 border border-yellow-400 rounded-full px-3 py-1 inline-block mb-4">
                                04 Apr 2026
                              </div>

                              <h2 className="text-2xl font-light">
                                <span className="text-yellow-400">
                                  The Bee Glad
                                </span>
                                <br />
                                Showcase
                              </h2>

                              <Link
                                href="#"
                                className="block mt-6 text-gray-300 hover:text-yellow-400 transition"
                              >
                                View →
                              </Link>

                              {/* Background Pattern */}
                              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/honeycomb.png')]" />
                            </div>
                          </div>
                        )}
                      </div>
                    </DropdownMenuContent>
                  );
                })()}
              </DropdownMenu>
            ) : (
              <Link
                key={item.title}
                href={item.href!}
                className="hover:text-yellow-400 transition font-normal text-[17px]"
              >
                {item.title}
              </Link>
            )
          )}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3 font-normal text-[17px]">
          <Link
            href="/search"
            className="flex items-center hover:text-yellow-400 transition"
          >
            <Search size={19} />
          </Link>

          <span>|</span>

          <Link
            href="/contact"
            className="hover:text-yellow-400 transition"
          >
            Contact
          </Link>

          <span>|</span>

          <Link
            href="/support"
            className="hover:text-yellow-400 transition"
          >
            Support
          </Link>
        </div>
      </div>
    </header>
  );
}
