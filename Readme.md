# Movie Frenzy - Unlock a World of Movies

Welcome to **Movie Frenzy**, a captivating application developed for the HackYourFuture React Assignment. Experience a cinematic adventure like never before. To witness the magic firsthand, you can explore the live version deployed on the Netlify server at the following link: [Live Version](link).

## Modules at a Glance

**Server Module**: This module acts as a bridge connecting the client module to "The Internet Movie Database." Developed using Node.js and Express, the server serves as a simplified middleware without any database components.

**Client Module**: At the heart of the project lies the client module. Utilizing "The Internet Movie Database API," this module allows you to query popular movies, access movie details by ID, and perform searches based on specific parameters. To activate the local server, tweak the `readFromMyServer` variable located in `src\utils\settings.js` and set it to `true`. Further details on API usage can be found below.

## Core Highlights

-  **Custom Hooks**: Leveraging the power of custom hooks, I implemented a seamless approach to fetching data from the server.

-  **Contexts for Communication**: Three distinct contexts have been established to facilitate efficient data exchange among various components.

-  **Utility Functions and Settings**: Additional utility functions and settings were incorporated to enhance the user experience and ensure code manageability.

## Exploring the Client Module

Dive into the captivating world of the client module, which comprises six unique pages (components):

1. **Landing (Home) Page**:

   -  Discover the current most popular movies, sorted by their popularity.
   -  Embark on a search journey, sifting through millions of movies by name or context.
   -  Select a movie from the list to access its detailed information.
   -  Mark movies as favorites or add them to your shopping cart.
   -  Seamlessly navigate between pages.
   -  A dynamic banner showcases five randomly selected movies with enticing sale discount ratios. Select and add these discounted gems to your cart at special prices.

2. **Details Page**:

   -  Immerse yourself in comprehensive movie details, accompanied by a visually stunning large-size poster.

3. **Sale Page**:

   -  Delve into movie specifics, including price, discount rate, and final payment amount.
   -  Easily add the movie to your cart for a memorable movie-shopping experience.

4. **Favorites Page**:

   -  Access a curated collection of your favorite movies presented in an appealing card format, complete with additional information.

5. **About Page**:

   -  Find a brief introduction to the website set against a captivating faded background image.

6. **Film Strip Page** (Planned):
   -  Exciting things are on the horizon! A captivating page showcasing a film strip of random movies will be unveiled soon.

## Harnessing the Power of TMDB API

For an unparalleled array of movie data, I harnessed the potential of **The Movie Database API (TMDB)**. This API provides a treasure trove of information about countless movies. I focused on three key endpoints:

1. Endpoint to retrieve popular movies, elegantly displayed on the home page.
2. Endpoint enabling users to conduct movie searches based on specific terms.
3. Endpoint offering detailed information about a movie, as requested by its unique ID.

## Getting Started

To embark on this cinematic journey, ensure you have the necessary `.env` files for both the server and client modules. Your project setup will be complete, ready to unlock the wonders of Movie Frenzy.

Thank you for considering Movie Frenzy! Your feedback is invaluable as we strive to deliver an immersive movie experience like no other.
