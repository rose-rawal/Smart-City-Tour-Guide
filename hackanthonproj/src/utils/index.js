import Login from "../components/Login";
import Home from "../components/Home";
import { NearMe } from "../components/NearMe";
const URL =[{
name:'Home',
element:<Home/>,
path:"/"
},
{
    name: 'Login',
    element:<Login/>,
    path:"/login"
},
{
    name:'Near',
    element:<NearMe/>,
    path:"/nearme"
}]

export default URL;