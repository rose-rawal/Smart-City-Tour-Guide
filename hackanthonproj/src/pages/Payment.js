import axios from "axios";
import React, { useContext } from "react";
import context from "../context/maincontext";

const Payment = () => {
  const { loginData } = useContext(context);
  const handlePayment = async (e, value) => {
    e.preventDefault();

    const payload = {
      return_url: "http://localhost:3000",
      website_url: "http://localhost:3000",
      amount: value * 10,
      purchase_order_id: "test12",
      purchase_order_name: "test",
      customer_info: {
        name: "user",
      },
    };

    try {
      console.log("hello");
      const response = await axios.post(
        "http://localhost:8000/payment/khalti-api",
        { payload, loginData }
      );
      if (response) {
        console.log("response:: ", response);
        // window.location.href = `${response?.data?.payment_url}`;
        // console.log("resp",response);
        // try {
        //   const resp1 = await axios.post(
        //     "http://localhost:3000/user/updateSubscription",
        //     loginData
        //   );
        //   console.log(resp1);
        // } catch (err) {
        //   console.log("Err while updating subsribe", err);
        // }
        console.log(response?.data?.data?.payment_url);
        window.location.href = `${response?.data?.data?.payment_url}`;

        // console.log(response?.data?.payment_url)
      }
    } catch (error) {
      console.log("error:" + error);
    }
  };
  return (
    <div>
      <h3 className="text-2xl font-bold pt-10">Availabe Packs:</h3>
      <div>
        <ul className="flex justify-around pt-48">
          <li
            className="bg-slate-100 rounded-xl px-3 py-2 hover:bg-slate-200 transition-all"
            onClick={(e) => handlePayment(e, 4500)}
          >
            <div className="w-40 h-40 overflow-hidden rounded-xl">
              <div className=" bg-yellow-400 hover:bg-yellow-300 transition-all w-full h-full rounded-xl text-3xl flex justify-center items-center hover:scale-125 ">
                T1
              </div>
            </div>
            <div className="text-xl">Gold</div>
            <div>1 Month Access</div>
            <div>NRs. 450</div>
          </li>
          <li
            className="bg-slate-100 rounded-xl px-3 py-2 hover:bg-slate-200 transition-all"
            onClick={(e) => handlePayment(e, 2500)}
          >
            <div className="w-40 h-40 overflow-hidden rounded-xl">
              <div className=" bg-slate-400 hover:bg-slate-300 transition-all w-full h-full rounded-xl text-3xl flex justify-center items-center hover:scale-125 ">
                T2
              </div>
            </div>
            <div className="text-xl">Gold</div>
            <div>6 Month Access</div>
            <div>NRs. 250</div>
          </li>
          <li
            className="bg-slate-100 rounded-xl px-3 py-2 hover:bg-slate-200 transition-all"
            onClick={(e) => handlePayment(e, 500)}
          >
            <div className="w-40 h-40 overflow-hidden rounded-xl">
              <div className="bg-yellow-800 hover:bg-yellow-700 transition-all w-full h-full rounded-xl text-3xl flex justify-center items-center hover:scale-125 ">
                T3
              </div>
            </div>
            <div className="text-xl">Gold</div>
            <div>1 Year Access</div>
            <div>NRs. 50</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Payment;
