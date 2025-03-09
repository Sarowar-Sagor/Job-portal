import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewJobApplications = () => {
    const data = useLoaderData();

    const handleStatus = (e, id) => {

        const data = {
            status: e.target.value
        }

        fetch(`http://localhost:3000/job-applications/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your status has been updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // navigate('/myPostedJob');
                }
            })
    }

    return (
        <div>
            <div className="text-3xl">Applications for this job:{data.length} </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Github</th>
                            <th>Status</th>
                            {/* <th>View Applications</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data.map((job, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{job.applicant_email}</td>
                                <td>{job.github}</td>
                                <td>
                                    <select onChange={(e) => handleStatus(e, job._id)} defaultValue={job?.status || "Status"} className="select select-bordered select-xs w-full max-w-xs">
                                        <option disabled>Status</option>
                                        <option>Under Review</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                                {/* <td>
                                    <Link to={`/viewJobApplications/${job._id}`}>
                                        <button>viewApplications</button>
                                    </Link>
                                </td> */}
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewJobApplications;