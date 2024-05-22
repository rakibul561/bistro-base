import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const {createuser,updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();



    const onSubmit = (data) => {
        console.log(data);
        createuser(data.email, data.password)
        .then(result =>{
            const loggerUser = result.user;
            console.log(loggerUser);
            updateUserProfile(data.name, data.PhotoURL)
            .then(()=>{
                console.log('user profiel info updated');
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User sign up successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')
            })
            .catch(error => console.log(error))
        })
    };


    return (
        <>
            <Helmet>
                <title>Bistro Boss | sign up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" {...register("name", { required: true })} className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" {...register("PhotoURL", { required: true })} className="input input-bordered" />
                                {errors.PhotoURL && <span className="text-red-600">PhotoURL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email", { required: true })} name="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" {...register("password", {
                                    required: true, minLength: 6, maxLength: 20,


                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "required" && (
                                    <p role="alert">password is is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">
                                        password must be 6 charecter
                                    </p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">
                                        password must be 20 less then charecter
                                    </p>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />

                            </div>
                        </form>
                        <p className="p-4">Already have an Account <Link to= '/login' className="text-blue-800">Please login</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;