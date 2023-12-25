import Login from "../components/Login";
import Home from "../components/Home";
import { NearMe } from "../components/NearMe";
import Advise from "../components/Advise";
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
},
{
    name:'Advise',
    element:<Advise/>,
    path:"/advise"
}]

export default URL;