import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Bootcamp() {
  const refForm = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_900jk7k",
        "template_65cufca",
        refForm.current,
        "iojbFqjTFcI7f2hsN"
      )
      .then(
        () => {
          toast.success("Registration Successful!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setTimeout(() => {
            navigate("/pay");
          }, 2000);
        },
        (error) => {
          toast.error("Registration failed, please try again.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.error("Email Send Sailed", error);
        }
      );
  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="max-w-xl mx-auto bg-white shadow-md p-8 rounded-md mt-24">
        <h2 className="text-2xl font-bold mb-8">
          Business Bootcamp Registration Form
        </h2>
        <form ref={refForm} onSubmit={sendEmail}>
          <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
          <div className="mb-4">
            <label htmlFor="fullName" className="block mb-2">
              Full Name:
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block mb-2">
              Age:
            </label>
            <div className="flex space-x-3">
              <label htmlFor="age0_18" className="mb-1">
                0-18
              </label>
              <input
                type="radio"
                id="age0_18"
                name="age"
                value="0-18"
                className="border border-gray-300 px-3 py-2 rounded-md mb-2"
                required
              />
              <label htmlFor="age19_25" className="mb-1">
                19-25
              </label>
              <input
                type="radio"
                id="age19_25"
                name="age"
                value="19-25"
                className="border border-gray-300 px-3 py-2 rounded-md mb-2"
                required
              />

              <label htmlFor="age26_30" className="mb-1">
                26-30
              </label>
              <input
                type="radio"
                id="age26_30"
                name="age"
                value="26-30"
                className="border border-gray-300 px-3 py-2 rounded-md mb-2"
                required
              />

              <label htmlFor="age31_35" className="mb-1">
                31-35
              </label>
              <input
                type="radio"
                id="age31_35"
                name="age"
                value="31-35"
                className="border border-gray-300 px-3 py-2 rounded-md mb-2"
                required
              />

              <label htmlFor="age36_above" className="mb-1">
                36-above
              </label>
              <input
                type="radio"
                id="age36_above"
                name="age"
                value="36-above"
                className="border border-gray-300 px-3 py-2 rounded-md mb-2"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <p className="block mb-2">Gender:</p>
            <div className="flex items-center">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className="mr-2"
                required
              />
              <label htmlFor="male" className="mr-4">
                Male
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="mr-2"
                required
              />
              <label htmlFor="female" className="mr-4">
                Female
              </label>
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                className="mr-2"
                required
              />
              <label htmlFor="other" className="mr-4">
                Other
              </label>
              <input
                type="radio"
                id="preferNotToSay"
                name="gender"
                value="prefer not to say"
                className="mr-2"
                required
              />
              <label htmlFor="preferNotToSay">Prefer not to say</label>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="contactNumber" className="block mb-2">
              Contact Number (WhatsApp):
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <p className="block mb-2">
              How did you hear about the Business Bootcamp?
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="socialMedia"
                  name="hearAbout"
                  value="social media"
                  className="mr-2"
                />
                <label htmlFor="socialMedia" className="mr-4">
                  Social Media
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="referral"
                  name="hearAbout"
                  value="referral"
                  className="mr-2"
                />
                <label htmlFor="referral" className="mr-4">
                  Referral
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="website"
                  name="hearAbout"
                  className="mr-2"
                  value="website"
                />
                <label htmlFor="website" className="mr-4">
                  Website
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="other"
                  name="hearAbout"
                  value="other"
                  className="mr-2"
                />
                <label htmlFor="other">Other:</label>
                <input
                  type="text"
                  id="otherDetail"
                  name="hearAbout"
                  className="border border-gray-300 px-3 py-1 rounded-md ml-2"
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <p className="block mb-2">Are you a current student?</p>
            <div className="flex items-center">
              <div>
                <input
                  type="radio"
                  id="yesStudent"
                  name="student"
                  value="yes"
                  className="mr-2"
                  required
                />
                <label htmlFor="yesStudent" className="mr-4">
                  Yes
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="noStudent"
                  name="student"
                  value="no"
                  className="mr-2"
                  required
                />
                <label htmlFor="noStudent">No</label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="institution" className="block mb-2">
              If yes, please specify your institution:
            </label>
            <input
              type="text"
              id="institution"
              name="institution"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
            />
          </div>

          <h3 className="text-lg font-semibold mb-4">
            Business Information (For Business Owners Only)
          </h3>
          <div className="mb-4">
            <label htmlFor="businessName" className="block mb-2">
              Business Name:
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="businessSector" className="block mb-2">
              Business Sector/Industry:
            </label>
            <input
              type="text"
              id="businessSector"
              name="businessSector"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="yearsInBusiness" className="block mb-2">
              Years in Business:
            </label>
            <input
              type="number"
              id="yearsInBusiness"
              name="yearsInBusiness"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="website" className="block mb-2">
              Website/IG handle:
            </label>
            <input
              type="text"
              name="website"
              id="website"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
            />
          </div>

          <h3 className="text-lg font-semibold mb-4">Program Information</h3>
          <div className="mb-4">
            <label htmlFor="interestReason" className="block mb-2">
              Why are you interested in joining the Business Bootcamp?
            </label>
            <textarea
              id="interestReason"
              name="interestReason"
              rows="4"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              required
            ></textarea>
          </div>

          <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
          <p className="font-bold">Registration Fee is N5,000</p>
          <div>
            <button
              type="submit"
              value="SEND"
              className="p-3 bg-slate-700 text-white mt-3 mr-4"
            >
              Register and Pay
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Bootcamp;
