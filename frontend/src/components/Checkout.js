import api from '../services/api';

const Checkout = () => {
  const handleCheckout = async () => {
    try {
      const res = await api.post('/checkout');
      alert('Checkout completed successfully!');
      console.log('Checkout response:', res.data);
    } catch (error) {
      console.error('Checkout error:', error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Checkout;
