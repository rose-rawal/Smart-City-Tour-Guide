import Login from "../components/Login";
import Home from "../components/Home";
import { NearMe } from "../components/NearMe";
import Advise from "../components/Advise";
import Hotels from "../components/Hotels";
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
},{
    name:'Hotels',
    element:<Hotels/>,
    path:"/hotels"
}]

export default URL;