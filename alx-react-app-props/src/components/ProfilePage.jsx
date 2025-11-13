import UserContext from './UserContext';
import { useContext } from 'react';
import UserInfo from './UserInfo';

const ProfilePage = () => {
    const userData = useContext(UserContext) //
    
    return <UserInfo userData={userData} />
}

export default ProfilePage;


