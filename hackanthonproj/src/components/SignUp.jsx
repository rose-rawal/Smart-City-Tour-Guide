import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import signupimg from "../images/Signup2.jpg";
import context from "../context/maincontext";

const inititalSignupData = {
  name: "",
  email: "",
  password: "",
};
const SignUp = () => {
  const navigate = useNavigate();
  const { registerUser,a } = useContext(context);
  const [isSignup, setIsSignup] = useState(false);
  console.log("a:",a)
  const [error, setError] = useState({
    errorText: "",
    infoText: "",
    field: "",
  });

  const [signupData, setSignupData] = useState(inititalSignupData);

  const updateSignupData = (value, key = "name") => {
    setSignupData((prev) => ({
      ...prev,
      [key]: value,
    }));
    console.log(signupData, "signupdata");
    // setSignupData()
  };

  const onSignUp = async (e) => {
    e.preventDefault();
    const response = await registerUser(signupData);
    console.log("Signup response", response);
    if (response.error) {
      setError({
        errorText: response.error,
        field: response.field || "",
      });
    }

    if (response.success) {
      setIsSignup(false);
      setError({
        errorText: "",
        infoText: "Signup success! Please login to access account",
        field: "",
      });

      navigate("/login");
    }
  };

  return (
    <motion.div
      className="flex h-screen w-screen absolute"
      initial={{ x: "-50%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <div className="w-3/5 bg-white flex justify-center">
        <img
          src={signupimg}
          alt="Background"
          className="h-full w-20/21 object-cover"
        />
      </div>
      <div className="w-2/5 bg-white flex flex-col item-center p-8 border rounded-lg">
        <div className="mb-16 flex items-start justify-start">
          <Link
            to="/"
            className="text-sm font-medium text-blue-500 hover:underline"
          >
            Learn Us
          </Link>
        </div>
        <div className="flex flex-col  py-1">
          <div className="mb-2">
            <h2 className="text-3xl font-semibold">Create an Account</h2>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-10 ">
              Let's get started with your Envision Journey
            </p>
            <form onSubmit={onSignUp}>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full p-2 border-b"
                  error={error.field === "name" && error.errorText}
                  value={signupData.name}
                  onChange={(e) => updateSignupData(e.target.value, "name")}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  className="w-full p-2 border-b"
                  error={error.field === "email" && error.errorText}
                  value={signupData.email}
                  onChange={(e) => updateSignupData(e.target.value, "email")}
                />
              </div>
              <div className="mb-7">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="w-full p-2 border-b"
                  error={error.field === "password" && error.errorText}
                  value={signupData.password}
                  onChange={(e) => updateSignupData(e.target.value, "password")}
                />
              </div>
              {!!error.infoText && (
                <div className="text-green-700 mb-4">{error.infoText}</div>
              )}
              {!!error.errorText && !error.field && (
                <div className="text-red-500 mb-4">{error.errorText}</div>
              )}

              <button className="w-full bg-gray-800 text-white hover:text-gray-800 hover:bg-secondary py-2 mb-4 rounded">
                Create Account
              </button>
            </form>
            <div className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="/Login" className="font-medium text-blue-500 ">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUp;
