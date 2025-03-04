import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginAnimation from '/src/assets/Lottie/Login.json';
import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import SocialLogin from "./Shared/SocialLogin";
import axios from "axios";

const Login = () => {

    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const loc = useLocation();
    const setRoute = loc?.state || "/";

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signInUser(email, password)
            .then(result => {
                // console.log(result.user.email);
                navigate(setRoute);
            })
            .catch(error => {
                // console.log(error.message);
            })

    }

    return (
        <div className='flex max-w-3xl mx-auto items-center'>
            <div className="bg-base-300 w-3/5">
                <h2 className="font-semibold text-2xl text-center pt-8">Login to your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                </form>
                <p className="pb-8 text-center font-medium">New to the website? <Link to="/register" className="text-red-600">Register</Link></p>
                <SocialLogin></SocialLogin>
            </div>
            <div className='w-2/5'>
                <Lottie animationData={loginAnimation} loop={true}></Lottie>
            </div>
        </div>

    );
};

export default Login;