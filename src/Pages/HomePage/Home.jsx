import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import FeaturedJobs from "../../Components/FeaturedJobs/FeaturedJobs";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <FeaturedJobs/>
            <h1>Career Home page  </h1>
        </div>
    );
};

export default Home;