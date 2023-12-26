import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
import URL from "./utils";
import Context from "./context/context.js";
=======
import URL from "../src/routes/index";
import Header from "./layouts";
import Context from "./context/context";
>>>>>>> 85f96e852ca564dbc4494267bc40e8663b928ea1
function App() {
  return (
    <div className="App">
      <Context>
<<<<<<< HEAD
=======
        <Header />
        <div className="pt-20"></div>
>>>>>>> 85f96e852ca564dbc4494267bc40e8663b928ea1
        <Routes>
          {URL.map((item) => {
            return (
              <Route key={item.path} path={item.path} element={item.element} />
            );
          })}
        </Routes>
      </Context>
    </div>
  );
}

export default App;
