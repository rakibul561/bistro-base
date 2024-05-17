import PopolarMenu from "../Pagse/Poppolar/PopolarMenu";
import Banner from "./Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import Review from "./Review/Review";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopolarMenu></PopolarMenu>
            <Featured></Featured>
            <Review></Review>
        </div>
    );
};

export default Home;