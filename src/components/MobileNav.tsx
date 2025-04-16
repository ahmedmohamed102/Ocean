"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "../constants/nav-link";
import Link from "next/link";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <>
        <div className="md:hidden flex cursor-pointer" onClick={toggleMenu}>{isOpen ? <X /> : <Menu />}</div>
        <figure
          className={`absolute rounded-md right-2 origin-top top-20 ${
            isOpen
              ? "scale-y-100 opacity-100 visible"
              : "scale-y-50 opacity-0 hidden"
          } w-auto bg-slate-800 p-2 transition-all z-50`}
        >
          <nav className="w-full h-full flex flex-col space-y-2 capitalize font-normal tracking-wider">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={`#${link}`}
                className="py-1 px-2 transition-all rounded-md hover:bg-slate-700 hover:text-white"
                onClick={toggleMenu}
              >
                {link}
              </Link>
            ))}
          </nav>
        </figure>
      </>
    </>
  );
};

export default MobileNav;
