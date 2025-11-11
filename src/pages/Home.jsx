import React from 'react'
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Logo from "../assets/Logo.png.png"
import photo from "../assets/MyPhoto.jpg"
import Card from '../components/Card';

export default function Home({darkMode}) {
  const [home, setHome] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const API_KEY = import.meta.env.VITE_API_KEY;
    useEffect(()=>{
      async function fetchHome(page){
        try{
        const movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=hi&release_date.lte=2025-11-01&sort_by=release_date.desc&page=${page}`;
        const tvUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_original_language=hi&release_date.lte=2025-11-01&sort_by=release_date.desc&page=${page}`;
        // if (!response.ok) throw new Error("Failed to fetch TMDB data")
        const [movieRes,  tvRes] = await Promise.all([fetch(movieUrl), fetch(tvUrl)]);
        const [movieData,  tvData] = await Promise.all([movieRes.json(), tvRes.json()]);
        
      const movieResults = movieData.results.map(item => ({
        ...item,
        media_type: "movie"
      }));
      const tvResults = tvData.results.map(item => ({
        ...item,
        media_type: "tv"
      }));
        const combined = [...movieResults,  ...tvResults]
        .filter((h) => h.original_language === "hi" && h.vote_average >= 5)
        .sort((a, b) => b.popularity - a.popularity);
        // const data = await response.json();
        //  if (data.results.length === 0) {
        // setHasMore(false);
        // } else {
        // setHome((prev) => [...prev, ...data.results]);
        // }
        if (combined.length === 0) {
        setHasMore(false);
        } else {
          setHome((prev) => [...prev, ...combined]);
        }
        }catch(error){
        console.log("Error fetching data:", error);
      }finally{
        setLoading(false);
      }
      }fetchHome(page);
    },[page]);
    
  // 🔹 Infinite scroll logic
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 200 &&
        !loading &&
        hasMore
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);
  if (loading) return <p className="text-center mt-10">Loading...</p>;
  {!hasMore && (
        <p className="text-center mt-10 text-gray-400">
          🎉 You’ve reached the end!
        </p>
  )};
  return (
    <main>
      <section className='py-7'><div className="flex  flex-wrap justify-center m-auto">
        {home.map((h)=>(
          <Card key={h.id} home={h} darkMode={darkMode}/>
        ))}
      </div></section>
    </main>
  )
}
