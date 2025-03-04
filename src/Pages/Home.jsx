import Banner from "./Banner";
import HotJobs from "./HotJobs";

const Home = () => {
    return (
        <div>
            <h2 className="font-bold">This is home</h2>
            <Banner></Banner>
            <HotJobs></HotJobs>
        </div>
    );
};

export default Home;