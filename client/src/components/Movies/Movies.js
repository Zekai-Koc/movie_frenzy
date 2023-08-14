import React from "react";
import "./Movies.css";
import MovieSearch from "./MovieSearch/MovieSearch";
import MovieList from "./MovieList";
import { SearchProvider } from "../../store/SearchContext";

const Movies = () => {
   return (
      <SearchProvider>
         <div className="container-movies" data-testid="container-movies">
            <div
               className="container-movies-top"
               data-testid="container-movies-top"
            >
               <MovieSearch />
            </div>
            <div
               className="container-movies-bottom"
               data-testid="container-movies-bottom"
            >
               <MovieList />
            </div>
         </div>
      </SearchProvider>
   );
};

export default Movies;
