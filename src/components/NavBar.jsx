import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <Link to="/play">Play</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/settings">Information</Link>
    </nav>
  );
}

export default NavBar;
