import Link from "next/link";
import Logo from "./Logo";
import { navLinks } from "../constants/nav-link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="bg-slate-900/50 flex top-0 left-0 w-full backdrop-blur-md z-30">
      <div className="container relative flex justify-between py-6">
        <Logo />
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 capitalize">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={`#${link}`}
              className="text-sm font-semibold tracking-wide text-slate-200 hover:text-white"
            >
              {link}
            </Link>
          ))}
        </nav>
        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
