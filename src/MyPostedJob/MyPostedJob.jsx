import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostedJob = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/jobs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [user?.email])

    return (
        <div>
            <h2>My job post: {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Deadline</th>
                            <th>Application Count</th>
                            <th>View Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map((job, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td>{job?.applicationCount}</td>
                                <td>
                                    <Link to={`/viewJobApplications/${job._id}`}>
                                        <button>viewApplications</button>
                                    </Link>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJob;