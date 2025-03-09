import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleJobApplication = e => {
        e.preventDefault();

        const form = e.target;
        const github = form.github.value;
        const linkedIn = form.linkedIn.value;
        const resume = form.resume.value;

        // console.log({ github, linkedIn, resume });
        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            github,
            resume
        }

        fetch('http://localhost:3000/job-applications', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your application has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/myapplication');
            }
        })
    }
    return (
        <div className="bg-base-300 w-[40%] mx-auto">
            <h2 className="font-semibold text-2xl text-center pt-8">Apply to your desire job!!</h2>
            <form onSubmit={handleJobApplication} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Github URL</span>
                    </label>
                    <input type="url" name="github" placeholder="Github" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">LinkedIn URL</span>
                    </label>
                    <input type="url" name="linkedIn" placeholder="LinkedIn" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume URL</span>
                    </label>
                    <input type="url" name="resume" placeholder="Resume" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-neutral rounded-none">Apply</button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;