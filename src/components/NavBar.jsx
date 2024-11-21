import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';


const NavBar = () => {
    const navigate = useNavigate();

    const { signOutUser, user, loading } = useContext(AuthContext);


    const allmenus = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/profile'} >My Profile</NavLink></li>
        <li><NavLink to={'/update-profile'}>Update Profile</NavLink></li>

    </>

    const handleSignOut = (e) => {
        e.preventDefault();
        signOutUser()
            .then(() => {
                navigate('/');
            }).catch((error) => {
                toast.error (error.code);
            });
    }


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[2] mt-3 w-52 p-2 shadow">
                            {
                                allmenus
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-3xl">Montora</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="text-xl menu menu-horizontal px-1">

                        {
                            allmenus
                        }

                    </ul>
                </div>
                <div className="navbar-end">

                    {/*  */}

                    {user && <div className="dropdown-end">
                        <div className="mx-4 tooltip tooltip-bottom" data-tip={user?.displayName}>
                            <Link to={'/profile'} className="btn btn-ghost btn-circle avatar">
                                {
                                    user && <div className="w-10 md:w-14 rounded-full">
                                        <img alt="profile" src={user?.photoURL} />
                                    </div>
                                }
                            </Link>
                        </div>
                    </div>}

                    {
                        !loading && (user ? <button onClick={handleSignOut} className="btn btn-md rounded-none hover:bg-[#ff8900] bg-[#549064] text-white text-lg">Logout</button> : <Link to={'/login'} className="btn btn-md hover:bg-[#ff8900] bg-[#549064] border-none rounded-none text-white text-lg">Login</Link>)
                    }


                </div>
            </div>
        </div >
    );
};

export default NavBar;