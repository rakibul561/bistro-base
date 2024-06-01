import { useForm } from "react-hook-form";
import SectionTitle from "../../../../component/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import usePublic from "../../../../Hooks/usePublic";
import UseAxiosSecure from "../../../../Hooks/UseAxios";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItem = () => {
    const { register, handleSubmit, reset} = useForm();
    const axiosPublic = usePublic();
    const axiosSecure = UseAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data);
        //   upload to imaggebb
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            // now send the menu item data to the server withthe
            const menuItem = {
                name: data.name,
                cetegory: data.cetegory,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // 
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                // show success pop up
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log("with image url", res.data);

    };


    return (
        <div>
            <SectionTitle heading={"add an item"} subHeading={"What's new?"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input
                            type="text" placeholder="Recepi Name"
                            {...register('name', { required: true })}
                            required

                            className="input input-bordered w-full " />
                    </div>


                    <div className="flex gap-6">
                        {/* category  */}

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Cetegory </span>
                            </label>
                            <select defaultValue="default" {...register('cetegory')}
                                className="select select-bordered w-full ">
                                <option disabled value="default" >Select a cetegory?</option>
                                <option value="salad">Salad</option>
                                <option value="pizaa">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price </span>
                            </label>
                            <input
                                type="number" placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full " />
                        </div>

                    </div>
                    {/* recipe details  */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>

                        </div>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Recipe details"></textarea>
                    </label>
                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn bg-orange-400 text-white">
                        Add item
                        <FaUtensils className="ml-2"></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;