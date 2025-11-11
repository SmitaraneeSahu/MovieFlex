import React, { useState, useEffect } from 'react'
import {Link, NavLink, useNavigate} from "react-router-dom"
import DarkModeToggle from './DarkModeToggle'
import Logo from "../assets/Logo.png.png" 
import photo from "../assets/MyPhoto.jpg"

export default function Header({darkMode, setDarkMode}) {
 const [hidden, setHidden] = useState(true);
  const [photoHidden, setPhotoHidden] = useState(true);
  const navigate = useNavigate();

 const activeClass = `block py-2 px-3 text-l  ${darkMode? " text-violet-600 hover:bg-gray-900 md:dark:text-violet-500":"bg-white hover:bg-gray-100 text-violet-600 md:text-violet-700"} rounded-sm md:bg-transparent  md:p-0 `;
// const inActiveClass = "block py-2 px-3 text-gray-900 bg-white dark:bg-gray-800 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0 md:dark:hover:text-voilet-500 dark:text-white dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
  const inActiveClass = `block py-2 px-3 rounded-sm  md:hover:bg-transparent md:p-0 
  ${darkMode
    ? "bg-gray-800 text-white hover:bg-gray-900 md:hover:text-violet-500"
    : "bg-white text-gray-600 hover:bg-gray-100 md:hover:text-violet-700"}`
  
  function handleSubmit(event){
    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();
    return navigate(`/search?q=${queryTerm}`);
  }  
  return (
    <header>
      
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-10 w-10 rotate-45" alt="movieflex Logo" />
            <span className={`text-2xl font-semibold ${darkMode? "text-white": "text-gray-800"}`}>Movieflex</span>
        </Link>
      <div className="flex justify-between md:order-2">
          {/* <DarkModeToggle/> */} 
          <button onClick={() => setDarkMode(!darkMode)} data-tooltip-target="navbar-search-example-toggle-dark-mode-tooltip" type="button" data-toggle-dark="light" 
          // className="flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          className={`flex items-center p-2 mr-2 text-xs font-medium rounded-lg border toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:outline-none${darkMode
          ? "bg-gray-800 text-gray-400 border-gray-600 focus:ring-gray-500 hover:text-white hover:bg-gray-700"
          : "bg-white text-gray-700 border-gray-200 focus:ring-gray-300"}`}>
          { darkMode ? (<svg aria-hidden="true" data-toggle-icon="sun" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>) : (<svg aria-hidden="true" data-toggle-icon="moon" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>) }
          </button>
          <button type="button" onClick={()=>(setHidden(!hidden))} data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" autoComplete='off' className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <form onSubmit={handleSubmit}><input type="text" id="search-navbar" name='search'
              className={`block w-full p-2 ps-10 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ${darkMode
                ? "bg-gray-800 border-gray-600 border placeholder-gray-400 text-white"
                : "bg-gray-50 border-gray-300 border text-gray-900"}`}
              // className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
               placeholder="Search..." autoComplete='off'/></form>
        </div>
        <div className='ml-6 mr-4'>
            <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <img onClick={()=>(setPhotoHidden(!photoHidden))} className="w-9 h-9 rounded-full" src={photo} alt="user photo"/>
            </button>
        </div>
        <button onClick={()=>(setHidden(!hidden))} data-collapse-toggle="navbar-search" type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
      </div>
        <div className={`items-center justify-between ${hidden ? "hidden" : ""} w-full md:flex md:w-auto md:order-1`} id="navbar-search">
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <form onSubmit={handleSubmit}><input type="text" id="search-navbar" name='search' className={`block w-full p-2 ps-10 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ${darkMode
                ? "bg-gray-800 border-gray-600 border placeholder-gray-400 text-white"
                : "bg-gray-50 border-gray-300 border text-gray-900"}`} placeholder="Search..." autoComplete='off'/></form>
          </div>
          
          <nav className="border-gray-200">
          <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium border 
           rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 
            ${darkMode? "dark:bg-gray-800  dark:border-gray-700 text-white" :"bg-white text-gray-800 border-gray-100  " }`} >
            <li>
              <NavLink to="/" className={({isActive})=> isActive ? activeClass : inActiveClass} end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/Movie" className={({isActive})=> isActive ? activeClass : inActiveClass}>Movies</NavLink>
            </li>
            <li>
              <NavLink to="/Series" className={({isActive})=> isActive ? activeClass : inActiveClass}>Series</NavLink>
            </li>
            <li>
              <NavLink to="/TvShow" className={({isActive})=> isActive ? activeClass : inActiveClass}>TvShow</NavLink>
            </li><li>
              <NavLink to="/watchlist" className={({isActive})=> isActive ? activeClass : inActiveClass}>MyWatchlist</NavLink>
            </li>
          </ul> 
    </nav></div></div>
    {!photoHidden && (
      <div className="absolute right-4 top-16 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600">
        <div className={`z-50 ${photoHidden? "hidden" : ""} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">Smyth_27</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">sahusmitaranee@gmail.com</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Account Details</Link>
          </li>
          <li>
            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</Link>
          </li>
          <li>
            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Privacy</Link>
          </li>
          <li>
            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
          </li>
        </ul>
      </div></div>)}
    </header>
  )
}  
//   return(
//     <header>
      

// <nav className="bg-white border-gray-200 dark:bg-gray-900">
//   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//   <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
//       <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
//       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//   </a>
//   <div className="flex md:order-2">
//     <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
//       <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//       </svg>
//       <span className="sr-only">Search</span>
//     </button>
//     <div className="relative hidden md:block">
//       <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//         <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//         </svg>
//         <span className="sr-only">Search icon</span>
//       </div>
//       <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
//     </div>
//     <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
//         <span className="sr-only">Open main menu</span>
//         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
//         </svg>
//     </button>
//   </div>
//     <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
//       <div className="relative mt-3 md:hidden">
//         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//           <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//           </svg>
//         </div>
//         <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
//       </div>
//       <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//         <li>
//           <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
//         </li>
//         <li>
//           <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//         </li>
//         <li>
//           <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>

//     </header>
//   )

