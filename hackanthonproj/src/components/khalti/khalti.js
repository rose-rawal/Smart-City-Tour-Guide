import KhaltiCheckout from "khalti-checkout-web";
import React from "react";

import config from "./khalticonfig";

export default function Khalti({ amount }) {
  let checkout = new KhaltiCheckout(config);
  return (
    <div>
      <button
        className="bg-purple-800 p-3 text-white cursor-pointer font-semibold text-sm rounded-md border-white border-2"
        onClick={() => {
          checkout.show({ amount: amount });
        }}
      >
        Pay Via Khalti
      </button>
    </div>
  );
}
