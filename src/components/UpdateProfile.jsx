import React, { useContext } from 'react';
import bgImage from '../assets/banner/slider-2.webp';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const UpdateProfile = () => {

    const {updateUserProfile, setLoading} = useContext(AuthContext);

    const navigate = useNavigate();
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        setLoading (true);
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo-url');

        updateUserProfile ({displayName: name, photoURL: photo})
        .then (()=> {
            setLoading (false);
            navigate('/profile');
        })
        .catch((error)=>console.log (error));
            
    }
    return (
        <div>
            <div style={{ backgroundImage: `url(${bgImage})` }} className="hero bg-base-200 min-h-screen">
                <div className=" hero-content flex-col">
                    <h1 className="text-2xl font-bold  mx-auto">Update Your Profile</h1>
                    <div className="card glass w-96 shrink-0 shadow-2xl">
                        <div className='card-body'>
                            <form onSubmit={handleUpdateProfile}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="">Name</span>
                                    </label>
                                    <input name='name' type="text" placeholder="Your Name" className="glass input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="">Photo URL</span>
                                    </label>
                                    <input name='photo-url' type="text" placeholder="Enter Photo URL" className="glass input input-bordered" required />
                                </div>
                                <div className="form-control mt-4">
                                    <button className="btn btn-primary text-white border-none hover:bg-[#ff8900] bg-[#04335E]">Update</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;