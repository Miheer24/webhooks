const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to receive webhook events
app.post("/webhook/payment", (req, res) => {
  const event = req.body;
  console.log("Received webhook event:", event);

  // Process the event (e.g., update order status, send notification, etc.)
  if (event.type === "payment_success") {
    console.log("Payment successful for order:", event.data.orderId);
    // Additional processing can be done here
  } else {
    console.log("Unhandled event type:", event.type);
  }
  // Respond to acknowledge receipt of the event
  res.status(200).send("Webhook received");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
