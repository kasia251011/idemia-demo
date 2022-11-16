import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useCallback, useRef, useState} from 'react';
import {useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';

const LoginPanel = () => {
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [isLoginInvalid, setIsLoginInvalid] = useState(false);
  const [loginHelperText, setLoginHelperText] = useState('');
  const navigate = useNavigate();

  const loginField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);
  
  const handleSubmit = useCallback(() => {
    const LOGIN = 'kasia';
    const PASSWORD = '1234';
    const isLoginCorrect = loginField.current?.value === LOGIN;
    const isPasswordCorrect = passwordField.current?.value === PASSWORD;
    const loginLenght = loginField.current?.value.length;
    resetLoginField();
    resetPasswordField();

    if(isLoginCorrect && isPasswordCorrect) {
      navigate('/home')
      
    } else {
      if(!isLoginCorrect) {
        setIsLoginInvalid(true);
      }
      if(loginLenght && loginLenght < 3) {
        setIsLoginInvalid(true);
        setLoginHelperText('Login must contain more than 3 letters');
      }
      if(!isPasswordCorrect) {
        setIsPasswordInvalid(true);
      }
    }
  },[]);

  const resetLoginField = useCallback(() => {
    setIsLoginInvalid(false);
    setLoginHelperText('');
  },[]);

  const resetPasswordField = useCallback(() => {
    setIsPasswordInvalid(false);
  },[]);
  

  return (
    <Box className="login-panel-container" sx={{backgroundColor: 'primary.light' }}>
      <Box className="login-panel" component={Paper}>
        <Typography variant="h6" sx={{marginBottom: '15px'}} > Welcome! </Typography>
        <Typography variant="subtitle1" sx={{marginBottom: '15px'}} > 
          Enter your login and password to access employees data 
        </Typography>
        <TextField  
          inputRef={loginField} 
          error={isLoginInvalid} 
          label="Login" 
          variant="outlined" 
          size="small" 
          margin="dense"
          helperText={loginHelperText}
          onClick={resetLoginField}
        />
        <TextField 
          error={isPasswordInvalid} 
          inputRef={passwordField} 
          label="Password" 
          variant="outlined" 
          size="small" 
          type="password" 
          margin="dense"
          onClick={resetPasswordField}
        />
        <Button variant="contained" sx={{marginTop: '20px'}} onClick={handleSubmit}>
          Log in
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPanel;