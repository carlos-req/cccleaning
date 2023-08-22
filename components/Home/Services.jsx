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
                      src="/../public/HeroIMG.png"
                      height={150}
                      width={150}
                      className=" rounded-full align-middle absolute -m-16 -ml-18 lg:-ml-16 max-w-[130px]"
                      alt="Image of dude"
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin turpis orci, maximus sed purus a.
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
                      src="/../public/HeroIMG.png"
                      width={150}
                      height={150}
                      className=" rounded-full align-middle absolute -m-16 -ml-18 lg:-ml-16 max-w-[130px]"
                      alt="Image of dude"
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin turpis orci, maximus sed purus a.
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
                      src="/../public/HeroIMG.png"
                      width={150}
                      height={150}
                      className=" rounded-full align-middle  absolute -m-16 -ml-18 lg:-ml-16 max-w-[130px]"
                      alt="Image of dude"
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin turpis orci, maximus sed purus a.
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
