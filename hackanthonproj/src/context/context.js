import React, { useState, useEffect } from "react";
import context from "./maincontext";

import { loginUserApi, postUser } from "../api/user";
import axios from "axios";
const Context = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const init = () => {
    console.log("Initialize user provider");

    try {
      const userListString = window.localStorage.getItem("users");
      const userString = localStorage.getItem("currentUser");

      if (!!userListString) {
        const userArray = JSON.parse(userListString);
        console.log(userArray);
        setUsers(userArray);
      }

      if (!!userString) {
        const userObject = JSON.parse(userString);
        console.log(userObject);
        setUser(userObject);
        setIsLoggedIn(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    init();
  }, []);

  const loginUser = async ({ email, password }) => {
    if (!password | !email) {
      return {
        error: "All fields are required",
      };
    }
    try {
      const userResponse = await loginUserApi({ email, password });
      console.log("Userdata from backend:", userResponse);
      localStorage.setItem("currentUser", JSON.stringify({ email }));
      localStorage.setItem("accessToken", userResponse.data.accessToken);
      setUser({ email });
      setIsLoggedIn(true);

      return {
        success: true,
      };
    } catch (e) {
      return {
        error: e?.response?.data?.message ?? "Something went wrong",
      };
    }
  };

  const registerUser = async ({ name, email, password }) => {
    try {
      const addedUser = await postUser({
        name,
        email,
        password,
      });
      return addedUser;
    } catch (e) {
      return {
        error: e?.response?.data?.message ?? "Something went wrong",
      };
    }
  };

  const onLogOut = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

  const [data, setData] = useState();
  const [searchPlace, setSearchPlace] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    console.log("search Place", searchPlace);
    axios
      .post("http://localhost:8000/advise/get", { location: searchPlace })
      .then((val) => {
        setData(val);
        console.log("val", val.data);
      });
    // axios.post('http://localhost:8000/advise/add',gather)
    // console.log(route)
  };
  return (
    <context.Provider
      value={{
        searchPlace,
        setSearchPlace,
        handleClick,
        data,
        setData,
        user,
        setUser,
        users,
        setUsers,
        isLoggedIn,
        setIsLoggedIn,
        loginUser,
        registerUser,
        onLogOut,
        loginData,
        setLoginData,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default Context;
