import React, {useRef, useState } from "react";
import Logo from "../../assets/logo.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import valid from "../../assets/valid.svg";
import { Outlet, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const emailRef = useRef();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [phase, setPhase] = useState(1);

  // useEffect(() => {
  //   emailRef.current.focus();
  // }, []);



  return (
    <section className="bg-[#F5F7FA] w-full h-screen">
      <div>
        {phase === 1 && (
          <div className="bg-[#F5F7FA]">
            <div className="flex items-center justify-between w-[95%] lg:w-[85%] mx-auto">
              <div className="hidden lg:w-[40%] lg:block">
                <img src={Logo} alt="logo" width={500} />
              </div>

              <div className="w-[96vw] lg:w-[45%]">
                <div className="flex justify-center items-center my-3">
                  <img src={Logo} width={100} alt="logo" />
                </div>
                <div className="bg-white border border-[#CBD5E1] shadow">
                  <div className="text-center py-5">
                    <h2 className="text-3xl font-semibold">Admin</h2>
                    <h3 className="text-2xl font-normal pt-5 text-gray-500">
                      Welcome Back
                    </h3>
                  </div>
                  <div className=" mx-auto flex flex-col gap-6 lg:gap-8">
                    <div className="w-[90%] mx-auto flex flex-col gap-3 lg:gap-5">
                      <label className="text-xl text-slate-700">Email</label>
                      <input
                        type="email"
                        name="email"
                        ref={emailRef}
                        autoComplete="off"
                        placeholder="Enter your email address"
                        className="border-2 border-[#CBD5E1] p-5 rounded-lg placeholder:text-lg 
                  focus:placeholder:text-sm focus:ring-blue-300 focus:border-blue-400 custom-placeholder"
                      />
                    </div>
                    <div className="w-[90%] mx-auto flex flex-col gap-3 lg:gap-5">
                      <label className="text-xl text-slate-700">Password</label>
                      <div className="relative">
                        <input
                          type={passwordVisible ? "text" : "password"}
                          name="password"
                          placeholder="Type Password"
                          className="border-2 border-[#CBD5E1] p-5 rounded-lg placeholder:text-lg text-gray-500 focus:placeholder:text-sm custom-placeholder
                 focus:ring-blue-300 focus:border-blue-400 w-full "
                        />
                        {passwordVisible ? (
                          <FaEye
                            onClick={handlePasswordVisibility}
                            className="absolute right-3 top-1/2 text-xl  -translate-y-1/2 text-gray-500 cursor-pointer"
                          />
                        ) : (
                          <FaEyeSlash
                            onClick={handlePasswordVisibility}
                            className="absolute right-3 top-1/2  text-xl -translate-y-1/2 text-gray-500 cursor-pointer"
                          />
                        )}
                      </div>
                    </div>
                    <div className="">
                      <button onClick={() => navigate("admin/dashboard")} className="p-5 flex justify-center items-center w-[90%] mx-auto flex-col gap-3 lg:gap-5 rounded-lg cursor-pointer text-white text-lg font-medium bg-[#3FAAE0] hover:bg-[#3bbeff] hover:duration-700">
                        Login
                      </button>
                    </div>
                    <div className="w-[90%] mx-auto flex  lg:gap-5 justify-between items-center mb-5">
                      <p className="text-lg text-gray-500 font-light">
                        Forgot Password?
                      </p>
                      <button
                        onClick={() => setPhase(2)}
                        className="text-lg font-light text-gray-500"
                      >
                        Click Here
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {phase === 2 && (
          <div className="bg-[#F5F7FA]">
            <div className="flex items-center justify-between w-[90%] mx-auto">
              <div className="hidden lg:w-[40%] lg:block">
                <img src={Logo} alt="logo" width={500} />
              </div>
              <div className="w-[90vw] lg:w-[45vw]">
                <div className="flex justify-center items-center my-10">
                  <img src={Logo} width={150} alt="logo" />
                </div>
                <div className=" bg-white border-2 border-[#CBD5E1]">
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
                        autoComplete="off"
                        placeholder="Enter your email address"
                        className="border-none bg-gray-100 p-5 rounded-lg placeholder:text-lg 
                    focus:placeholder:text-sm custom-placeholder"
                      />
                    </div>
                    <div className="">
                      <button
                        onClick={() => setPhase(3)}
                        className="p-5 bg-[#3FAAE0] flex justify-center w-[80vw] md:w-[40vw] mx-auto smd:mx-auto md:mx-2 lg:mx-auto rounded-lg hover:bg-[#3abdff] hover:duration-500 cursor-pointer mb-5 text-white text-lg font-medium"
                      >
                        Send Verification Email
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {phase === 3 && (
          <div className="bg-[#F5F7FA]">
            <div className="flex items-center justify-between lg:w-[90%] mx-auto">
              <div className="hidden lg:w-[40%] lg:block">
                <img src={Logo} alt="logo" width={500} />
              </div>
              <div className="w-[95vw] lg:w-[50vw] xl:w-[40%] mx-auto">
                <div className="flex justify-center items-center my-10">
                  <img src={Logo} width={100} alt="logo" />
                </div>
                <div className=" bg-white border-2 border-[#CBD5E1]">
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
                    <div className="mx-8 w-[95%] lg:mx-auto lg:w-[90%] grid grid-cols-3 smd:flex gap-[26px]">
                      <input
                        type="text"
                        name="text"
                        autoComplete="off"
                        className="border-2 border-gray-300 w-12 h-12  p-5 rounded-lg"
                      />
                      <input
                        type="text"
                        name="text"
                        autoComplete="off"
                        className="border-2 border-gray-300 w-12 h-12  p-5 rounded-lg "
                      />
                      <input
                        type="text"
                        name="text"
                        autoComplete="off"
                        className="border-2 border-gray-300 w-12 h-12  p-5 rounded-lg "
                      />
                      <input
                        type="text"
                        name="text"
                        autoComplete="off"
                        className="border-2 border-gray-300 w-12 h-12  p-5 rounded-lg "
                      />
                      <input
                        type="text"
                        name="text"
                        autoComplete="off"
                        className="border-2 border-gray-300 w-12 h-12  p-5 rounded-lg "
                      />
                      <input
                        type="text"
                        name="text"
                        autoComplete="off"
                        className="border-2 border-gray-300 w-12 h-12  p-5 rounded-lg "
                      />
                    </div>

                    <div className="lg:w-[80%] flex flex-col justify-center items-center gap-10">
                      <button
                        onClick={() => setPhase(4)}
                        className="p-4 lg:p-5 bg-[#3FAAE0] w-[90%] rounded-lg hover:bg-[#3abdff] hover:duration-500 cursor-pointer text-white text-lg font-medium"
                      >
                        Continue
                      </button>
                      <button className="text-center text-slate-700 text-[16px]font-normal pb-5 lg:pb-10">
                        Resend Verification Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {phase === 4 && (
          <div className="bg-[#F5F7FA]">
            <div className="flex items-center justify-between w-[85%] mx-auto">
              <div className="hidden lg:w-[40%] lg:block">
                <img src={Logo} alt="logo" width={500} />
              </div>

              <div className="w-[90vw] lg:w-[45%]">
                <div className="flex justify-center items-center my-3">
                  <img src={Logo} width={100} alt="logo" />
                </div>
                <div className="bg-white border border-[#CBD5E1] shadow">
                  <div className="text-center py-5">
                    <h2 className="text-3xl font-semibold">Admin</h2>
                    <h3 className="text-2xl font-normal pt-2 text-gray-500">
                      Welcome Back
                    </h3>
                  </div>
                  <div className=" mx-auto flex flex-col gap-3">
                    <div className="w-[90%] mx-auto flex flex-col gap-3">
                      <label className="text-lg text-slate-700">Email</label>
                      <input
                        type="email"
                        name="email"
                        ref={emailRef}
                        autoComplete="off"
                        placeholder="Enter your email address"
                        className="border-2 border-[#CBD5E1] py-4 rounded-lg placeholder:text-lg 
                  focus:placeholder:text-sm focus:ring-blue-300 focus:border-blue-400 custom-placeholder"
                      />
                    </div>

                    <div className="w-[90%] mx-auto flex flex-col gap-3">
                      <label className="text-lg text-slate-700">Password</label>
                      <div className="relative">
                        <input
                          type={passwordVisible ? "text" : "password"}
                          name="password"
                          placeholder="Type Password"
                          className="border-2 border-[#CBD5E1] py-4 rounded-lg placeholder:text-lg text-gray-500 focus:placeholder:text-sm custom-placeholder
                 focus:ring-blue-300 focus:border-blue-400 w-full "
                        />
                        {passwordVisible ? (
                          <FaEye
                            onClick={handlePasswordVisibility}
                            className="absolute right-3 top-1/2 text-xl  -translate-y-1/2 text-gray-500 cursor-pointer"
                          />
                        ) : (
                          <FaEyeSlash
                            onClick={handlePasswordVisibility}
                            className="absolute right-3 top-1/2  text-xl -translate-y-1/2 text-gray-500 cursor-pointer"
                          />
                        )}
                      </div>
                    </div>

                    {/*retype password */}
                    <div className="w-[90%] mx-auto flex flex-col gap-3">
                      <label className="text-lg text-slate-700">
                        Retype New Password
                      </label>
                      <div className="relative">
                        <input
                          type={passwordVisible ? "text" : "password"}
                          name="password"
                          placeholder="Type Password"
                          className="border-2 border-[#CBD5E1] py-4 rounded-lg placeholder:text-lg text-gray-500 focus:placeholder:text-sm custom-placeholder
                 focus:ring-blue-300 focus:border-blue-400 w-full "
                        />
                        {passwordVisible ? (
                          <FaEye
                            onClick={handlePasswordVisibility}
                            className="absolute right-3 top-1/2 text-xl  -translate-y-1/2 text-gray-500 cursor-pointer"
                          />
                        ) : (
                          <FaEyeSlash
                            onClick={handlePasswordVisibility}
                            className="absolute right-3 top-1/2  text-xl -translate-y-1/2 text-gray-500 cursor-pointer"
                          />
                        )}
                      </div>
                    </div>

                    <div className="my-5">
                      <button
                        onClick={() => setPhase(5)}
                        className="py-5 flex justify-center items-center w-[90%] mx-auto flex-col gap-3 lg:gap-5 rounded-lg cursor-pointer text-white text-lg font-medium bg-[#3FAAE0] hover:bg-[#3bbeff] hover:duration-700"
                      >
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {phase === 5 && (
          <div className="bg-[#F5F7FA]">
            <div className="flex items-center gap-40 w-[95%] lg:w-[80%] mx-auto">
              <div className="hidden lg:w-[40%] xl:block mt-[10rem]">
                <img src={Logo} alt="logo" width={500} />
              </div>
              <div className="w-full smd:w-[90%] lg:w-[70%] mx-auto xl:w-[30vw]">
                <div className="flex justify-center items-center my-10">
                  <img src={Logo} width={150} alt="logo" />
                </div>
                <div className="bg-white border-2 border-[#CBD5E1] mt-[5rem] lg:mt-[10rem]">
                  <div className="flex items-center justify-center my-10">
                    <img src={valid} alt="valid" />
                  </div>
                  <div className="text-center font-medium">
                    <p className="text-lg flex flex-col">
                      Password Updated Successfully{" "}
                      <span>You can continue to login</span>
                    </p>
                  </div>

                  <div className="my-5">
                    <button
                      onClick={() => setPhase(1)}
                      className="py-3 flex justify-center w-[90%] md:w-[60%] lg:w-[90%] mx-auto gap-5 rounded-lg cursor-pointe text-white text-lg bg-[#3FAAE0] hover:bg-[#3bbeff] hover:duration-700"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <div>
      <Outlet />
     </div> */}
    </section>
  );
};

export default AdminLogin;
