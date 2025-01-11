import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import UpdateUser from './UpdateUser'
import LoginUser from './LoginUser'
import SendIcon from '@mui/icons-material/Send';
import ShowUser from './ShowUser';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Login = ({ setActiveForm, activeForm }: { setActiveForm: Function, activeForm: any }) => {
  const [openLogin, setopenLogin] = useState(false)
  const handleLoginClick = () => {
    setActiveForm(activeForm === 'login' ? null : 'login'); // עדכון ה-state של activeForm
    setopenLogin(!openLogin);
  };
  return (
    <>
        {!openLogin && <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={handleLoginClick}>
          login
        </Button>}
        {openLogin && activeForm === 'login' && <LoginUser />} {/* הוספת תנאי כדי להציג את LoginUser רק אם activeForm הוא 'login' */}
    </>
  );
}
export default Login;