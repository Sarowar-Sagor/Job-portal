import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
    const { _id, title, company_logo, company, description, salaryRange, requirements, location, jobType, category, status } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className="flex items-center gap-3 mt-2 ml-2">
                <figure>
                    <img className="w-14"
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h3>{company}</h3>
                    <p className="flex items-center gap-1"> <CiLocationOn className="text-lg"></CiLocationOn> {location}</p>
                </div>
            </div>
            <div className="p-3">
                <h2 className="card-title">{title}</h2>
                <div className="flex gap-4 my-2">
                    <p className="btn">{jobType}</p>
                    <p className="btn">{category}</p>
                </div>
                <p>{description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {
                        requirements.map((skill,index) => <p key={index} className="bg-base-200 p-2 rounded-md">{skill}</p>)
                    }
                </div>
                <div className="my-2">
                    <p className="flex items-center"> Salary: <CiDollar className="mx-1 text-lg"></CiDollar> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/jobs/${_id}`}>
                        <button className="btn btn-primary">Apply Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;