"use client";

import Image from "next/image";
import React, { useState } from "react";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const navLinks = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/" },
    { name: "SERVICES", link: "/" },
    { name: "PROJECTS", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  return (
    <div className="font-sans mx-auto w-[90%] h-[80px] flex justify-between items-center px-4">
      <div>
        Logo
        <Image></Image>
      </div>
      <ul className="hidden md:flex md: gap-4 text-sm">
        {navLinks.map((navLink) => {
          return <li>{navLink.name}</li>;
        })}
      </ul>
      <button className="rounded-full bg-primary px-3.5 py-2.5 shadow-sm text-sm text-pwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Get A Quote
      </button>
    </div>
  );
};

export default Nav;
