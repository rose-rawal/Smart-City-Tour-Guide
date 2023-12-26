import axiosInstance from "./axiosInstance";

//C
<<<<<<< HEAD
export const loginUserApi= async({
  email,
  password
})=>{
  const result= await axiosInstance.post("/user/loginUser",{
    email,
    password
  })
  return result.data
}

export const postUser = async ({
  name, 
  email,
  password,
}) => {
=======
export const loginUserApi = async ({ email, password }) => {
  const result = await axiosInstance.post("/user/loginUser", {
    email,
    password,
  });
  return result.data;
};

export const postUser = async ({ name, email, password }) => {
>>>>>>> 85f96e852ca564dbc4494267bc40e8663b928ea1
  const result = await axiosInstance.post("/user/registerUser", {
    name,
    email,
    password,
  });
  return result.data;
};
<<<<<<< HEAD



=======
>>>>>>> 85f96e852ca564dbc4494267bc40e8663b928ea1
