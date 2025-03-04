import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext/AuthContext';
import img from '../../assets/jobicon.png'

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
        .then(() => {
            // console.log("sign out successfully");
        })
        .catch(error => {
            // console.log(error.message);
        })
    }
    const navlinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/myapplication"}>My Applications</NavLink></li>
        <li><NavLink to={"/addJob"}>Add Job</NavLink></li>
        <li><NavLink to={"/myPostedJob"}>My Job Post</NavLink></li>
    </>
    return (
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img className='w-9' src={img} alt="" /> Job Portal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button  onClick={handleSignOut}>Sign Out</button> : <>
                        <Link to={"/register"}>Register</Link>
                        <Link to={"/login"}>
                            <button className='ml-2 btn-ghost'>Sign in</button>
                        </Link>
                    </>
                }

            </div>
        </div>
    );
};

export default Navbar;