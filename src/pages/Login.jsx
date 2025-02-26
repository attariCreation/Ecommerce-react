import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/loginSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin, loading, error } = useSelector(state => state.login);
  const [user, setUser] = useState({ userName: '', password: '' });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser(user));
  };

  // Redirect when login is successful
  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);

  return (
    <form 
      className="flex items-center justify-center min-h-screen bg-gray-900" 
      onSubmit={handleSubmit}
    >
      <div className="backdrop-blur-lg bg-white/10 p-10 rounded-2xl shadow-lg w-96 border border-white/20">
        <h2 className="text-white text-center text-2xl font-semibold mb-6">Login</h2>
        
        {/* ✅ FIXED: Changed component="form" to component="div" */}
        <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            required
            fullWidth
            label="Email"
            variant="outlined"
            name="userName"
            onChange={handleChange}
            InputProps={{ style: { color: 'white' } }}
            InputLabelProps={{ style: { color: '#aaa' } }}
          />

          <TextField 
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            onChange={handleChange}
            InputProps={{ style: { color: 'white' } }}
            InputLabelProps={{ style: { color: '#aaa' } }}
          />

          {loading && <p className="text-white text-sm text-center">Please wait...</p>}
          {error && <p className="text-red-500 text-sm text-center">Invalid credentials</p>}

          <Button 
            type="submit"
            variant="contained" 
            fullWidth 
            sx={{ bgcolor: '#007bff', mt: 2, '&:hover': { bgcolor: '#0056b3' } }}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Box>
      </div>
    </form>
  );
};

export default Login;
