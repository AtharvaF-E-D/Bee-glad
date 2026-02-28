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
import { useState } from "react";

export default function Navbar() {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const handleMouseEnter = (title: string) => {
    setOpenMenus((prev) => ({ ...prev, [title]: true }));
  };

  const handleMouseLeave = (title: string) => {
    setOpenMenus((prev) => ({ ...prev, [title]: false }));
  };

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
              <div
                key={item.title}
                className="flex items-center"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={() => handleMouseLeave(item.title)}
              >
                {/* Main Title Link */}
                <Link
                  href={item.href!}
                  className="hover:text-yellow-400 transition font-normal text-[17px]"
                >
                  {item.title}
                </Link>

                {/* Dropdown */}
                <DropdownMenu open={openMenus[item.title] ?? false}>
                  <DropdownMenuTrigger className="outline-none ml-1 hover:text-yellow-400 transition">
                    <ChevronDown strokeWidth={1} size={22} />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="center"
                    sideOffset={0}
                    className="relative mt-6 bg-[#272626] border-0 rounded-lg p-6 text-white"
                    onMouseEnter={() => handleMouseEnter(item.title)}
                    onMouseLeave={() => handleMouseLeave(item.title)}
                  >
                    {/* Arrow */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#272626] rotate-45 z-50" />

                    <div className="space-y-5">
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
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
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
          <Link href="/search" className="hover:text-yellow-400 transition">
            <Search size={19} />
          </Link>
          <span>|</span>
          <Link href="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>
          <span>|</span>
          <Link href="/support" className="hover:text-yellow-400 transition">
            Support
          </Link>
        </div>
      </div>
    </header>
  );
}