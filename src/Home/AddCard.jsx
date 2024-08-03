import SectionTitle from "../component/SectionTitle";
import img from '../assets/home/slide1.jpg'

const AddCard = () => {


    
    return (
        <section>
            <SectionTitle
                heading="CHEF RECOMMENDS"
                subHeading="---Should Try---"
            >
            </SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src= {img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                        <button className="btn btn-outline uppercase btn-accent border-0 border-b-4">add to cart </button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src= {img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-cen
                    ter text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                        <button className="btn btn-outline uppercase btn-accent border-0 border-b-4">add to cart </button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src= {img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                        <button className="btn btn-outline uppercase btn-accent border-0 border-b-4">add to cart </button>
                        </div>
                    </div>
                </div>
               
            </div>
        </section>
    );
};

export default AddCard;