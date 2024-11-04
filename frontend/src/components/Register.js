import React from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import api from '../services/api';
import './CSS/Register.css';

function Register() {
  return (
    <div className="register-container">
      <Box
        sx={{
          width: '80%',
          maxWidth: '400px',
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Register
        </Typography>
        <TextField fullWidth label="Username" margin="normal" />
        <TextField fullWidth label="Email" margin="normal" />
        <TextField fullWidth label="Password" type="password" margin="normal" />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Sign Up
        </Button>
      </Box>
    </div>
  );
}

export default Register;
















// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await api.post('/auth/register', { email, password });
//       alert('User registered successfully!');
//       console.log('Registration response:', res.data);
//     } catch (error) {
//       console.error('Registration error:', error.response?.data || error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleRegister}>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;
