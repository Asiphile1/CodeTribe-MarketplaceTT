import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Register from "./components/Register";
import Login from "./components/Login";
import Landing from "./components/Landing";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Profile from "./components/Profile";
import "./App.css";


const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
