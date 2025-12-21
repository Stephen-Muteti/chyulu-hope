export const handler = async (event) => {
  try {
    console.log("Init function hit");

    const { amount, email, name, message } = JSON.parse(event.body);

    // Basic validation
    if (!amount || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing amount or email" }),
      };
    }

    const response = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          amount: amount * 100,
          currency: "USD",
          callback_url: "https://chyulu-hope.netlify.app/donation-success",
          metadata: { name, message, amount },
        }),
      }
    );

    const data = await response.json();
    console.log("Paystack response:", data);

    if (!response.ok || !data.status) {
      return {
        statusCode: 400,
        body: JSON.stringify(data),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.error("Init error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
