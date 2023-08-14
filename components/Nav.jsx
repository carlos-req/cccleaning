"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import companyLogoSM from "../public/Logo.png";
import companyLogo from "../public/Logo With Text.png";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";

const Nav = () => {
  //Handles toggle on Hamburger Menu
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState(false);

  const handleClick = () => setNav(!nav);
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  //Page sites and Links
  const links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/about" },
    { name: "SERVICES", link: "/services" },
    { name: "PROJECTS", link: "/projects" },
    { name: "CONTACT", link: "/contact" },
  ];
  let iconStyles = { color: "blue", size: "25px" };
  return (
    <>
      <div
        className={
          active
            ? "bg-pwhite drop-shadow-md font-sans px-20 h-[120px] flex justify-between items-center md:sticky md:top-0 z-10 transition duration-300 ease-in"
            : "bg-transparent font-sans px-20 h-[120px] flex justify-between items-center md:sticky md:top-0"
        }
      >
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
        <ul className="hidden md:flex md:gap-4 text-lg z-10">
          {links.map((link) => {
            return (
              <li className="mx-1 z-10">
                <Link href={link.link}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
        <section className="mr-20 flex">
          <div className="pt-2 mr-10">
            <FaPhoneAlt
              className="inline-flex mr-2 pb-1"
              size={20}
              color="#1195FF"
            />
            <a href="tel:7277277722" className="text-lg underline">
              727-727-7722
            </a>
          </div>
          <button className="w-40 hidden lg:block rounded-full bg-primary px-3.5 py-2.5 shadow-sm text-lg text-pwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <Link href="/contact">Book Now</Link>
          </button>
        </section>
        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
        </div>

        {/*Mobile Menu*/}
      </div>
    </>
  );
};

export default Nav;
