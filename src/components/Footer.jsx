import React from 'react'
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <footer className=" bottom-0 left-0 z-10 w-full p-4 bg-white border-t border-gray-100 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-900 dark:border-gray-600">
        <span className="text-sm text-gray-500 .sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Movieflex™</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center  space-x-4 md:space-x-6 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <Link to="#" className="hover:underline mr-4 md:mr-6">About</Link>
            </li>
            <li>
                <Link to="#" className="hover:underline mr-4 md:mr-6">Privacy Policy</Link>
            </li>
            <li>
                <Link to="#" className="hover:underline mr-4 md:mr-6">Subscription</Link>
            </li>
            <li>
                <Link to="#" className="hover:underline">Contact</Link>
            </li>
        </ul>
    </footer>
  )}


