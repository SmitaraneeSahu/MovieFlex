// import { useEffect, useState } from "react";

// export default function DarkModeToggle() {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const html = document.documentElement;
//     if (isDark) {
//       html.classList.add("dark");
//     } else {
//       html.classList.remove("dark");
//     }
//   }, [isDark]);

//   return (
//     <button
//       onClick={() => setIsDark(!isDark)}
      
// className="relative w-14 h-8 mr-4 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-colors duration-500"
//     >
//       <span
//         className={`absolute left-1 w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow transform transition-transform duration-500 ${
//           isDark ? "translate-x-6" : "translate-x-0"
//         }`}
//       ></span>
//       <span className="absolute left-2 text-xs"></span>
//       <span className="absolute right-2 text-xs"></span>
//     </button>

//   );
// }
import React, { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  // useEffect(() => {
  //     const preference = window.matchMedia('(prefers-color-scheme: dark)');
  //     const systemDarkMode = preference.matches;

  //     setDarkMode(systemDarkMode);

  //     const handleChange = (e) => setDarkMode(e.matches);
  //     preference.addEventListener('change', handleChange);

  //     return () => {
  //       preference.removeEventListener('change', handleChange);
  //     };
  //     }, []);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');

    // document.body.classList.toggle('dark');
    // document.querySelector('footer').classList.toggle('dark');
    // document.querySelector('header').classList.toggle('dark');
  } 

  return (
    // <button
    //   onClick={toggleDarkMode}
    //   style={{
    //     padding: '8px 16px',
    //     backgroundColor: darkMode ? '#f9fafb' : '#111827',
    //     color: darkMode ? '#111827' : '#f9fafb',
    //     border: 'none',
    //     borderRadius: '4px',
    //     cursor: 'pointer',
    //     transition: 'all 0.3s ease'
    //   }}
    // >
    //   {darkMode ? 'Light Mode' : 'Dark Mode'}
    // </button>
    <button onClick={toggleDarkMode} data-tooltip-target="navbar-search-example-toggle-dark-mode-tooltip" type="button" data-toggle-dark="light" className="flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
      { darkMode ? (<svg aria-hidden="true" data-toggle-icon="sun" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>) : (<svg aria-hidden="true" data-toggle-icon="moon" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>) }
    </button>
  );
}