import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div style={{
            backgroundColor: "#271527ff",
            display: "justifyContent",
            padding: '20px',

        }}>
            <nav>
                <ul className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Service</Link>
                    <Link to="/contact">Contact</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
