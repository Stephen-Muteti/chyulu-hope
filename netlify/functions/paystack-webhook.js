import crypto from "crypto";

export const handler = async (event) => {
  const secret = process.env.PAYSTACK_SECRET_KEY;

  console.log("Webhook headers:", event.headers);
  console.log("Webhook body:", event.body);

  const hash = crypto
    .createHmac("sha512", secret)
    .update(event.body)
    .digest("hex");

  if (hash !== event.headers["x-paystack-signature"]) {
    return { statusCode: 401, body: "Invalid signature" };
  }

  const payload = JSON.parse(event.body);

  if (payload.event === "charge.success") {
    const donation = payload.data;

    // TODO: store in DB, send email, etc.
    console.log("Donation received:", donation);
  }

  return { statusCode: 200, body: "Webhook received" };
};
