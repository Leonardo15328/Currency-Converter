import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { LoginOutlined } from '@mui/icons-material';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [inpust, setInpust] = useState({name: "", email: "", password: "",});
  const handleChange = (e) => {setInpust((prevState) => ({
    ...prevState, [e.target.name] : e.target.value
  }))
};
  const handleSumbit  = (e) => {
    e.preventDefault();
    console.log(inpust);
  };
  const resetState = () => {
    setIsSignup(!isSignup);
    setInpust({name: '', email:"", password:""});
  };
  return (
    <div>
        <form onSubmit={handleSumbit}>

                <Box 
                display="flex" 
                flexDirection={"column"} 
                maxWidth={400} 
                alignItems={'center'} 
                justifyContent={'center'}
                margin="auto"
                marginTop={5}
                padding={3}
                borderRadius={5}
                boxShadow={'5px 5px 10px #ccc'}
                sx={{":hover": {
                  boxShadow: "10px 10px 20px #ccc"
                }}}
                >
    
                    <Typography variant='h2' padding={3} textAlign={'center'}>
                        {isSignup ? "Signup" : "Login"}
                    </Typography>
                    
                  {isSignup && (<TextField
                    onChange={handleChange} 
                    name= "name"
                    value={inpust.name}
                    margin={"normal"} 
                    type={"text"} 
                    variant='outlined' 
                    placeholder='Name'/>)}

                    <TextField 
                    onChange={handleChange}
                    name= "email"
                    value={inpust.email}
                    margin={"normal"} 
                    type={"email"} 
                    variant='outlined' 
                    placeholder='E-mail'/>

                    <TextField 
                    onChange={handleChange}
                    name= "passsword"
                    value={inpust.password}
                    margin={"normal"} 
                    type={"password"}
                    variant='outlined' 
                    placeholder='Password'/>

                    <Button
                    endIcon={isSignup ? <HowToRegIcon /> : <LoginOutlined />}
                    type='submit' 
                    sx={{marginTop: 3, 
                    borderRadius: 3}} 
                    variant='contained' 
                    color='warning' >
                    {isSignup ? "Signup" : "Login"}
                    </Button>

                    <Button 
                    endIcon={isSignup ?  <LoginOutlined /> : <HowToRegIcon />}
                    onClick={resetState}
                    sx={{marginTop: 3, borderRadius: 3}}>
                     Change To {isSignup ? "login" : "Signup"}
                    </Button>

                </Box>
        </form>
    </div>
  )
}

export default Auth