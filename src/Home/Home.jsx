import PopolarMenu from "../Pagse/Poppolar/PopolarMenu";
import Banner from "./Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopolarMenu></PopolarMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;