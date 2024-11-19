import { Link, useLocation, useNavigate } from 'react-router-dom';
import bgImage from '../assets/banner/slider-2.webp'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { signInUser, setUser, signInWithGoogle } = useContext(AuthContext);

    const location = useLocation();
    console.log (location.state)

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
                                        <a href="#" className="link link-hover">Forgot password?</a>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;