import React from 'react'
import Card from '../components/Card'
export default function WatchList({darkMode}) {
  
// const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
function removeFromWatchlist(movieId) {
  const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  const updated = watchlist.filter(item => item.id !== movieId);
  localStorage.setItem('watchlist', JSON.stringify(updated));
}  

return (
  <main>
  <div>
    <h2>Your Watchlist</h2>
    /* {watchlist.map(movie => (
      <div key={movie.id}>
        <h3>{movie.title}</h3>
        <button onClick={() => removeFromWatchlist(movie.id)}>Remove</button>
      </div>
    ))} */
    <div className="flex  flex-wrap justify-center m-auto">
        {watchlist.map((movie)=>(
          <Card key={movie.id} home={movie} darkMode={darkMode}/>
        ))}
      </div>
  </div>
  </main>
);
}
