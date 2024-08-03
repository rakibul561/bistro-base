import SectionTitle from "../../component/SectionTitle";
import featured from '../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading="check it out"
                heading='Featured Items'
            />
            <div className="flex flex-col md:flex-row justify-center items-center bg-slate-500 bg-opacity-30 p-6 md:p-12 lg:p-20">
                <div className="mb-4 md:mb-0">
                    <img src={featured} alt="Featured" className="w-full md:w-auto"/>
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can I get some</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, id fuga repudiandae accusantium veritatis provident voluptatem, fugit magni obcaecati error labore veniam necessitatibus quae fugiat blanditiis quaerat minima mollitia quasi, libero neque assumenda dicta. Aliquid debitis beatae laborum quibusdam, nesciunt odio sunt facilis tempore sed, sint eligendi! Nemo, odit eligendi!</p>
                    <button className="btn btn-outline btn-accent border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
