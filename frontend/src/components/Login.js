import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import { Button, TextField, Typography, Box } from "@mui/material";
import "./CSS/Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await api.post("/login", { email, password });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/products"); // Redirect to the landing page
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src="/path-to-your-gif.gif"
          alt="Background GIF"
          className="background-gif"
        />
      </div>

      <div className="login-right">
        <Box
          sx={{
            width: "80%",
            maxWidth: "400px",
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h5" component="h1" gutterBottom>
            Login
          </Typography>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Don't have an account yet?{" "}
            <Link to="/register">Register here.</Link>
          </Typography>
        </Box>
      </div>
    </div>
  );
}

export default Login;

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await api.post('/auth/login', { email, password });
//       localStorage.setItem('token', res.data.token);
//       alert('User logged in successfully!');
//       console.log('Login response:', res.data);
//     } catch (error) {
//       console.error('Login error:', error.response?.data || error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;
