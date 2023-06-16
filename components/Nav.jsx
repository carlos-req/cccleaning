"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import companyLogoSM from "../public/Logo.png";
import companyLogo from "../public/Logo With Text.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  //Handles toggle on Hamburger Menu
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  //Page sites and Links
  const links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/about" },
    { name: "SERVICES", link: "/services" },
    { name: "PROJECTS", link: "/projects" },
    { name: "CONTACT", link: "/contact" },
  ];
  return (
    <div className="font-sans mx-auto max-w-[1400px] h-[120px] flex justify-between items-center px-12">
      {/*Regular Menu*/}
      <div>
        <Link href="/">
          <Image
            className="hidden md:block"
            src={companyLogo}
            width={60}
            height={60}
            alt="CC Cleaning Services Logo"
          />
          <Image
            className="md:hidden"
            src={companyLogoSM}
            width={60}
            height={60}
            alt="CC Cleaning Services Logo"
          />
        </Link>
      </div>
      <ul className="hidden md:flex md:gap-4 text-base">
        {links.map((link) => {
          return (
            <li className="mx-1">
              <Link href={link.link}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
      <button className=" w-40 hidden lg:block rounded-full bg-primary px-3.5 py-2.5 shadow-sm text-sm text-pwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <Link href="/contact">Get A Quote</Link>
      </button>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>

      {/*Mobile Menu*/}
    </div>
  );
};

export default Nav;
