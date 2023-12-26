import Login from "../components/Login";
import Home from "../components/Home";
import { NearMe } from "../components/NearMe";
import SignUp from "../components/SignUp";
const URL = [
  {
    name: "Home",
    element: <Home />,
    path: "/",
  },
  {
    name: "Login",
    element: <Login />,
    path: "/login",
  },
  {
    name: "Near",
    element: <NearMe />,
    path: "/nearme",
  },
  {
    name: "SignUp",
    element: <SignUp />,
    path: "/signUp",
  },
];

export default URL;
