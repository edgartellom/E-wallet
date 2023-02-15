import React, { useState } from "react";
import {loadStripe} from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";


const stripePromise = loadStripe('pk_test_51Mbqo8Di8RzuUuAWSht0rwDQiS739kMupn3lbVv6nUVUeujEpGWetgHnGC2s4UM8xvOUj6w84DdQWyscIVUZpUdA00P4U2goyj')





const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
  
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();

    }

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      {/* Product Information */}

      {/* User Card Input */}
      <div className="form-group">
        <CardElement />
      </div>

      <button disabled={!stripe} className="btn btn-success">
        {loading ? (
          <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          "Buy"
        )}
      </button>
    </form>
  );
};

const Pagos =()=>{

    return(
        <Elements stripe={stripePromise}>

<CheckoutForm/>

        </Elements>
    )



}
export default Pagos
