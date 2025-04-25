import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar" role="navigation">
      <NavLink to="/" className= "active">
        Home
      </NavLink>
      <NavLink
        to="/directors"
        className= "active"
      >
        Directors
      </NavLink>
      <NavLink
        to="/actors"
        className= "active"
      >
        Actors
      </NavLink>
      <NavLink
        to="/movie/"
        className= "active"
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default NavBar;
