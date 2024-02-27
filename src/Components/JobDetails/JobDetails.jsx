import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../../Utility/LocalStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const handleApplyJobs = () => {
    saveJobApplication(idInt);
    window.alert("apply successfully");
  };

  return (
    <div>
      <h1 className="m-10 p-10 text-center text-4xl">Job Details </h1>
      <div className="grid md:grid-cols-5 gap-4 shadow-xl">
        <div className="border md:col-span-3">
          <div className="m-5 p-10  bg-slate-300 rounded">
            <h1 className="font-bold text-2xl border-b-2 border-indigo-500">
              Job Description :{" "}
            </h1>
            <p className="text-slate-600 mt-2 text-justify">
              {job?.job_description}
            </p>
            <h1 className="font-bold text-2xl border-b-2 border-indigo-500">
              Job Responsibility :{" "}
            </h1>
            <p className="text-slate-600  mt-2 text-justify">
              {job?.job_responsibility}
            </p>
            <h1 className="font-bold text-2xl border-b-2 border-indigo-500">
              {" "}
              Educational Requirements :{" "}
            </h1>
            <p className="text-slate-600  mt-2">
              {job?.educational_requirements}
            </p>
            <h1 className="font-bold text-2xl border-b-2 border-indigo-500">
              Experience :{" "}
            </h1>
            <p className="text-slate-600  mt-2">{job?.experiences}</p>
          </div>
        </div>

        <div className="border p-10 md:col-span-2 bg-slate-300 rounded my-5">
          <>
            <h1 className="font-bold text-2xl border-b-2 border-indigo-500">
              Job Details
            </h1>
            <p className="font-medium">
              Salary :{" "}
              <span className="text-slate-600"> {job?.salary} (Per Month)</span>
            </p>
            <p className="font-medium">
              {" "}
              Job Title :{" "}
              <span className="text-slate-600">{job?.job_title} </span>{" "}
            </p>
            <h1 className="font-bold mt-2 text-2xl border-b-2 border-indigo-500">
              Contact Information
            </h1>
            <p className="font-medium">
              Phone :{" "}
              <span className="text-slate-600">
                {job?.contact_information?.phone}{" "}
              </span>
            </p>
            <p className="font-medium">
              Email :
              <span className="text-slate-600">
                {" "}
                {job?.contact_information?.email}
              </span>{" "}
            </p>
            <p className="font-medium">
              Address :
              <span className="text-slate-600">
                {" "}
                {job?.contact_information?.address}{" "}
              </span>
            </p>
          </>
          <button
            onClick={handleApplyJobs}
            className="btn btn-primary w-full mt-2"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
