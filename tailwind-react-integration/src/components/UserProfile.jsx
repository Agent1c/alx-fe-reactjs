const UserProfile = () => {
    // const User = "https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
            {/* <img className="rounded-full h-36 height-36 mx-auto" src={User} alt="User" /> */}
            <img className="rounded-full h-36 height-36 mx-auto" src="https://via.placeholder.com/150" alt="User" />
            <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
            <p className="text-gray-600 text-base">Developer at Example Co.
                Loves to write code and explore new technologies.</p>
        </div>
    )
}
export default UserProfile;