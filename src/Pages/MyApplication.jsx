import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const MyApplication = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        // fetch(`http://localhost:3000/job-application?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => setJobs(data))

        // axios.get(`http://localhost:3000/job-application?email=${user.email}`, {withCredentials: true})
        // .then(res => setJobs(res.data))

        axiosSecure.get(`/job-application?email=${user.email}`)
        .then(res => setJobs(res.data))
        
    }, [user.email])

    return (
        <div>
            <h2>My application: {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead >
                        <tr>
                            <th>Job</th>
                            <th>Resume</th>
                            <th>Deadline</th>
                            <th>jobType</th>
                            {/* <th></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map(job => <tr key={job._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job.company_logo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job.title}</div>
                                            <div className="text-sm opacity-50">{job.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {job.resume}
                                </td>
                                <td>{job.applicationDeadline}</td>
                                <td>{job.jobType}</td>
                                {/* <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th> */}
                            </tr>)
                        }

                    </tbody>
                    {/* foot */}

                </table>
            </div>
        </div>
    );
};

export default MyApplication;