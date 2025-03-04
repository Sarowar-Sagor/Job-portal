import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerAnimation from '../assets/Lottie/Register.json';
import AuthContext from '../Context/AuthContext/AuthContext';
import { Link } from 'react-router-dom';
import SocialLogin from './Shared/SocialLogin';


const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{6,}$/;

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);

        //password validation
        if (regex.test(password)) {
            alert('Password is strong');
        }
        else {
            alert('Password is weak');
        }

        createUser(email, password) 
        .then(result => {
            const user = result.user;
            // console.log(user);
        })
        .catch(error => {
            // console.log(error.message);
        })
    }

    return (
        <div className='flex max-w-3xl mx-auto items-center'>
            <div className="bg-base-300 w-3/5">
                <h2 className="font-semibold text-2xl text-center pt-8">Register your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div> */}
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
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                </form>
                <p className="pb-8 text-center font-medium">Already have an account? <Link to="/login" className="text-red-500">Login</Link></p>
                <SocialLogin></SocialLogin>
            </div>
            <div className='w-2/5'>
                <Lottie animationData={registerAnimation} loop={true}></Lottie>
            </div>
        </div>

    );
};

export default Register;