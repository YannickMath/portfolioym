import React from "react";
// import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineLightMode } from "react-icons/Md";

function Navbar() {
  //   return (
  //     <nav className="bg-gray-800">
  //       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
  //         <div className="relative flex items-center justify-between h-16">
  //           <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
  //             <div className="flex-shrink-0">
  //               <Link href="/" className="text-white text-xl font-bold">
  //                 My Website
  //               </Link>
  //             </div>
  //             <div className="hidden sm:block sm:ml-6">
  //               <div className="flex space-x-4">
  //                 <Link
  //                   href="/about"
  //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  //                 >
  //                   About me
  //                 </Link>
  //                 <Link
  //                   href="/services"
  //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  //                 >
  //                   Projects
  //                 </Link>
  //                 <Link
  //                   href="/projects"
  //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  //                 >
  //                   Contact
  //                 </Link>
  //                 <Link
  //                   href="/contact"
  //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  //                 >
  //                   Contact
  //                 </Link>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </nav>
  //   );
  // }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About me", href: "/about" },
    { name: "Projects", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <Image
              src="/logo.png"
              alt="mon logo"
              width={100}
              height={100}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
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
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <MdOutlineLightMode width={50} height={50} />
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
