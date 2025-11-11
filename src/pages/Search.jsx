
import React from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card'
import { useSearchParams } from 'react-router-dom';

export default function Search({apiPath, darkMode}) {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const {data: search} = useFetch(apiPath, `&query=${queryTerm}`, [queryTerm]);
    return (
      <main>
        <section className='py-6'>
          <p className='text-3xl ml-6 text-gray-500 dark:text-white'>{search.length===0 ? `No result found for '${queryTerm}'` : `Results for '${queryTerm}'`}</p>
        </section>
        <section className='py-7'><div className="flex  flex-wrap justify-center m-auto">
          {search.map((s)=>(
            <Card key={s.id} home={s} darkMode={darkMode}/>
          ))}
        </div></section>
      </main>
    )
}

