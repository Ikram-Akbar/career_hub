import PropTypes from "prop-types";

const AppliedJobCard = ({ job }) => {
  const { logo, job_title, remote_or_onsite, company_name } = job;
  console.log(job);

  return (
    <div>
      <div className="card lg:card-side  bg-slate-300 p-2 shadow-xl">
        <figure>
          <img src={logo} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p className="badge bg-red-300">{company_name}</p>
          <p className="badge bg-green-300">{remote_or_onsite}</p>
          <div className="card-actions">
            <button className="btn btn-primary w-full">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

AppliedJobCard.propTypes = {
  job: PropTypes.object.isRequired,
};

export default AppliedJobCard;
