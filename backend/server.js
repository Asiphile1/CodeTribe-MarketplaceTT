const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" },
  ]);
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  // Validating user credentials
  if (username === "test" && password === "test") {
    // Create a token
    const token = "token";
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





// mongodb+srv://<db_test-user01>:<db_thisIsTest01>@market.xdkfm.mongodb.net/?retryWrites=true&w=majority&appName=Market