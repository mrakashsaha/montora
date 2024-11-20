import React, { useContext } from 'react';
import bgImage from '../assets/banner/slider-3.webp'
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div style={{ backgroundImage: `url(${bgImage})` }} className="hero bg-base-200 min-h-screen">
            <div className="card glass w-96">
                    <h2 className='text-xl text-center py-3'>Profile Information</h2>
                <figure>
                    <div className="avatar pt-5 pb-2">
                        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                </figure>
                <div className="card-body items-center">
                    <p className=''>Welcome back,</p>
                    <h2 className="card-title">{user?.displayName}</h2>
                    <p>Email: {user?.email}</p>
                    <div className="card-actions">
                        <Link to={'/update-profile'} className="btn btn-primary">Update Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;