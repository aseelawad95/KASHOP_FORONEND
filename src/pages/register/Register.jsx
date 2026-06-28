import { Box, Button, CircularProgress, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validations/RegisterSchems";
import { useState } from 'react';


export default function Register() {
 const [serverErrors,setServerErrors] = useState([]);
  
    const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm(
    {
      resolver:yupResolver(registerSchema),
    }
  );
  // const {register,handleSubmit} = useForm();
  const RegisterForm =async (data) => {
    try{
      const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register`,data);
      console.log(response);

    }catch(e){
      console.log(e.response.data.errors);
      setServerErrors(e.response.data.errors)
    }
  }
  return (
    

    <Box contentomponent='section' className='registerPage'>
     <Typography component="h1" variant='h2'>Register</Typography>

      {serverErrors.length > 0 ? serverErrors.map((error) =>
       <Typography color='error'>{error}</Typography>

    ) : ''}

       <Box onSubmit={handleSubmit(RegisterForm)} component='form' sx={{marginTop : 2 ,display:'flex',flexDirection:'column',gap:3}}>
         <TextField id="outlined-basic" {...register('username')} label="UserName" variant="outlined"
         error={errors.username}
          />
          <TextField id="outlined-basic" {...register('fullName')} label="FullName" variant="outlined" />
         <TextField id="outlined-basic" {...register('email')} label="Email" variant="outlined" />
         <TextField id="outlined-basic" {...register('phoneNumber')} label="PhoneNumber" variant="outlined" />
         <TextField id="outlined-basic" {...register('password')} label="Password" variant="outlined" />
       <Button variant="outlined" type='submit' disabled={isSubmitting}>
         {isSubmitting ? <CircularProgress/> : 'Register'}
       </Button>

       </Box>
    </Box>
  )
}
//test@@test@@95A