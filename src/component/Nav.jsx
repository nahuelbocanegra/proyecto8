import { Link } from "react-router-dom";



function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <Link to={"/home/Boats"}>home</Link>
          </li>
          <li>
            <Link to={"/home/Characters"}>home</Link>
          </li>
          <li>
            <Link to={"/home/Episodes"}>home</Link>
          </li>
          <li>
            <Link to={"/home/Fruits"}>home</Link>
          </li>
          <li>
            <Link to={"/home/Locations"}>home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
