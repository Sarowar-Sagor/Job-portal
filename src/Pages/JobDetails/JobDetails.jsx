import { CiDollar } from 'react-icons/ci';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const { _id, title, company_logo, company, description, salaryRange, requirements, location, jobType, category, status, responsibilities, applicationDeadline, hr_email, hr_name } = useLoaderData();
    return (
        <div className='border-2 bg-slate-200 pl-3 space-y-3 pb-2'>
            <h2 className='text-2xl font-semibold'>Job details for {title}</h2>
            <p>Company Name: {company}</p>
            <p>Location: {location}</p>
            <p>Deadline: {applicationDeadline}</p>
            <p>{description}</p>
            <div className="flex gap-2">
                <p className="btn">{jobType}</p>
                <p className="btn">{category}</p>
                <p className="btn">{status}</p>
            </div>
            <div>
                <span className='font-semibold'>Responsibilites:</span>
                {
                    responsibilities.map(res => <li>{res}</li>)
                }
            </div>
            <span className='font-semibold'>Requirements: </span>
            <div className="flex gap-2">
                {
                    requirements.map((skill, index) => <p key={index} className="bg-base-200 p-2 rounded-md">{skill}</p>)
                }
            </div>
            <div>
                <p className="flex items-center"> Salary: <CiDollar className="mx-1 text-lg"></CiDollar> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
            </div>
            <Link to={`/jobapply/${_id}`}>
                <button className="btn btn-primary">Apply Now</button>
            </Link>

        </div>
    );
};

export default JobDetails;