"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import companyLogoSM from "../public/Logo.png";
import companyLogo from "../public/Logo With Text.png";
const Nav = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { name: "HOME", link: "/home" },
    { name: "ABOUT US", link: "/about" },
    { name: "SERVICES", link: "/services" },
    { name: "PROJECTS", link: "/projects" },
    { name: "CONTACT", link: "/contact" },
  ];
  return (
    <div className="font-sans mx-auto w-[90%] h-[120px] flex justify-between items-center px-4">
      <div>
        <Image
          src={companyLogo}
          width={60}
          height={60}
          alt="CC Cleaning Services Logo"
        />
      </div>
      <ul className="hidden md:flex md: gap-4 text-sm">
        {links.map((link) => {
          return (
            <li>
              <Link href={link.link}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
      <button className=" hidden md:block rounded-full bg-primary px-3.5 py-2.5 shadow-sm text-sm text-pwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Get A Quote
      </button>
    </div>
  );
};

export default Nav;
