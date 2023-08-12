import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
   return (
      <nav className="navigation">
         <ul className="nav-list">
            <li className="nav-item">
               <Link to="/" className="nav-link">
                  Home
               </Link>
            </li>
            <li className="nav-item">
               <Link to="/favorites" className="nav-link">
                  Favorites
               </Link>
            </li>
            <li className="nav-item">
               <Link to="#" className="nav-link">
                  Film Strip
               </Link>
            </li>
            <li className="nav-item">
               <Link to="/about" className="nav-link">
                  About
               </Link>
            </li>
         </ul>
      </nav>
   );
};

export default Navigation;
