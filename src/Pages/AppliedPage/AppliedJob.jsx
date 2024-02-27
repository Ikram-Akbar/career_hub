import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobsApplication } from "../../Utility/LocalStorage";
import AppliedJobCard from "../../Components/AppliedJobCard/AppliedJobCard";
import bg from "../../assets/images/bg2.png";

const AppliedJob = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter((job) => job.remote_or_onsite === "Remote");
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter((job) => job.remote_or_onsite === "Onsite");
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobsIds = getStoredJobsApplication();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobsIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  return (
    <div className="container mx-auto">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="mx-10 p-10 text-center text-4xl ">
          You have Applied Jobs: {appliedJobs.length}
        </h1>
        <div className="flex justify-end">
          <details className="dropdown">
            <summary className="m-1 btn bg-slate-400">Filter</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <a onClick={()=>handleJobsFilter("all")}>All</a>
              </li>
              <li>
                <a onClick={()=>handleJobsFilter("remote")}>Remote</a>
              </li>
              <li>
                <a onClick={()=>handleJobsFilter("onsite")}>Onsite</a>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <div className="grid md:grid-cols-2 p-10 gap-4 shadow-xl ">
        {displayJobs.map((job) => (
          <AppliedJobCard key={job.key} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
