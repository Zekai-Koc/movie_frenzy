import React, { useState, useEffect } from "react";
import { useFavorites } from "../../store/FavoritesContext";
import "./FavoritesPage.css";
import Header from "../../components/Layout/Header";
import Cart from "../../components/Cart/Cart";

import { baseUrlTMDB, readFromMyServer } from "../../utils/settings.js";

const FavoritesPage = () => {
   const { favorites } = useFavorites();
   const [favoriteMoviesData, setFavoriteMoviesData] = useState([]);

   const [cartIsShown, setCartIsShown] = useState(false);

   const showCartHandler = () => {
      setCartIsShown(true);
   };

   const hideCartHandler = () => {
      setCartIsShown(false);
   };

   useEffect(() => {
      const fetchData = async (url) => {
         try {
            const response = await fetch(url);
            if (!response.ok) {
               throw new Error("Network response was not ok!");
            }
            const data = await response.json();
            return data;
         } catch (error) {
            console.log(error);
            return null;
         }
      };

      const fetchFavoriteMoviesData = async () => {
         const movieDataPromises = favorites.map(async (item) => {
            const url = readFromMyServer
               ? `http://localhost:5000/movies/${item}`
               : `${baseUrlTMDB}movie/${item}?api_key=${process.env.REACT_APP_API_KEY}`;

            const singleMovie = await fetchData(url);
            return singleMovie;
         });

         const movieData = await Promise.all(movieDataPromises);
         setFavoriteMoviesData(movieData);
      };

      fetchFavoriteMoviesData();
   }, [favorites]);

   return (
      <>
         {cartIsShown && <Cart onClose={hideCartHandler} />}
         <Header onShowCart={showCartHandler} />
         <div className="favorites-container">
            <h1 className="favorites-heading">Your Favorite Movies</h1>
            <div className="movie-cards">
               {favoriteMoviesData.map((movie) => (
                  <div key={movie.id} className="movie-card">
                     <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={movie.title}
                     />
                     <h2>{movie.original_title}</h2>
                     <p>
                        <strong>Tagline:</strong> {movie.tagline}
                     </p>
                     <p>
                        <strong>Release Date:</strong> {movie.release_date}
                     </p>
                     <p>
                        <strong>Genres:</strong>
                        {movie.genres.map((genre) => genre.name).join(", ")}
                     </p>
                     <p>
                        <strong>Language:</strong> {movie.original_language}
                     </p>
                     <p>
                        <strong>Runtime:</strong> {movie.runtime} mins
                     </p>
                     <p>
                        <strong>Popularity:</strong> {movie.popularity}
                     </p>
                     <p>
                        <strong>Budget:</strong> ${movie.budget}
                     </p>
                     <p>
                        <strong>Revenue:</strong> ${movie.revenue}
                     </p>
                     <p>
                        <strong>Vote Average:</strong> {movie.vote_average}
                     </p>
                     <p>
                        <strong>Vote Count:</strong> {movie.vote_count}
                     </p>
                     <p>
                        <strong>Overview:</strong> {movie.overview}
                     </p>
                     <p>
                        <strong>Homepage:</strong>{" "}
                        <a
                           href={movie.homepage}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           {movie.homepage}
                        </a>
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
};

export default FavoritesPage;
