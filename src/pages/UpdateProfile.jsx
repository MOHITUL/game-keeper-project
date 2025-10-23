import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';

const Updateprofile = () => {
    useEffect(() => {
        document.title = "Update Profile | GAMEKEEPER"
    },[]);

    const {user} = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        if(!user) return;

        updateProfile(user, {
            displayName: name,
            photoURL: photoURL,
        })
        .then(() => {
            toast.success("Updated Profile!");
            navigate("/profile")
        })
        .catch((error) => {
            
            console.error("Error Updating Profile:", error);
        });
    };
    return (
        <div className='max-w-md mx-auto mt-15 bg-white shadow-lg p-15 rounded-xl'>
            <h2 className='text-2xl font-bold text-[#632EE3] text-center mb-6'>Update Profile</h2>
             <form onSubmit={handleUpdate} className="space-y-5">
        <div>
          <label className="block text-gray-700 mb-2">Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#632EE3]"
            placeholder="New PhotoURL"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#632EE3]"
            placeholder="New Name"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-sm font-semibold  text-white py-2 rounded-lg hover:bg-[#5221b0] cursor-pointer mt-5"
        >
          Update Information
        </button>
      </form>
        </div>
    );
};

export default Updateprofile;