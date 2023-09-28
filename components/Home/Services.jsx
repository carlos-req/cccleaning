import React from "react";
import Image from "next/image";
const Services = () => {
  return (
    <section
      id="services"
      className="my-36 font-sans max-w-[1440px] flex flex-col gap-8 justify-between items-center mx-auto "
    >
      <h3 className="text-xl font-normal tracking-wider uppercase text-sky-500">
        Our Services
      </h3>
      <p className="text-4xl font-semibold uppercase text-neutral-600">
        What we are offering
      </p>
      {/*Box Components*/}
      <section className="flex flex-col justify-between gap-16 mt-10 md:flex-row ">
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md min-w-0 mx-auto mt-6 mb-6 break-words bg-white border shadow-xl group md:max-w-sm rounded-xl">
            <div className="pb-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex justify-center w-full">
                  <div className="relative">
                    <Image
                      src="/../public/OfficeCleaning.png"
                      height={90}
                      width={90}
                      className=" align-middle absolute -m-12 -ml-18 lg:-ml-12 max-w-[130px]"
                      alt="Office Cleaning Icon"
                      quality={100}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-24 text-center">
                <h3 className="mb-1 text-2xl font-semibold leading-normal text-sky-500">
                  Office Cleaning
                </h3>
              </div>
              <div className="pt-6 mx-6 text-center border-gray-200 dark:border-gray-700/50">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-6">
                    <p className="mb-4 font-light leading-relaxed">
                      A clean and organized office isn&#39;t just aesthetically
                      pleasing; it also promotes productivity and a positive
                      work environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md min-w-0 mx-auto mt-6 mb-6 break-words bg-white border shadow-xl group md:max-w-sm rounded-xl">
            <div className="pb-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex justify-center w-full">
                  <div className="relative">
                    <Image
                      src="/../public/HouseCleaning.png"
                      width={90}
                      height={90}
                      className=" align-middle absolute -m-10 -ml-18 lg:-ml-12 max-w-[130px]"
                      alt="House Cleaning Icon"
                      quality={100}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-24 text-center">
                <h3 className="mb-1 text-2xl font-semibold leading-normal text-sky-500">
                  Home Cleaning
                </h3>
              </div>
              <div className="pt-6 mx-6 text-center border-gray-200 dark:border-gray-700/50">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-6">
                    <p className="mb-4 font-light leading-relaxed">
                      Your home is your sanctuary, a place of comfort and
                      relaxation. Keeping it clean and organized is essential
                      for your well-being.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md min-w-0 mx-auto mt-6 mb-6 break-words bg-white border shadow-xl group md:max-w-sm rounded-xl">
            <div className="pb-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex justify-center w-full">
                  <div className="relative">
                    <Image
                      src="/../public/FloorCleaning.png"
                      width={90}
                      height={90}
                      className=" align-middle absolute -m-10 -ml-18 lg:-ml-12 max-w-[130px]"
                      alt="Floor Cleaning Icon"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-24 text-center">
                <h3 className="mb-1 text-2xl font-semibold leading-normal text-sky-500">
                  Floor Cleaning
                </h3>
              </div>
              <div className="pt-6 mx-6 text-center border-gray-200 dark:border-gray-700/50">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-6">
                    <p className="mb-4 font-light leading-relaxed">
                      Floors are the foundation of every room, setting the tone
                      for the entire space. We bring back the luster to your
                      floors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
