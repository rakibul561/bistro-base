import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../../Hooks/UseMenu";
import SectionTitle from "../../component/SectionTitle";


const ManageItem = () => {
    const [menu] = useMenu();

    const handleDeleteItem = item => {

    }

    return (
        <div>
            <SectionTitle heading="manage All Item" subHeading="Hurry up"></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price </th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}

                                    </td>
                                    <td>${item.price}</td>
                                    <td>
                                        <button
                                           
                                            className="btn btn-md bg-orange-500">
                                            <FaEdit className="text-white text-2xl" />
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(item)}
                                            className="btn btn-ghost btn-md">
                                            <FaTrashAlt className="text-red-600" />
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;