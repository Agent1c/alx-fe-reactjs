import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <>
        <nav>
            <ul className="nav-list">
            <Link to="pages/home">Home</Link>
            <Link to="pages/about">About</Link>
            <Link to="pages/services">Service</Link>
            <Link to="pages/contact">Contact</Link>
            </ul>
        </nav>
        </>
    )
}

export default NavBar;