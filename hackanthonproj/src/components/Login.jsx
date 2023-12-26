import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { item, container } from "../assets/animation";
import context from "../context/maincontext";
import loginimg from "../images/Login.jpg";

const initialLoginData = {
  email: "",
  password: "",
};

const Login = () => {
  const { loginUser } = useContext(context);
  const navigate= useNavigate();
  const [error, setError] = useState({
    errorText: "",
    infoText: "",
    field: "",
  });

  const [loginData, setLoginData] = useState(initialLoginData);

  const updateLoginData = (value, key = "name") => {
    setLoginData((prev) => ({
      ...prev,
      [key]: value,
    }));
    console.log(loginData);
  };

  const onLogin = async (e) => {
    e.preventDefault();
    const response = await loginUser(loginData);
    console.log("Login response", response);
    if (response.error) {
      setError({
        errorText: response.error,
        field: response.field || "",
      });
    }

    if (response.success) {
      setError({
        errorText: "",
        field: "",
      });
      navigate("/");
    }
  };

  return (
    <motion.div
      className="flex h-screen w-screen absolute"
      initial={{ x: "50%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <div className="lg:w-2/5 bg-white flex flex-col items-center p-8 border rounded-lg overflow-hidden">
        <motion.div
          className="mb-24 flex items-start justify-start"
          initial={{ x: "15%" }}
          animate={{ x: "0%" }}
          transition={{ delay: 0.25, duration: 0.25, ease: "easeOut" }}
          exit={{ opacity: 1 }}
        >
          <Link
            to="/"
            className="text-sm font-medium text-blue-500 hover:underline"
          >
            Novices
          </Link>
        </motion.div>
        <motion.div
          className="flex flex-col px-20 py-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="mb-5 overflow-hidden">
            <motion.h2 variants={item} className="text-3xl font-semibold">
              Welcome Back
            </motion.h2>
          </div>

          <div className="overflow-hidden text-sm text-gray-500 mt-3 mb-5 ">
            <motion.p variants={item}>Please enter your details</motion.p>
          </div>
          <form onSubmit={onLogin} className="overflow-hidden">
            <div className="mb-5 ">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full p-2 border-b"
                value={loginData.email}
                error={error.field === "email" && error.errorText}
                onChange={(e) => updateLoginData(e.target.value, "email")}
              />
            </div>
            <div className="mb-9 ">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full p-2 border-b"
                value={loginData.password}
                error={error.field === "password" && error.errorText}
                onChange={(e) => updateLoginData(e.target.value, "password")}
              />
            </div>
            {!!error.infoText && (
              <div className="text-green-700 mb-4">{error.infoText}</div>
            )}
            {!!error.errorText && !error.field && (
              <div className="text-red-500 mb-4">{error.errorText}</div>
            )}

            <div className="mt-14 mb-4">
              <motion.div variants={item}>
                <button className="w-full bg-gray-800 text-white hover:text-gray-800 hover:bg-secondary py-2 mb-4 rounded">
                  Login
                </button>
              </motion.div>
            </div>
          </form>
          <div className="text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/SignUp" className="font-medium text-blue-500 ">
              Sign Up for free
            </Link>
          </div>
        </motion.div>
      </div>
      {/* Hide the image section on screens smaller than lg */}
      <div className="hidden lg:block lg:w-3/5">
        <img
          src={loginimg} // Update the path accordingly
          alt="Background"
          className="h-full w-full object-cover rounded-r-lg"
        />
      </div>
    </motion.div>
  );
};

export default Login;
