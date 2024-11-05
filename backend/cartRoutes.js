// cartRoutes.js
const express = require("express");
const Cart = require("./models/Cart");

// Route to get cart items for a specific user
router.get("/cart", async (req, res) => {
  try {
    // Here, you i typically get the user ID from the request (authentication middleware needed)
    const userId = req.user.id;
    const cart = await Cart.findOne({ user: userId }).populate("items.product");
    res.json(cart ? cart.items : []);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
});

// Route to add items to the cart
router.post("/cart", async (req, res) => {
  const { productId, quantity } = req.body; // Expect productId and quantity in the request body
  const userId = req.user.id; 

  try {
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

    // Check if the product is already in the cart
    const existingItem = cart.items.find((item) =>
      item.product.equals(productId)
    );
    if (existingItem) {
      existingItem.quantity += quantity; // Increase quantity if it already exists
    } else {
      cart.items.push({ product: productId, quantity }); // Add new item to cart
    }

    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ error: "Failed to add item to cart" });
  }
});

module.exports = router;
