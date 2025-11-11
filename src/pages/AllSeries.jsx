import React from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card'

export default function AllSeries({apiPath, darkMode}) {
  const {data: series, loading} = useFetch(apiPath)
    return (
      <main>
        <section className='py-7'><div className="flex  flex-wrap justify-center m-auto">
          {series.map((ser)=>(
            <Card key={ser.id} home={ser} darkMode={darkMode}/>
          ))}
        </div>
        {loading && <p className="text-center mt-10">Loading...</p>}</section>
      </main>
    )
}

