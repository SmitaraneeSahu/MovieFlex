import React from 'react'
import { Link } from 'react-router-dom'
import pageNotFound from '../assets/pageNotFound.png';

export default function PageNotFound() {
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className='text-6xl text-gray-700 font-bold my-10 dark:text-white'>404, not found</p>
          <div className='max-w-lg'>
            <img className='rounded ' src={pageNotFound} alt=''/>
          </div>
        </div>
        <div className='flex justify-center my-4'>
          <Link to="/">
            <button className='text-white text-xl bg-blue-800 rounded-md p-3'>back to home</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
