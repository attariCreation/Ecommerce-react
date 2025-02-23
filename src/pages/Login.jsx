import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
const Login = () => {
  return (
    <div className="w-100 h-screen overflow-hidden">
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
       <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
      <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />

    </Box>
    </div>
  )
}
export default Login