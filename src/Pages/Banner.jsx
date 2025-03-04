import { easeInOut } from "motion";
import { motion } from "motion/react";
import team1 from '../assets/Team/team1.jpg';
import team2 from '../assets/Team/team2.png';

const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <motion.img
                    animate={{y: [0, 50, 0]}}
                    transition={{duration: 8, repeat: Infinity}}
                        src={team1}
                        className="max-w-sm rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-blue-700 shadow-2xl" />
                    <motion.img
                    animate={{x: [60, 100, 60]}}
                    transition={{duration: 8, repeat: Infinity, delay: 4, ease: easeInOut}}
                        src={team2}
                        className="max-w-sm rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-orange-600 shadow-2xl" />
                </div>

                <div className="flex-1 ml-52">
                    <motion.h1
                    animate = {{x: 50}}
                    transition={{duration: 2, delay: 1, repeat: Infinity, ease: easeInOut}}
                     className="text-5xl font-bold">Exciting <motion.span
                     animate = {{color: ['#ff5733', '#a5ff33']}}
                     transition={{duration: 2, repeat: Infinity}}
                     >Job</motion.span> For You!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;