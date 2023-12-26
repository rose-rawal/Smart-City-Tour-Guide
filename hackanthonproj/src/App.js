import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import URL from "../src/routes/index";
import Header from "./layouts";
import Context from "./context/context";
function App() {
  return (
    <div className="App">
      <Context>
        <Header />
        <div className="pt-20"></div>
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
