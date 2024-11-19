import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const NavBar = () => {

    const { signOutUser, user, loading } = useContext(AuthContext);
    const allmenus = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link>Update Profile</Link></li>
        <li><Link>User Profile</Link></li>

    </>

    const handleSignOut = (e) => {
        e.preventDefault();
        signOutUser()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
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
                            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
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

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            {
                                user && <div className="w-10 rounded-full">
                                    <img alt="profile" src={user?.photoURL} />
                                </div>
                            }
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow">
                            <li><a>Profile</a></li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>

                    {
                        !loading && (user ? <button onClick={handleSignOut} className="btn text-xl">Logout</button> : <Link to={'/login'} className="btn text-xl">Login</Link>)
                    }


                </div>
            </div>
        </div >
    );
};

export default NavBar;