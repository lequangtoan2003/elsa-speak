import React from 'react';
import leftarrowIcon from '../assets/leftarrowicon.png';
import { Link } from 'react-router-dom';
import AccountList from '../components/AccountList';

const ProfileDetails = () => {
  return (
    <div className="bg-home h-screen overflow-y-auto scrollbar-hide">
      {/* Header cố định */}
      <div className="w-full text-xl font-semibold py-2 px-4 bg-home text-color sticky top-0 z-20">
        <div className="flex gap-2 items-center">
            <Link to="/profile"><img className='w-5 h-5' src={leftarrowIcon} alt="" /></Link>
        <div className="">Account</div>
        </div>
        <div className="border-b border-gray-200 pt-5"></div>
      </div>

      {/* Nội dung có thể cuộn */}
      <div className="px-4">
        <AccountList />
      </div>
    </div>
  );
}

export default ProfileDetails;