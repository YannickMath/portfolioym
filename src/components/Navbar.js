import React from "react";
// import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import SocialIcons from "./SocialIcons";
import Link from "next/link";

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
        className="flex max-w-7xl items-center justify-between p-8"
        aria-label="Global"
      >
        <div className="w-1/6 flex justify-center">
          <Image src="/logo.png" alt="mon logo" width={100} height={100} />
        </div>

        <div className="flex flex-col items-center sm:flex-row justify-between p-6 w-4/6">
  {navigation.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="text-center sm:text-lg font-semibold leading-6 text-gray-900 hover:underline"
    >
      {item.name}
    </Link>
  ))}
</div>

<div className="flex flex-col sm:flex-row items-center justify-center w-1/6">
  <div
    href="#"
    className=" flex justify-center text-sm font-semibold leading-6 text-gray-900"
  >
    <SocialIcons />
  </div>
  <div className="flex justify-center text-xl font-semibold leading-6 text-gray-900">
    <MdOutlineLightMode />
  </div>
</div>


      </nav>
    </header>
  );
}

export default Navbar;
