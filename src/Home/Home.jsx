import { Helmet } from "react-helmet-async";
import PopolarMenu from "../Pagse/Poppolar/PopolarMenu";
import AddCard from "./AddCard";
import Banner from "./Banner";
import Call from "./Call";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import Review from "./Review/Review";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopolarMenu></PopolarMenu>
            <Call></Call>
            <AddCard></AddCard>
            <Featured></Featured>

            <Review></Review>
        </div>
    );
};

export default Home;