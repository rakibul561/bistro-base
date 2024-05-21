/* eslint-disable react/prop-types */

const FoodCard = ({item}) => {
   
     const {name, image, price, recipe} = item;

    return (
        <div>
            <div className="card lg:h-[500px] bg-base-100 shadow-xl">
                <figure><img className=""src= {image} alt="Shoes" /></figure>
                <p className=" absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white " >${price}</p>

                <div className="card-body flex fel-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline bg-slate-100 btn-accent border-0 border-b-4">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;