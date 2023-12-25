
import logo from './logo.svg';
import {Route,Routes} from "react-router-dom"
import './App.css';
import URL from './routes';
import Context from './context/context';
function App() {
  return (
    <div className="App">
      <Context>
      <Routes>
    {URL.map((item)=>{
        return(
<Route key ={item.path} path={item.path} element={item.element}/>)
    })}

 </Routes>
 </Context>
    </div>
  );
}

export default App;
