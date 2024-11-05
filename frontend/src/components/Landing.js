import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import './CSS/Landing.css';

function Landing() {
  return (
    <div>
     
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CodeTribe Marketplace
          </Typography>
          <Box>
            <Button color="inherit" component={Link} to="/products">
              Products
            </Button>
            <Button color="inherit" component={Link} to="/profile">
              Profile
            </Button>
            <Button color="inherit" component={Link} to="/cart">
              Cart
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      
      
      <Box p={3}>
        <Typography variant="h4" gutterBottom>
          Welcome to CodeTribe Marketplace!
        </Typography>
        <Typography variant="body1">
          Explore a variety of tech hardware, from laptops to accessories.
        </Typography>
      </Box>
    </div>
  );
}

export default Landing;
