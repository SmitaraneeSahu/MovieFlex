import React, { useState, useEffect } from 'react'

export default function useFetch(apiPath, queryTerm="", deps = []) {
  const [page, setPage] = useState(1);  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${API_KEY}&with_original_language=hi&release_date.gte=2020-01-01&sort_by=popularity.desc&page=${page}&query=${queryTerm}`
  
  useEffect(() => {
    setData([]);
    setPage(1);
  }, deps);
  
  useEffect(()=>{
        async function fetchData(page){
          setLoading(true);
          try{  
            const response = await fetch(url);
            const json = await response.json();
            let results = json.results || [];

        // ✅ AUTO-ADD media_type based on apiPath
        if (!apiPath.includes("search")) {
          if (apiPath.includes("movie")) {
            results = results.map(item => ({ ...item, media_type: "movie" }));
          } else if (apiPath.includes("tv")) {
            results = results.map(item => ({ ...item, media_type: "tv" }));
          }
        }

        // ✅ For search/multi, TMDB already provides media_type, no modification needed

          setData(prev => [...prev, ...results]);
            // setData(prev => [...prev, ...(json.results)]);
          }
            catch(error){
            console.log(error.message);
         } finally {
        setLoading(false);
        } }
         fetchData(page);
        },[url,page]);
    useEffect(() => {
        if (apiPath.includes("search")) return;
        const onScroll = () => {
          if (
            window.innerHeight + document.documentElement.scrollTop >=
              document.documentElement.offsetHeight - 200 &&
            !loading 
          ) {
            setPage((prevPage) => prevPage + 1);
          }
        };
    
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
      }, [loading, page, apiPath]);
      
      
  return (
    {data, loading}
  )
}


