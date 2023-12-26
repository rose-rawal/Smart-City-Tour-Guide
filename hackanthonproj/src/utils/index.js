import Login from "../components/Login";
import Home from "../components/Home";
import { NearMe } from "../components/NearMe";
import SignUp from "../components/SignUp";
import Map from "../components/Map";
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
  {
    name: "Map",
    element: <Map/>,
    path: "/map",
  },
];

export default URL;
