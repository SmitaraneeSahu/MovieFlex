import React from 'react';
import {Link} from 'react-router-dom';


export default function Card({home, darkMode}) {
  const {id, original_name, original_title, overview, poster_path, media_type} = home;
  const image = `https://image.tmdb.org/t/p/w500/${poster_path}`
  return (
      <div className={`max-w-sm ${darkMode? "bg-gray-800 border-gray-700":"bg-white border border-gray-200"} w-40 md:w-48  lg:w-56 rounded-lg shadow-sm  m-2`}>
          <Link to ={`/details/${home.media_type}/${home.id}`}>
              <img className="rounded-lg shadow-md w-40 h-60 md:w-48 md:h-72 lg:w-56 lg:h-80 object-cover" src={poster_path? image :"https://operaparallele.org/wp-content/uploads/2023/09/Placeholder_Image.png"} alt="" />
          </Link>
          <div className="p-2">
              <Link to={`/details/${home.media_type}/${home.id}`}>
                  <h6 className={`mb-2 text-xl font-semibold tracking-tight ${darkMode?"text-white":"text-gray-900"}  `}>{original_name ? original_name : original_title}</h6>
              </Link>

          </div>
      </div>
  )
}
