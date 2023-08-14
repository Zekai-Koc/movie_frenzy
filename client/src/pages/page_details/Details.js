import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../components/hooks/useFetch";
import "./Details.css";
import Header from "../../components/Layout/Header";
import Cart from "../../components/Cart/Cart";
import { baseUrlTMDB, readFromMyServer } from "../../utils/settings.js";

const Details = () => {
   const { id } = useParams();

   const [cartIsShown, setCartIsShown] = useState(false);

   const showCartHandler = () => {
      setCartIsShown(true);
   };

   const hideCartHandler = () => {
      setCartIsShown(false);
   };

   const url = readFromMyServer
      ? `http://localhost:5000/movies/${id}`
      : `${baseUrlTMDB}movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`;

   const { data, loading, error } = useFetch(url);

   if (loading) {
      return (
         <div className="status-message">
            <p>Loading...</p>
         </div>
      );
   }

   if (error) {
      return (
         <div className="status-message error">
            <p>Error: {error.message}</p>
         </div>
      );
   }

   if (!data) {
      return (
         <div className="status-message">
            <p>No movies found.</p>
         </div>
      );
   }

   const {
      title,
      poster_path,
      overview,
      release_date,
      runtime,
      vote_average,
      genres,
      production_companies,
      spoken_languages,
      homepage,
      tagline,
      imdb_id,
      original_language,
      revenue,
      vote_count,
   } = data;

   return (
      <>
         {cartIsShown && <Cart onClose={hideCartHandler} />}
         <Header onShowCart={showCartHandler} />
         <div className="details-main-container">
            <h1>Movie Details</h1>
            <div className="details-container">
               <div className="details-header">
                  <img
                     src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                     alt={title}
                  />
                  <div className="details-info">
                     <h2>{title}</h2>
                     <p>Release Date: {release_date}</p>
                     <p>Runtime: {runtime} minutes</p>
                     <p>Rating: {vote_average}</p>
                     <p>
                        Genres: {genres.map((genre) => genre.name).join(", ")}
                     </p>
                     <p>Tagline: {tagline}</p>
                     <p>Language: {spoken_languages[0]?.name}</p>
                     <p>Homepage: {homepage}</p>
                     <p>IMDB ID: {imdb_id}</p>
                     <p>Original Language: {original_language}</p>
                     <p>Revenue: {revenue}</p>
                     <p>Vote Count: {vote_count}</p>
                  </div>
               </div>
               <div className="details-description">
                  <h3>Overview</h3>
                  <p>{overview}</p>
               </div>
               <div className="details-production">
                  <h3>Production Companies</h3>
                  <ul>
                     {production_companies.map((company) => (
                        <li key={company.id}>
                           {company.name} ({company.origin_country})
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="details-big-poster">
                  <h1>Poster</h1>
                  <img
                     src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                     alt={title}
                  />
               </div>
            </div>
         </div>
      </>
   );
};

export default Details;
