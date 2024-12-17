import Logo from "../../assets/logo.svg";
import {customFetch} from "../../utils/constants.js";
import PropTypes from "prop-types";

const ResetVerificationEmail = ({ navigate }) => {
  async function handleSubmit(event) {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.currentTarget));
    const response = await customFetch.post("account/reset-password/", {json: formData});
    console.log(response);
    navigate()
  }

  return (
    <div className="bg-light-grey">
      <div className="flex items-center justify-between w-[90%] mx-auto">
        <div className="hidden lg:w-[40%] lg:block">
          <img src={Logo} alt="logo" width={500} />
        </div>
        <div className="w-[90vw] lg:w-[45vw]">
          <div className="flex justify-center items-center my-10">
            <img src={Logo} width={150} alt="logo" />
          </div>
          <form className=" bg-white border-2 border-light-grey-500" onSubmit={handleSubmit}>
            <div className="text-center py-5">
              <h2 className="text-2xl font-semibold text-slate-800 tracking">
                Password Reset
              </h2>
              <h3 className="w-[80vw] md:w-[40vw] ms-4 smd:mx-5 md:mx-2 lg:mx-auto text-[15px] lg:text-[18px] tracking font-normal py-5 text-gray-500">
                Enter the email address you registered with and we will
                send you a link to create a new password.
              </h3>
            </div>
            <div className="lg:w-[45vw] mx-auto flex flex-col gap-10">
              <div className="w-[80vw] md:w-[40vw] mx-auto md:mx-2 lg:mx-auto flex flex-col gap-5">
                <label className="text-xl text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"

                  placeholder="Enter your email address"
                  className="border-none bg-gray-100 p-5 rounded-lg placeholder:text-lg 
                focus:placeholder:text-sm custom-placeholder"
                />
              </div>
              <div className="">
                <button
                  className="p-5 bg-light-blue-500 flex justify-center w-[80vw] md:w-[40vw] mx-auto smd:mx-auto md:mx-2 lg:mx-auto rounded-lg hover:bg-[#3abdff] hover:duration-500 cursor-pointer mb-5 text-white text-lg font-medium"
                >
                  Send Verification Email
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
ResetVerificationEmail.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default ResetVerificationEmail