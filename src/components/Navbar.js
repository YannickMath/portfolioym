import React from "react";
// import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import SocialIcons from "./SocialIcons";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About me", href: "/aboutme" },
    { name: "Projects", href: "/project" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white justify-between">
      <nav
        className="flex max-w-7xl items-center justify-between p-6 lg:px-8 "
        aria-label="Global"
      >
        <div className="w-1/6">
          <Image src="/logo.png" alt="mon logo" width={100} height={100} />
        </div>

        <div className="lg:flex justify-center lg:gap-x-12 bg-green-700 w-3/6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center bg-orange-400 w-2/6">
          <a
            href="#"
            className="flex justify-between text-sm font-semibold leading-6 text-gray-900"
          >
            <SocialIcons />
          </a>
          <a className="flex justify-between text-sm font-semibold leading-6 text-gray-900">
            <MdOutlineLightMode size={25}/>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
