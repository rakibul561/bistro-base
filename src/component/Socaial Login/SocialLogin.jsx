import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/UseAuth";
import usePublic from "../../Hooks/usePublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const { gooogleSignIn } = useAuth();
    const axiosPublic = usePublic();
    const navigate = useNavigate();

    const handleSignIn = () => {
        gooogleSignIn()
            .then(result => {
                console.log(result.user);
               const userInfo = {
                   email:result.user?.email,
                   name:result.user?.displayName
               }
               axiosPublic.post('/users',userInfo )
               .then(res => {
                console.log(res.data);
                navigate('/');
               })
            })
    }

    return (
        <div>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
            </div>
            <div className="pl-8">

                <button onClick={handleSignIn} className="btn">
                    <FaGoogle className="mr-4"></FaGoogle>
                    Google
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;