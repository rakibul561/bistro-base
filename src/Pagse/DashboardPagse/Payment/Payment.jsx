import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../component/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe('');
const Payment = () => {
    return (
        <div>
            <SectionTitle heading= 'payment' subHeading="please play to eat"></SectionTitle>
            <div>
               <Elements stripe={stripePromise}>

               </Elements>
            </div>
        </div>
    );
};

export default Payment;