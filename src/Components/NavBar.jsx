import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="h-16 bg-black flex text-white justify-between items-center p-0 px-16">
      <Link to="/">
        <h2>PEAK PERFORMANCE</h2>
      </Link>
      <Link>
        <h3>Register</h3>
      </Link>
    </nav>
  );
}

export default NavBar;
