import React from 'react'

export default function WatchList() {
const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

return (
  <div>
    <h2>Your Watchlist</h2>
    {watchlist.map(movie => (
      <div key={movie.id}>
        <h3>{movie.title}</h3>
        <button onClick={() => removeFromWatchlist(movie.id)}>Remove</button>
      </div>
    ))}
  </div>
);
}
