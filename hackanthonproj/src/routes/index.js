import Login from "../pages/Login";
import Home from "../pages/Home";
import { NearMe } from "../pages/NearMe";
import Advise from "../pages/Advise";
import Payment from "../pages/Payment";
import SignUp from "../pages/SignUp";
import Loader from "../pages/Loader";
import Hotels from "../pages/Hotels";
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
  {
    name: "Payment",
    element: <Payment />,
    path: "/payment",
  },
  {
    name: "SignUp",
    element: <SignUp />,
    path: "/signUp",
  },
  {
    name: "Hotels",
    element: <Hotels />,
    path: "/hotels",
  },
];

export default URL;
