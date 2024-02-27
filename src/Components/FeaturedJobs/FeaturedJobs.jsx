import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [showAllJobs, setShowAllJobs] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/jobs.json");
        const data = await response.json();
        setFeaturedJobs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleShowAllJobs = () => {
    setShowAllJobs(true);
  };

  return (
    <div>
      <h1 className="text-4xl text-center font-semibold border-b-2 border-b-gray-500 m-5 p-5">
        Featured Jobs 
      </h1>
      <div className="grid grid-cols-2 gap-6">
        {featuredJobs.slice(0, showAllJobs ? featuredJobs.length : 4).map((job, index) => (
          <FeaturedJob key={index} job={job} />
        ))}
      </div>
      {!showAllJobs && (
        <div className="text-center mt-4">
          <button
            onClick={handleShowAllJobs}
            className="btn btn-primary"
          >
            More Jobs
          </button>
        </div>
      )}
      {showAllJobs && (
        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            disabled
          >
            All Jobs Displayed
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedJobs;
