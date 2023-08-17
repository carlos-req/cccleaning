import React from "react";
import Image from "next/image";
import Link from "next/link";
import companyLogoSM from "../public/Logo.png";

const Footer = () => {
  return (
    <footer class="bg-dblue">
      <div class="container px-6 py-12 mx-auto">
        <div class="text-center">
          <h2 class="text-2xl font-semibold text-pwhite">
            Let’s give you a clean slate
          </h2>

          <p class="max-w-md mx-auto mt-2  text-pwhite ">
            Join our many happy customers
          </p>

          <div class="flex flex-col mt-6 sm:flex-row sm:items-center sm:justify-center">
            <button className="w-40 hidden lg:block rounded-full bg-primary px-3.5 py-2.5 shadow-sm text-lg text-pwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <Link href="/contact">Book with us</Link>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          <div>
            <h3 class="text-sm font-medium text-pwhite ">Company</h3>
            <div class="flex flex-col items-start mt-4 space-y-4">
              <Link
                href="/about"
                class="text-lgray transition-colors duration-200 hover:underline hover:text-blue-600"
              >
                About us
              </Link>
              <a
                href="#"
                class="text-lgray transition-colors duration-200 hover:underline hover:text-blue-600"
              >
                Careers
              </a>
              <Link
                href="/contact"
                class="text-lgray transition-colors duration-200 hover:underline hover:text-blue-600"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Resources
            </h3>

            <div class="flex flex-col items-start mt-4 space-y-4">
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Blog
              </a>
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Newsletter
              </a>
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Events
              </a>
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Help center
              </a>
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Tutorials
              </a>
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Supports
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Use cases
            </h3>

            <div class="flex flex-col items-start mt-4 space-y-4">
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Startups
              </a>
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Enterprise
              </a>
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Government
              </a>
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Saas
              </a>
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Marketplaces
              </a>
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Ecommerce
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Social
            </h3>

            <div class="flex flex-col items-start mt-4 space-y-4">
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Twitter
              </a>
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                LinkedIn
              </a>
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Github
              </a>
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Facebook
              </a>
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                AngelList
              </a>
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Dribble
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Legal
            </h3>

            <div class="flex flex-col items-start mt-4 space-y-4">
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Terms
              </a>
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Privacy
              </a>
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Cookies
              </a>
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Licenses
              </a>
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Settings
              </a>
              <a
                href="#"
                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-row justify-between">
          <Link href="/">
            <Image
              className="w-auto h-12"
              src={companyLogoSM}
              alt="CC Cleaning Services Logo"
            />
          </Link>

          <div class="flex flex-col items-center justify-between sm:flex-row">
            <p class="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">
              © Copyright 2023. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
