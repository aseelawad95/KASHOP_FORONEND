import { Box, Button, CircularProgress, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchems } from "../../validations/LoginSchems";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate();
  const [serverErrors, setServerErrors] = useState([]);
  const { register: login, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(LoginSchems),
  });

  const LoginForm = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BURL}/auth/Account/Login`,
        data,

      );
      console.log(response);
      localStorage.setItem("accessToken",response.data.accessToken);
      navigate('/');
    } catch (e) {
      console.log(e.response?.data?.errors);
      setServerErrors(e.response?.data?.errors || []);
    }
  };

  return (
    <Box component="section" className="loginPage">
      <Typography component="h1" variant="h2">Login</Typography>

      {Array.isArray(serverErrors) && serverErrors.length > 0 && serverErrors.map((error, i) => (
        <Typography key={i} color="error">{error}</Typography>
      ))}

      <Box
        onSubmit={handleSubmit(LoginForm)}
        component="form"
        sx={{ marginTop: 2, display: 'flex', flexDirection: 'column', gap: 3 }}
      >
        <TextField id="outlined-basic" {...login('email')} label="Email" variant="outlined"
          error={errors.email}
         />

       <TextField id="outlined-basic" {...login('password')} label="Password" variant="outlined"   error={errors.password}/>

        <Button variant="outlined" type="submit" disabled={isSubmitting}>
          {isSubmitting ? <CircularProgress size={24} /> : 'Login'}
        </Button>
      </Box>
    </Box>
  );
}
//test@@95AA