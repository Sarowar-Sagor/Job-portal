import Swal from 'sweetalert2';
import '../../index.css';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {

    const { user } = useAuth();
    const navigate = useNavigate();

    const handleJob = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const allData = Object.fromEntries(formData.entries());
        const { min, max, currency, ...newJob } = allData;
        newJob.salaryRange = { min: parseInt(min), max: parseInt(max), currency };
        // console.log(min, max);
        newJob.responsibilities = newJob.responsibilities.split('\n');
        newJob.requirements = newJob.requirements.split('\n');
        // console.log(newJob);

        fetch('https://job-portal-server-mu.vercel.app/jobs', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your job post has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myPostedJob');
                }
            })
    }

    return (
        <div>
            <div className="bg-base-300 w-[60%] mx-auto">
                <h2 className="font-semibold text-2xl text-center pt-8">Post a new job</h2>
                <form onSubmit={handleJob} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Location" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company Name</span>
                        </label>
                        <input type="text" name="company" placeholder="Company" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Type</span>
                        </label>
                        <select name='jobType' defaultValue={"Pick the best job type for you"} className="select w-full max-w-xs">
                            <option disabled>Pick the best job type for you</option>
                            <option>Remote</option>
                            <option>Full-Time</option>
                            <option>Part-Time</option>
                            <option>Hybrid</option>
                            <option>Contractual</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Field</span>
                        </label>
                        <select name='category' defaultValue={"Pick the best job field for you"} className="select w-full max-w-xs">
                            <option disabled >Pick the best job field for you</option>
                            <option>Engineering</option>
                            <option>Teaching</option>
                            <option>Data-Science</option>
                            <option>Marketing</option>
                            <option>Management</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <div className="flex gap-2">
                            <input type="number" name="min" placeholder="Min" className="input input-bordered" required />
                            <input type="number" name="max" placeholder="Max" className="input input-bordered" required />
                            <select name='currency' defaultValue={"Currency"} className="select bg-white w-full max-w-xs">
                                <option disabled>Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>EUR</option>
                                <option>POUND</option>
                                <option>GBP</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Description</span>
                        </label>
                        <textarea name="description" className="textarea" placeholder="Description" required></textarea>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Requirements</span>
                        </label>
                        <textarea name="requirements" className="textarea" placeholder="Write your each requirement in single line" required></textarea>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Responsibilities</span>
                        </label>
                        <textarea name="responsibilities" className="textarea" placeholder="Write your each responsibility in single line" required></textarea>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">HR Name</span>
                        </label>
                        <input type="text" name="hr_name" placeholder="HR Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">HR Email</span>
                        </label>
                        <input readOnly type="email" defaultValue={user?.email} name="hr_email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company Logo URL</span>
                        </label>
                        <input type="url" name="company_logo" placeholder="Company Logo" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Application Deadline</span>
                        </label>
                        <input type="date" name="applicationDeadline" className="input input-bordered" required />
                    </div>

                    {/* submit button */}
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;