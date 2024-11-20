import { Link, useLocation, useNavigate } from 'react-router-dom';
import bgImage from '../assets/banner/slider-2.webp'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { signInUser, setUser, signInWithGoogle, resetUserPassword } = useContext(AuthContext);

    const location = useLocation();
    console.log(location.state)

    const navigate = useNavigate();

    const handleLoginWithEmail = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signInUser(email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                setUser(user);
                navigate(location?.state ? location.state : '/');


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
            });

    }

    const googleProvider = new GoogleAuthProvider();

    const handleSignInWithGoogle = (e) => {
        e.preventDefault();

        signInWithGoogle(googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : '/');


            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });

    }

    const handleForgetPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        resetUserPassword(email)
            .then(() => {
                // Password reset email sent!
                // ..
                console.log('password reset email sent')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    return (
        <div>
            <div style={{ backgroundImage: `url(${bgImage})` }} className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <h1 className="text-2xl font-bold  mx-auto">Login now!</h1>
                    <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
                        <div className='card-body'>
                            <form onSubmit={handleLoginWithEmail}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="Enter Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="Enter Password" className="input input-bordered" required />
                                    <label className="label">
                                        <a onClick={() => document.getElementById('my_modal_5').showModal()} href="#" className="link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-4">
                                    <button className="btn btn-primary">Login</button>
                                </div>

                            </form>
                            <div className='border-t border-1 border-blue-600 border-dotted mt-4'></div>
                            <div className="form-control mt-2">
                                <button onClick={handleSignInWithGoogle} className="btn btn-primary">Login with Google</button>
                            </div>
                            <label className="label">
                                <p>Are you new here? <Link to={'/register'} className='underline text-blue-600'>Sign Up</Link> </p>
                            </label>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg pb-3">Password Reset</h3>
                                    <form onSubmit={handleForgetPassword}>
                                        <div className="form-control">
                                            <input name='email' type="email" placeholder="Enter Email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control mt-4">
                                            <button className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                    <p className="py-4">Press ESC key or click the button below to close</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;