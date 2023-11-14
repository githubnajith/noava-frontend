import { NextResponse } from "next/server";
import axios from "axios";

const TEST_ENV = {
  client_id: "TEST1002125582e08172c88e6b2e372c55212001",
  key: "TEST9aa6687b8c665cf07dd7a2dff5d3f119ecab8148",
  url: "https://sandbox.cashfree.com/pg/orders",
};

const PRODUCTION_ENV = {
  client_id: "119024f618646b8dc22829a7cd420911",
  key: "cfsk_ma_prod_177209bb394ad63cd8b12240154087c6_2c2f0955",
  url: "https://api.cashfree.com/pg/orders",
};

export async function POST(request: Request) {
  const { price, email, whatsappNumber } = await request.json();

  const options = {
    method: "POST",
    url: PRODUCTION_ENV.url,
    headers: {
      accept: "application/json",
      "x-api-version": "2022-09-01",
      "content-type": "application/json",
      "x-client-id": PRODUCTION_ENV.client_id,
      "x-client-secret": PRODUCTION_ENV.key,
    },
    data: {
      customer_details: {
        customer_id: "7112AAA812234",
        customer_phone: whatsappNumber,
        customer_email: email,
      },
      order_id: "2314",
      order_meta: { return_url: `https://noava.in/account/payment-successfull/${21354}` },
      order_amount: price,
      // order_amount: 1,
      order_currency: "INR",
    },
  };

  try {
    const res = await axios.request(options);
    const data = await res.data;
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}
