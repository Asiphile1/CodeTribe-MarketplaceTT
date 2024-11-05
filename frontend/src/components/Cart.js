import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import api from "../services/api";


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch cart items
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await api.get("/cart");
        setCartItems(response.data);
      } catch (err) {
        setError("Failed to load cart items");
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  // Calculate subtotal
  const getSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  // Handle checkout
  const handleCheckout = async () => {
    try {
      // Make a request to your checkout API
      const response = await api.post("/checkout", { items: cartItems });
      // Handle success
      console.log("Checkout successful:", response.data);
      
    } catch (err) {
      console.error("Checkout failed:", err);
      setError("Checkout failed. Please try again.");
    }
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item._id}>
            {" "}
            
            
            <ListItemText
              primary={item.product.name} 
              
              secondary={`Price: $${item.product.price.toFixed(2)} x ${
                item.quantity
              }`}
            />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">
        Subtotal: ${getSubtotal().toFixed(2)}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCheckout}
        sx={{ marginTop: 2 }}
      >
        Checkout
      </Button>
    </Box>
  );
};

export default Cart;
