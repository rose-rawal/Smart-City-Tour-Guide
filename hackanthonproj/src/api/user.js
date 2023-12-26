import axiosInstance from "./axiosInstance";

//C
export const loginUserApi = async ({ email, password }) => {
  const result = await axiosInstance.post("/user/loginUser", {
    email,
    password,
  });
  return result.data;
};

export const postUser = async ({ name, email, password }) => {
  const result = await axiosInstance.post("/user/registerUser", {
    name,
    email,
    password,
  });
  return result.data;
};
