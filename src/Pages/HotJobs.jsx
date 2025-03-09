import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [sort, setSort] = useState(false);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3000/jobs?sort=${sort}&search=${search}`)
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [sort, search])

    return (
        <div>
            <div className="bg-base-300 mt-2 py-2 flex items-center gap-5">
                <button onClick={() => setSort(!sort)} className={`btn btn-neutral ml-3 ${sort && 'btn-success'}`}>{sort ? "Sorted" : "sort by salary"}</button>
                <input onKeyUp={(e) => setSearch(e.target.value)} type="text" className="input w-96" placeholder="Search jobs by location" />
            </div>

            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>

        </div>
    );
};

export default HotJobs;