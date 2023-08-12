export const baseImgUrlTMDB = "https://image.tmdb.org/t/p/w500";
export const baseUrlTMDB = `https://api.themoviedb.org/3/`;
export const searchUrlTMDB = `${baseUrlTMDB}search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=`;
const discoverTMDB = `discover/movie?api_key=`;
export const discoverUrlTMDB = `${baseUrlTMDB}${discoverTMDB}${process.env.REACT_APP_API_KEY}`;

export const readFromMyServer = false;
