import { useEffect } from "react";
import { useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-center">
        Featured Jobs - {featuredJobs.length}
      </h1>
      <div>
        {featuredJobs.map((fjob) => (
          <FeaturedJob key={fjob.id} fjob={fjob} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
