import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
const FeaturedJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="" src={logo} alt="company logo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4">
            {job_type}
          </button>
        </div>
        <div className="flex">
          <h2 className="flex mt-2 mr-2">
            {" "}
            <CiLocationOn className="text-2xl mr-2" />
            {location}
          </h2>
          <h2 className="flex mt-2">
            {" "}
            <CiBadgeDollar className="text-2xl mr-2" />
            {salary}
          </h2>
        </div>
        <div className="card-actions ">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">More Details </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

FeaturedJob.propTypes = {
  job: PropTypes.object.isRequired,
};

export default FeaturedJob;
