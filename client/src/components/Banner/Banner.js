import React, { useEffect, useState } from "react";
import Sale from "./Sale";
import getRandomSaleImage from "../../utils/getRandomSaleImage";
import "./Banner.css";
import { baseUrlTMDB, readFromMyServer } from "../../utils/settings.js";

const MIN_MOVIE_ID = 5;
// const MAX_MOVIE_ID = 1157079;
const MAX_MOVIE_ID = 11570;
const NUM_POSTERS_TO_GENERATE = 5;

const getRandomNumber = (minNumber, maxNumber) => {
   return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};

const Banner = (props) => {
   const [saleObjects, setSaleObject] = useState([]);

   useEffect(() => {
      const fetchMovieData = async (movieId) => {
         try {
            let url;
            if (readFromMyServer)
               url = `http://localhost:5000/movies/${movieId}`;
            else
               url = `${baseUrlTMDB}movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`;

            const response = await fetch(url);
            const data = await response.json();
            return data;
         } catch (error) {
            console.error("Error fetching movie data:", error);
            return null;
         }
      };

      const fetchMovieWithValidPosterPath = async () => {
         const totalFiveSaleObjects = [];

         while (totalFiveSaleObjects.length < NUM_POSTERS_TO_GENERATE) {
            const randomMovieId = getRandomNumber(MIN_MOVIE_ID, MAX_MOVIE_ID);
            const data = await fetchMovieData(randomMovieId);

            if (data && data.poster_path) {
               const saleData = getRandomSaleImage();
               totalFiveSaleObjects.push({
                  movieData: data,
                  saleData,
               });
            }
         }
         setSaleObject(totalFiveSaleObjects);
      };

      fetchMovieWithValidPosterPath();
   }, []);

   return (
      <div className="container-banner">
         <h1 className="heading-todays-offers">Unbeatable Deals!</h1>
         {saleObjects.map((singleObj, index) => (
            <Sale key={index} singleObj={singleObj} />
         ))}
         <h1 className="heading-todays-offers">Every Day!</h1>
      </div>
   );
};

export default Banner;
