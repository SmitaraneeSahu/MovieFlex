import React from 'react'
import {useState, useEffect} from "react"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';


export default function Details({darkMode}) {
  const {type, id} = useParams();
  const [status, setStatus] = useState("loading");
  const [result, setResult] = useState({});
  const API_KEY = import.meta.env.VITE_API_KEY;
  useEffect(()=>{
    async function fetchDetails(){
      try{
        const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`;
        const res = await fetch(url);
        if (!res.ok) {
          setStatus("notFound");
          return;
        }
        const json = await res.json();

        // If TMDB returns meaningless error object
        if (json.success === false) {
          setStatus("notfound");
          return;
        }

        setResult(json);
        setStatus("loaded");
      }catch (error) {
        console.error(error);
        setStatus("error");
      }
    }
    fetchDetails();
  },[id, type]);
  if (status === "loading") return <div>Loading...</div>;
  if (status === "notfound") return <div>Page not found</div>;
  if (status=== "error") return <div>Error loading details</div>;
  const d = result;
  const image = `https://image.tmdb.org/t/p/w500/${d.poster_path}`

  function addToWatchlist(movie) {
  const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  const exists = watchlist.find(item => item.id === movie.id);
  if (!exists) {
    watchlist.push(movie);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    alert('Added to Watchlist!');
  } else {
    alert('Already in Watchlist');
  }
}  
  return (
    <main>
      <section className='flex justify-around flex-wrap py-5'>
        <div className='max-w-sm'>
          <img className='rounded mt-2 w-80 h-120' src={d.poster_path? image :"https://operaparallele.org/wp-content/uploads/2023/09/Placeholder_Image.png"} alt='poster'/>
        </div>
        <div className={`max-w-2xl  text-lg  ${darkMode? "text-white" : "text-gray-700"}`}>
          <h1 className='text-4xl font-bold my-3 text-center lg:text-left'>{d.title}</h1>
          <p className='my-4'>{d.overview}</p>

          {d.genres ? (<p className='my-7 flex justify-start flex-wrap '>{d.genres.map((genre)=>(
            <span className={`mr-2 px-2 py-1 border rounded ${darkMode?"border-gray-600":"border-gray-200"}`} key={genre.id}>{genre.name}</span>))}
          </p>) : ""}

          <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <p className={`ms-2  font-bold ${darkMode?"text-white":"text-gray-900"}`}>{d.vote_average}</p>
              <span class={`w-1 h-1 mx-1.5 rounded-full ${darkMode?"bg-gray-400":"bg-gray-500"}`}></span>
              <span class={`font-medium underline hover:no-underline  ${darkMode?"text-white":"text-gray-900"}`}>{d.vote_count} reviews</span>
          </div>
          
          <p className='my-4'>
            <span className='mr-2 font-bold'>Runtime:</span>
            <span>{d.runtime} min</span>
          </p>
          {/* <p className='my-4'>
            <span className='mr-2 font-bold'>Budget:</span>
            <span>{d.budget} </span>
          </p> */}
          <p className='my-4'>
            <span className='mr-2 font-bold'>Release Date:</span>
            <span>{d.release_date} </span>
          </p>
          <p className='my-4'>
            <span className='mr-2 font-bold'>IMDB:</span>
            <a href={`https://www.imdb.com/title/${d.imdb_id}`} target='_blank' rel='noreferrer'>{d.imdb_id} </a>
          </p>
          <div>
            <button className='bg-gray-600 text-white px-2 py-1 ' onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
          </div>
        </div>
      </section>
    </main>
  )
}


