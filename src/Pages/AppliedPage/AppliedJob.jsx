import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobsApplication } from "../../Utility/LocalStorage";
import AppliedJobCard from "../../Components/AppliedJobCard/AppliedJobCard";
import bg from "../../assets/images/bg2.png";

const AppliedJob = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);

  // stored jobs data :
  useEffect(() => {
    const storedJobsIds = getStoredJobsApplication();

    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter((job) => storedJobsIds.includes(job.id));
      const jobsApplied = [];
      for (const id of storedJobsIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
    }
  }, [jobs]);

  return (
    <div>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="mx-10 p-10 text-center text-4xl ">
          You have Applied Jobs: {appliedJobs.length}
        </h1>
      </div>
      <div className="grid md:grid-cols-2 p-10 gap-4 shadow-xl ">
        {appliedJobs.map((job) => (
          <AppliedJobCard key={job.key} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
