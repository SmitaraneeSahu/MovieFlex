import React from 'react'
import useFetch from '../../hooks/useFetch'
import Card from '../components/Card'

export default function AllTvShow({apiPath, darkMode}) {
  const {data: TvShow, loading} = useFetch(apiPath)
    return (
      <main>
        <section className='py-7'><div className="flex  flex-wrap justify-center m-auto">
          {TvShow.map((tv)=>(
            <Card key={tv.id} home={tv} darkMode={darkMode}/>
          ))}
        </div>
        {loading && <p className="text-center mt-10">Loading...</p>}</section>
      </main>
    )
}
