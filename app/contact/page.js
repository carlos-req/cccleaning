"use client";
import React, { useState } from "react";
// Hydration error being caused by Browser Extensions

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  console.log(formData);

  /*   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }; */

  return (
    <main className="flex flex-col items-center min-h-screen p-24 ">
      <section>
        <h1 className="mb-2 text-2xl md:text-4xl text-slate-950">Contact us</h1>
        <p className="mb-8 text-md text-neutral-600">
          We appreciate you taking the time to get in contact with us.
        </p>
      </section>
      <form
        className="w-full max-w-lg"
        action="https://formsubmit.co/doubleccleaningsvc@gmail.com"
        method="POST"
      >
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
              Name
            </label>
            <input
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              name="name"
              onChange={handleChange}
              value={formData.name}
              type="text"
              autoComplete="name"
            />
            <p className="text-xs italic text-gray-600">Ex: John Smith</p>
          </div>
        </div>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
              E-mail
            </label>
            <input
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              name="email"
              onChange={handleChange}
              value={formData.email}
              type="email"
              autoComplete="email"
            />
            <p className="text-xs italic text-gray-600">
              Ex: Jsmith@example.com
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
              Message
            </label>
            <textarea
              className="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none no-resize focus:outline-none focus:bg-white focus:border-gray-500"
              name="message"
              onChange={handleChange}
              value={formData.message}
            ></textarea>
            <p className="text-xs italic text-gray-600">
              Please include: Reason for inquiry, Number of rooms, sq ft and any
              other relevant information.
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start">
          <div className="">
            <button
              className="px-3.5 py-2.5 w-40 font-bold text-white rounded-full shadow bg-sky-500 hover:bg-sky-300 focus:shadow-outline focus:outline-none"
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
      </form>
      <div className="w-full gradient"></div>
    </main>
  );
}
