import React, { useState } from "react";
import "./AboutPage.css";
import popcornImage from "../../assets/popcorn-3.png";
import Header from "../../components/Layout/Header";
import Cart from "../../components/Cart/Cart";

const About = () => {
   const [cartIsShown, setCartIsShown] = useState(false);

   const showCartHandler = () => {
      setCartIsShown(true);
   };

   const hideCartHandler = () => {
      setCartIsShown(false);
   };

   return (
      <>
         {cartIsShown && <Cart onClose={hideCartHandler} />}
         <Header onShowCart={showCartHandler} />
         <div className="about-container">
            <div className="hero">
               <div className="hero-text">
                  <h1>About Us</h1>
               </div>
            </div>
            <div className="content">
               <p>
                  Welcome to our movie selling website! We are passionate about
                  bringing you the best movies and entertainment right to your
                  doorstep.
               </p>
               <p>
                  Our mission is to provide a wide selection of movies at
                  affordable prices. Whether you're a movie enthusiast or just
                  looking for a great way to unwind, we've got you covered.
               </p>
               <p>
                  Our team is dedicated to curating the latest and greatest
                  movies for your enjoyment. Feel free to explore our collection
                  and don't hesitate to reach out if you have any questions or
                  suggestions.
               </p>
               <div className="image-collage">
                  <img src={popcornImage} alt="Popcorn" />
               </div>
            </div>
            <div className="cta-section">
               <h2>Ready to Dive into the Movie Frenzy?</h2>
               <p>
                  Explore our collection and find your next movie night
                  favorite.
               </p>
               <a href="/" className="cta-button">
                  Browse Movies
               </a>
            </div>
         </div>
      </>
   );
};

export default About;
