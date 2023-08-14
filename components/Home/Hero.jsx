import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroIMG from "../../public/HeroIMG.png";
import { BsCalendarPlus } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="z-10">
      <div className="flex px-20 mt-16">
        <section className=" ml-20 pl-20 mb-4 flex-1 flex flex-col justify-center">
          <p className="text-xl my-5 text-black">
            HIGHLY PROFESSIONAL CLEANING
          </p>
          <h1 className="text-5xl text-primary font-bold">
            STRESS-FREE CLEAN
            <br />
            <span className="text-dgray">HOUSE AND OFFICE</span>
          </h1>
          <p className="text-base my-5 text-black md:w-[80%]">
            Are you tired of spending your precious time scrubbing, dusting, and
            mopping? Look no further! At CC Cleaning, we specialize in providing
            top-notch cleaning solutions that will leave your home or office
            sparkling from floor to ceiling.
          </p>
          <button className=" z-20 inline-flex justify-center items-center max-w-[250px] rounded-full bg-primary px-2 py-2.5 shadow-sm text-base text-pwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <Link href="/contact">
              <BsCalendarPlus className="inline-flex mr-2 pb-1" size={25} />
              Schedule Now
            </Link>
          </button>
        </section>

        <section className=" mr-15 pr-20 hidden md:block">
          <Image
            src={HeroIMG}
            alt="Lady Holding Cleaning supplies"
            width={650}
          />
        </section>
      </div>
      <div className="bg-dblack w-full h-32 flex justify-center items-center">
        <section className="flex flex-row mx-10">
          <FaRegCheckCircle
            color="#39E70A"
            size={20}
            className="mr-2 self-center"
          />
          <p className="text-2xl text-pwhite">Trusted Cleaners</p>
        </section>
        <div className="mx-3 h-10 border-lgray border-l-2"></div>
        <section className="flex flex-row mx-10">
          <FaRegCheckCircle
            color="#39E70A"
            size={20}
            className="mr-2 self-center"
          />
          <p className="text-2xl text-pwhite">100% Gurantee</p>
        </section>
        <div className="mx-3 h-10 border-lgray border-l-2"></div>
        <section className="flex flex-row mx-10">
          <FaRegCheckCircle
            color="#39E70A"
            size={20}
            className="mr-2 self-center"
          />
          <p className="text-2xl text-pwhite">5 Star Service</p>
        </section>
      </div>
    </div>
  );
};

export default Hero;
