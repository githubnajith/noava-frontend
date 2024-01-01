import { NextResponse } from "next/server";
import axios from "axios";
// firebase
import { dbUrl } from "@/vendors/1.firebase/firebase";
// -----------------------------------------------------------------------
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
  const { orderId } = await request.json();

  if (!orderId) return;
  const userId = orderId.split("_")[0];

  const options = {
    method: "GET",
    url: `${TEST_ENV.url}/${orderId}`,
    headers: {
      accept: "application/json",
      "x-client-id": TEST_ENV.client_id,
      "x-client-secret": TEST_ENV.key,
      "x-api-version": "2022-01-01",
    },
  };
  try {
    const res = await axios.request(options);
    const data = await res.data;

    if (!data) return;

    // write payment success db logic here and push to server
    if (data?.order_status === "PAID") {
      const orderUrl = `${dbUrl}/noava/users/${userId}/buyNow.json`;
      const shippingInfo = `${dbUrl}/noava/users/${userId}/shippingInfo.json`;
      const endPoints = [orderUrl, shippingInfo];

      const finalData = await axios.all(endPoints.map((endpoint) => axios.get(endpoint))).then(
        axios.spread(({ data: productData }, { data: shippingInfo }) => {
          return {
            productData: productData,
            orderData: data,
            userId,
            shippingInfo,
          };
        })
      );

      return NextResponse.json(finalData);
    }
    if (data?.order_status === "ACTIVE") {
      return NextResponse.json(data);
    }
    // ---------------------------------------------
  } catch (error) {
    console.log(error);
  }
}
