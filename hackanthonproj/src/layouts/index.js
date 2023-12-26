import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import URL from "../routes";
import context from "../context/maincontext";

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, onLogOut } = useContext(context);

  return (
    <div className="flex justify-between absolute w-full z-20">
      <h1 class="text-3xl font-bold text-gray-600 pl-20 py-4">City Connects</h1>

      <div className="w-1/2">
        <ul className="flex w-full font-mono text-xl h-full">
          {isLoggedIn ? (
            // User is logged in
            <>
              {URL.filter(
                (route) => route.name !== "SignUp" && route.name !== "Login"
              ).map((n) => (
                <li
                  key={n.path}
                  onClick={() => navigate(n.path)}
                  className="hover:bg-slate-100 h-full text-center cursor-pointer px-3 flex-1 pt-4"
                >
                  {n.name}
                </li>
              ))}
              <li
                onClick={onLogOut}
                className="hover:bg-slate-100 h-full text-center cursor-pointer px-3 flex-1 pt-4"
              >
                Logout
              </li>
            </>
          ) : (
            // User is not logged in
            URL.filter(
              (route) => route.name === "Login" || route.name === "Home"
            ).map((n) => (
              <li
                key={n.path}
                onClick={() => navigate(n.path)}
                className="hover:bg-slate-50 h-full text-center cursor-pointer px-3 flex-1 pt-4 rounded-lg"
              >
                {n.name}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
