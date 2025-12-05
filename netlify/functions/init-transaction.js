import fetch from "node-fetch";

export const handler = async (event) => {
  try {
    const { amount, email, name, message } = JSON.parse(event.body);

    if (!amount || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing amount or email" }),
      };
    }

    const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY;

    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: Math.round(Number(amount) * 100), // convert USD → cents
        currency: "USD",
        metadata: {
          name,
          message,
        },
      }),
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
