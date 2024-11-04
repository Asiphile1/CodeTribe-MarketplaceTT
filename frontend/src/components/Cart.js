import { useEffect, useState } from 'react';
import api from '../services/api';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const res = await api.get('/cart');
        setCartItems(res.data);
      } catch (error) {
        console.error('Error fetching cart items:', error.response?.data || error.message);
      }
    };
    fetchCartItems();
  }, []);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item._id}>
          <h3>{item.productTitle}</h3>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
