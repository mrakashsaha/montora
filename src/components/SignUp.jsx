import React, { useContext, useState } from 'react';
import bgImage from '../assets/banner/slider-3.webp';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import PageTitle from './PageTitle';
import { IoEye, IoEyeOff } from 'react-icons/io5';

const SignUp = () => {

    const { createNewUser, setUser, signInWithGoogle, updateUserProfile} = useContext(AuthContext);
    const [error, setError] = useState (false);
    const [visiable, setVisiable] = useState (false);
    const navigate = useNavigate();
    const handleSignUpWithEmail = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo-url');
        const password = form.get('password');
        const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if (!regex.test(password)) {
            setError (true);
            return;
        }
        else {
            setError (false);
        }


        createNewUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                updateUserProfile ({displayName: name, photoURL: photo})
                .then (()=> navigate('/'))
                .catch((error)=>toast.error(error.code));

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error (error.code);
                
            });

            
    }
    const googleProvider = new GoogleAuthProvider();
    const handleSignUpWithGoogle = (e) => {
        e.preventDefault();

        signInWithGoogle(googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const user = result.user;
                setUser(user);

            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                toast.error (error.code);
            });

    }

    return (
        <div>
            <PageTitle title={'Montora | Sign Up'}></PageTitle>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <h1 className="text-2xl font-bold  mx-auto">Sign Up Today!</h1>
                    <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
                        <div className='card-body'>
                            <form onSubmit={handleSignUpWithEmail}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="">Name</span>
                                    </label>
                                    <input name='name' type="text" placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="Enter Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="">Photo URL</span>
                                    </label>
                                    <input name='photo-url' type="text" placeholder="Enter Photo URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="">Password</span>
                                    </label>
                                    <input name='password' type={visiable ? "text":"password"} placeholder="Enter Password" className="input input-bordered" required />
                                    <a onClick={()=>setVisiable(!visiable)} className='btn btn-sm btn-circle absolute right-2 top-12' > {visiable ? <IoEyeOff className='text-lg'></IoEyeOff>:<IoEye className='text-lg'></IoEye>}  </a>
                                </div>

                                {
                                    error && <p className='text-[#EA4335] text-sm pt-2'>Error: Password must contain uppercase, lowercase and at least 6 characters long.</p>
                                }
                                <div className="form-control mt-4">
                                    <button className="btn btn-primary text-white border-none hover:bg-[#ff8900] bg-[#04335E]">Sign Up</button>
                                </div>

                            </form>
                            <div className='border-t border-1 border-blue-600 border-dotted mt-4'></div>
                            <div className="form-control mt-2">
                                <button onClick={handleSignUpWithGoogle} className="btn btn-primary hover:bg-[#b9362a] bg-[#EA4335] text-white border-none"> <FaGoogle></FaGoogle> Sign Up with Google</button>
                            </div>
                            <label className="label">
                                <p>Already have an Account? <Link to={'/login'} className='underline text-[#EA4335]'>Login</Link> </p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;