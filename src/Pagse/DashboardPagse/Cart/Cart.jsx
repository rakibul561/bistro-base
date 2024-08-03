import { FaTrashAlt } from "react-icons/fa";
import UseCarts from "../../../Hooks/UseCarts";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxios";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart, refetch] = UseCarts();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = UseAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="p-4 md:p-8">
            <div className="flex flex-col md:flex-row justify-evenly mb-14 text-center md:text-left">
                <h2 className="text-2xl md:text-4xl mb-4 md:mb-0">Items: {cart.length}</h2>
                <h2 className="text-2xl md:text-4xl mb-4 md:mb-0">Total Price: ${totalPrice}</h2>
                {
                    cart.length ? (
                        <Link to='/dashboard/payment'>
                            <button className="btn btn-primary">Pay</button>
                        </Link>
                    ) : (
                        <button disabled className="btn btn-primary">Pay</button>
                    )
                }
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) =>
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg">
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
