import Banner from "../../Components/Banner/Banner";
import FeaturedJobs from "../../Components/FeaturedJobs/FeaturedJobs";
import JobCategories from "../../Components/JobCategories/JobCategories";


const Home = () => {
    return (
        <div>
            <Banner/>
            <JobCategories/>
            <FeaturedJobs/>
            <h1>Career Home page  </h1>
        </div>
    );
};

export default Home;