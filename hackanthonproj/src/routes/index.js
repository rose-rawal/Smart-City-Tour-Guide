import Login from "../pages/Login";
import Home from "../pages/Home";
import { NearMe } from "../pages/NearMe";
import Advise from "../pages/Advise";
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
    name: "Advise",
    element: <Advise />,
    path: "/advise",
  },
];

export default URL;
