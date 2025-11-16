import NavBar from "../src/components/Navbar";

function Home() {
    return (
        <>
            <NavBar />
            <div style={{ padding: '20px' }}>
                <h1>Welcome to Our Company</h1>
                <p>We are dedicated to delivering excellence in all our services.</p>
            </div>
        </>
    );
}

export default Home;