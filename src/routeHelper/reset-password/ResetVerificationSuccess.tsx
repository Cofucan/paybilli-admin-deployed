import Logo from "../../assets/logo.svg";
import ValidImg from "./valid.svg";
import { Link } from "@tanstack/react-router";

const ResetVerificationSuccess = () => {
  return (
    <div className="bg-light-grey">
      <div className="mx-auto flex w-[95%] items-center gap-40 lg:w-[80%]">
        <div className="mt-[10rem] hidden lg:w-[40%] xl:block">
          <img src={Logo} alt="logo" width={500} />
        </div>
        <div className="mx-auto w-full smd:w-[90%] lg:w-[70%] xl:w-[30vw]">
          <div className="my-10 flex items-center justify-center">
            <img src={Logo} width={150} alt="logo" />
          </div>
          <div className="mt-[5rem] border-2 border-light-grey-500 bg-white lg:mt-[10rem]">
            <div className="my-10 flex items-center justify-center">
              <img src={ValidImg} alt="valid" />
            </div>
            <div className="text-center font-medium">
              <p className="flex flex-col text-lg">
                Password Updated Successfully{" "}
                <span>You can continue to login</span>
              </p>
            </div>

            <div className="my-5">
              <Link
                to="/account/login"
                className="cursor-pointe mx-auto flex w-[90%] justify-center gap-5 rounded-lg bg-light-blue-500 py-3 text-lg text-white hover:bg-light-blue hover:duration-700 md:w-[60%] lg:w-[90%]"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetVerificationSuccess;
