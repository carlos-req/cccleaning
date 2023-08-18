"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import companyLogoSM from "../public/Logo.png";
import companyLogo from "../public/Logo With Text.png";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";

const Nav = () => {
  //Handles toggle on Hamburger Menu
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  //Page sites and Links
  const links = [
    { id: 1, name: "HOME", link: "/" },
    { id: 2, name: "ABOUT US", link: "/about" },
    { id: 3, name: "SERVICES", link: "/services" },
    { id: 4, name: "PROJECTS", link: "/projects" },
    { id: 5, name: "CONTACT", link: "/contact" },
  ];
  return (
    <>
      <div className="bg-transparent font-sans mx-width-[1440px] h-[120px] flex justify-between items-center px-20">
        {/*Regular Menu*/}
        <div className="ml-20">
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
        <ul className="hidden text-lg md:flex md:gap-4">
          {links.map((link) => {
            return (
              <li key={link.id} className="mx-1 text-slate-950">
                <Link href={link.link}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
        <section className="flex mr-20">
          <div className="pt-2 mr-10">
            <FaPhoneAlt
              className="inline-flex pb-1 mr-2"
              size={20}
              color="#0ea5e9"
            />
            <a
              href="tel:7277277722"
              className="text-lg underline text-slate-950"
            >
              727-727-7722
            </a>
          </div>
          <button className="w-40 hidden lg:block rounded-full bg-sky-500 px-3.5 py-2.5 shadow-base text-lg text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700">
            <Link href="/contact">Book Now</Link>
          </button>
        </section>
        {/* Hamburger */}
        <div onClick={handleClick} className="z-10 md:hidden">
          {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
        </div>

        {/*Mobile Menu*/}
      </div>
    </>
  );
};

export default Nav;
