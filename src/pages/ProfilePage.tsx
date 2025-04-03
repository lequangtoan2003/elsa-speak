import React from 'react';
import ProfileList from '../components/ProfileList';


const ProfilePage: React.FC = () => {
    return (
        <div className="bg-gray-200 w-[95%] h-[95%] m-auto mt-5">
            <ProfileList />
        </div>
    );
};

export default ProfilePage;
