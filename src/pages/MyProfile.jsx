import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';

const MyProfile = () => {
    useEffect (() => {
            document.title = "MyProfile | GAMEKEEPER";
        },[]);
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    
    return (
        <div className='max-w-md mx-auto mt-16 bg-white shadow-lg p-8 rounded-2xl text-center'>
            <img src={user.photoURL} alt="" className='h-24 w-24 rounded-full mx-auto border-4 border-[#632EE3] mb-4' />
            <h2 className='text-2xl font-bold text-[#632EE3] mb-2'>{user.displayName}</h2>
            <p className='text-gray-600 mb-2'>{user.email}</p>
            {/* update */}
            <button onClick={() => navigate("/update-profile")} className='bg-[#632EE3] text-white px-6 py-2 rounded-lg hover:bg-[#5221b0] cursor-pointer mt-10'>Update Profile</button>
        </div>
    );
};

export default MyProfile;