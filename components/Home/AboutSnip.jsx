import React from "react";
import Image from "next/image";
import { FaTrophy } from "react-icons/fa";

const AboutSnip = () => {
  return (
    <div className="my-20 font-sans max-w-[1440px] flex flex-col md:flex-row gap-10 justify-between items-center mx-auto px-10">
      <section className="w-full pl-2 grow">
        <h3 className="text-2xl text-sky-500">About Us</h3>
        <h2 className="text-5xl capitalize text-neutral-600">
          Quickly and Easy to Clean Your Office and House
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          recusandae ipsum modi nihil facere laboriosam. Error modi ut molestias
          perferendis, quos sit atque dolor. Itaque magni neque aperiam eos
          quam.
        </p>
        <section>
          <h4 className="text-base capitalize text-slate-950">
            You will love us{" "}
          </h4>
          <FaTrophy color="#020617" size={20} />
        </section>
        <p>
          Our quick and effective cleaning services will leave you shocked at
          how nice your home and office look once our team has finished and
          complete our checklist system
        </p>
      </section>
      <section className="w-full mt-10 grow md:mt-0">
        <Image
          width={900}
          height={900}
          quality={80}
          src="/../public/AboutUs.png"
          alt="Group of people actively cleaning"
        />
      </section>
    </div>
  );
};

export default AboutSnip;
