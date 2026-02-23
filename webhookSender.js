const axios = require("axios");

// Function to send a webhook event
(async function sendWebhookEvent() {
  try {
    const response = await axios.post("http://localhost:3000/webhook/payment", {
      type: "payment_success",
      data: {
        orderId: "12345",
        amount: 100.0,
        currency: "USD",
      },
    });
    console.log("Webhook sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending webhook:", error.message);
  }
})();
