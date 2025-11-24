const UserProfile = () => {
    // const User = "https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <div className="container">
            <div className="user-profile bg-gray-100 sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center">
                {/* <img className="rounded-full w-24 h-24 md:w-36 md:h-36 mx-auto mb-4" src={User} alt="User" /> */}
                <img className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto mb-4" src="https://via.placeholder.com/150" alt="User" />
                <h1 className="sm:text-lg md:text-xl text-blue-800 my-4">Freaky Coding!</h1>
                <p className="sm:text-sm md:text-base text-gray-600">Developer at Example Co.
                    Loves to write code and explore new technologies.</p>
            </div>
        </div>
    )
}
export default UserProfile;
