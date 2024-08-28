import { Link } from "react-router-dom";
import { useState } from "react";
import img from "../assets/img/img"



function Nav() {
  const[visibility,setVisibility]=useState(false)
  
  
  return (
    <header className="nav-header">
      <div className="nav-icon">
        <img  className="img-icon" src={img.iconNav} alt="" />
        <h4>One Piece</h4>
      </div>
      <nav className="nav">
        <span className="nav-bar" onClick={()=>{setVisibility(!visibility)}}>
          <i className='bx bx-menu'></i>
        </span>
        <ul className= {`nav-ul-menu ${visibility ? "visibility" : ""}`} >
          <li className="nav-link">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="nav-link">
            <Link to={"/home/Boats"}>Boats</Link>
          </li>
          <li className="nav-link">
            <Link to={"/home/Characters"}>Characters</Link>
          </li>
          <li className="nav-link">
            <Link to={"/home/Episodes"}>Episodes</Link>
          </li>
          <li className="nav-link">
            <Link to={"/home/Fruits"}>Fruits</Link>
          </li>
          <li className="nav-link">
            <Link to={"/home/Locations"}>Locations</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
