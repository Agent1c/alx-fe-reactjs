import UserDetails from './UserDetails';
import { useContext } from 'react';
import UserContext from './UserContext';

const UserInfo = () =>{
    const userData = useContext(UserContext)
    return <UserDetails userData={userData} />;
}

export default UserInfo;