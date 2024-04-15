import { useState } from "react";
import { PaystackButton } from "react-paystack";
import Navbar from "./Navbar";

function Pay() {
  const [email, setEmail] = useState("");
  const amount = 5000; // Fixed amount of 5000 naira

  const publicKey = "pk_test_5aa6c7385201681d82ec56444055678877bf850c";

  const onSuccess = (reference) => {
    console.log(reference);
    // Handle successful payment
  };

  const onClose = () => {
    console.log("Payment closed");
    // Handle payment cancellation
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md mt-28">
        <h2 className="text-2xl font-bold mb-4">Pay with Paystack</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
            required
          />
        </div>
        <PaystackButton
          text="Make Payment"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
          email={email}
          amount={amount * 100}
          publicKey={publicKey}
          onSuccess={onSuccess}
          onClose={onClose}
          disabled={!email}
        />
      </div>
    </>
  );
}

export default Pay;
