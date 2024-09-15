import React from "react";

export default function Footer() {
    return (
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <a
        href="#"
        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
      >
        <img
          src="/favicon.ico"
          className="h-8"
          alt=" Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Tree Info
        </span>
      </a>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
        <li>
          <a href="/mission" className="hover:underline me-4 md:me-6">
            Mission
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:underline me-4 md:me-6">
            Contact
          </a>
        </li>
       
       
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2024@YCS   Young Computer Sciencetist{" "}
      <a href="#" className="hover:underline">
       Tree Info™  
      </a>
         Yenuka Imandiv . All Rights Reserved.
    </span>
  </div>
</footer>

    )
}