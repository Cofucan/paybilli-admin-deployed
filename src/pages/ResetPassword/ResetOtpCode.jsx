import Logo from "../../assets/logo.svg"
import {customFetch} from "../../utils/constants.js";
import OTPForm from "../../components/form/OtpForm.jsx";
import PropTypes from "prop-types";

const ResetOtpCode = ({navigate}) => {
    async function handleSubmit(event) {
        event.preventDefault()
        const formData = Object.values(Object.fromEntries(new FormData(event.currentTarget))).join("")
        const response = await customFetch.post("account/verify-token/", {json: {"verify_token": formData}})
        console.log(response);
        navigate();
    }

    async function handleReset() {
        await customFetch.post("account/resend-verify-token/", {})
    }

    return (
        <div className="bg-light-grey">
            <div className="flex items-center justify-between lg:w-[90%] mx-auto">
                <div className="hidden lg:w-[40%] lg:block">
                    <img src={Logo} alt="logo" width={500}/>
                </div>
                <div className="w-[95vw] lg:w-[50vw] xl:w-[40%] mx-auto">
                    <div className="flex justify-center items-center my-10">
                        <img src={Logo} width={100} alt="logo"/>
                    </div>
                    <form className=" bg-white border-2 border-light-grey-500" onSubmit={handleSubmit}
                          onReset={handleReset}>
                        <div className="text-center py-5">
                            <h2 className="text-2xl font-bold text-slate-800 tracking-wide">
                                Forgot Password
                            </h2>
                            <h3 className="w-[70vw] md:w-[30vw] mx-auto text-[14px] lg:text-[16px] font-normal py-3 lg:py-5 text-gray-500">
                                A 6 Digit Verification Code Has Been Sent To Your Email
                                Address. Enter The 6 Digit Code Below
                            </h3>
                            <p className="lg:pt-5 pb-5 mx-2 text-[18px] font-nornmal">
                                Please paste (or type) your 6-digit code
                            </p>
                        </div>
                        <div className="lg:w-[45vw] mx-auto flex flex-col gap-10">
                            <OTPForm
                                className={"mx-8 w-[95%] lg:mx-auto lg:w-[90%] grid grid-cols-3 md:flex gap-[26px]"}
                                inputProps={{className: "border-2 border-gray-300 w-12 h-12  rounded-lg"}} length={6}
                                name={"otp"}/>

                            <div className="lg:w-[80%] flex flex-col justify-center items-center gap-10">
                                <button type="submit"
                                        className="p-4 lg:p-5 bg-light-blue-500 w-[90%] rounded-lg hover:bg-[#3abdff] hover:duration-500 cursor-pointer text-white text-lg font-medium"
                                >
                                    Continue
                                </button>
                                <button type="reset"
                                        className="text-center text-slate-700 text-[16px]font-normal pb-5 lg:pb-10">
                                    Resend Verification Code
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

ResetOtpCode.propTypes = {
    navigate: PropTypes.func.isRequired,
};
export default ResetOtpCode