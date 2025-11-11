import React from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card'

export default function AllMovie({darkMode, apiPath}) {

  const {data: movies, loading} = useFetch(apiPath);

  return (
    <main>
      <section className='py-7'><div className="flex  flex-wrap justify-center m-auto">
        {movies.map((movie)=>(
          <Card key={movie.id} home={movie} darkMode={darkMode}/>
        ))}
      </div>
      {loading && <p className="text-center mt-10">Loading...</p>}
      
      </section>
    </main>
  )
}


