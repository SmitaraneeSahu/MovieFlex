import {Routes, Route} from "react-router-dom";
import {Home, Search, profile, PageNotFound, Details, AllMovie, AllSeries, AllTvShow, WatchList} from  "../pages";


export default function AllRoutes({darkMode}) {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home darkMode={darkMode}/>}/>
        <Route path="details/:type/:id" element={<Details darkMode={darkMode}/>}/>
        <Route path="Movie" element={<AllMovie apiPath="discover/movie"/>}/>
        <Route path="Series" element={<AllSeries apiPath="discover/tv"/>}/>
        <Route path="TvShow" element={<AllTvShow apiPath="discover/tv"/>}/>
        <Route path="Search" element={<Search apiPath="search/multi"/>}/>
        <Route path="watchlist" element={<WatchList/>}/>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </div>
  )
}



