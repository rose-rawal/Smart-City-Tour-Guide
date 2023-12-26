import myKey from "./khaltikey.js";
// const axios = require('axios');
import axios from "axios";

let config = {
  // replace this key with yours
  publicKey: myKey.publicTestKey,
  productIdentity: "1234567890",
  productName: "Bid",
  productUrl: "http://localhost:3000/",
  eventHandler: {
    onSuccess(payload) {
      // hit merchant api for initiating verfication
      console.log(payload);
      let data = {
        token: payload.token,
        amount: payload.amount,
      };

      let config = {
        headers: {
          Authorization: "Key " + myKey.secretKey,
          "Content-Type": "application/json",
        },
      };

      axios
        .get("http://localhost:8000/api/users/", data, config)
        .then((response) => {
          alert("Payment Successful");
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);

          alert("Payment Failed");
        });
    },
    // onError handler is optional
    onError(error) {
      // handle errors
      console.log(error);
    },
    onClose() {
      console.log("widget is closing");
    },
  },
  paymentPreference: [
    "KHALTI",
    "EBANKING",
    "MOBILE_BANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};

export default config;
