import React from "react";

export default function Navigation() {
    return(
   
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 uppercase text-black ">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
  <a href="https://www.medium.com/@adimchi" class="flex items-center">
    <span class="self-center text-xl font-semibold whitespace-nowrap  text-black ">Photosnap</span>
  </a>
  <div className="flex md:order-2">
      <button type="button" class="text-white uppercase bg-black focus:ring-4 focus:outline-none font-medium text-sm px-7 py-2.5 text-center mr-3 md:mr-0 ">Get an invite </button>
      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col tracking-wider mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
        <a href="https://www.medium.com/@adimchi" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 ">stories</a>
      </li>
      <li>
        <a href="https://www.medium.com/@adimchi" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 ">Features</a>
      </li>
      <li>
        <a href="https://www.medium.com/@adimchi" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 ">pricing</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

    )
}