import PropTypes from 'prop-types'; 
const FeaturedJob = ({ fjob }) => {
  const { logo } = fjob;
  return (
    <div>
      <img src={logo} alt="" />
    </div>
  );
};

FeaturedJob.propTypes ={
    fjob: PropTypes.object.isRequired,
}

export default FeaturedJob;
