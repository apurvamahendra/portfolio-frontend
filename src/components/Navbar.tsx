import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="w-full">
      <ul className="flex justify-center items-center gap-4  text-xl h-20">
        <li className="hover:text-blue-500 transition-colors duration-300">
          <Link href="/">Portfolio</Link>
        </li>
        <li className="hover:text-blue-500 transition-colors duration-300">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
