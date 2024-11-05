const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Product = require("./models/Product");

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

// Route for new products
app.post("/api/products", async (req, res) => {
  const { name, price } = req.body;
  try {
    const newProduct = new Product({ name, price });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
});

// Route to get all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// login 
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "test" && password === "test") {
    const token = "token";
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




// mongodb+srv://<db_test-user01>:<db_thisIsTest01>@market.xdkfm.mongodb.net/?retryWrites=true&w=majority&appName=Market