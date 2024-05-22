/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodCard = ({ item }) => {
    // Destructure the item object to extract relevant properties
    const { name, image, price, recipe, _id } = item;
    // Get the authenticated user using custom hook
    const { user } = UseAuth();
    // Hooks for navigation and current location
    const navigate = useNavigate();
    const location = useLocation();

    // Function to handle adding item to the cart
    const handleAddtoCart = food => {
        if (user && user.email) {
            // If user is logged in, proceed to add to cart
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            };
            // Send cart item data to the server
            axios.post('http://localhost:5000/carts', cartItem)
                .then(res => {
                    // Log success message and response data
                    console.log('Item added to cart:', res.data);
                })
                .catch(error => {
                    // Handle errors if POST request fails
                    console.error('Error adding item to cart:', error);
                    // Show error message to the user
                    Swal.fire({
                        title: "Error",
                        text: "Failed to add item to cart. Please try again later.",
                        icon: "error"
                    });
                });
        } else {
            // If user is not logged in, prompt to login before adding to cart
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Redirect to login page with current location state
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };

    return (
        <div>
            <div className="card lg:h-[500px] bg-base-100 shadow-xl">
                <figure><img className="" src={image} alt="Food" /></figure>
                <p className=" absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white"> ${price}</p>

                <div className="card-body flex fel-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button
                            onClick={() => handleAddtoCart(item)}
                            className="btn btn-outline bg-slate-100 btn-accent border-0 border-b-4">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
