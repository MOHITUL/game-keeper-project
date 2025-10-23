import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const MyProfile = () => {
    useEffect (() => {
            document.title = "MyProfile | GAMEKEEPER";
        },[]);
    const {user} = useContext(AuthContext);

    if (!user){
        return (
            <div>
                <h2>No user Logged in</h2>
            </div>
        )
    }
    return (
        <div className='max-w-md mx-auto mt-16 bg-white shadow-lg p-8 rounded-2xl text-center'>
            <img src={user.photoURL} alt="" className='h-24 w-24 rounded-full mx-auto border-4 border-[#632EE3] mb-4' />
            <h2 className='text-2xl font-bold text-[#632EE3] mb-2'>{user.displayName}</h2>
            <p className='text-gray-600 mb-2'>{user.email}</p>
        </div>
    );
};

export default MyProfile;