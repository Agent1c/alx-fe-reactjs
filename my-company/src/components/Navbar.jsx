import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <ul className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Service</Link>
                    <Link to="/contact">Contact</Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;