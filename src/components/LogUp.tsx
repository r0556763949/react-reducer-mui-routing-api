import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import UpdateUser from './UpdateUser'
import LoginUser from './LoginUser'
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import ShowUser from './ShowUser';
import LogUpUser from './LogUpUser';


const LogUp = ({ setActiveForm, activeForm }: { setActiveForm: Function, activeForm: any }) => {
  const [openLogup, setopenLogup] = useState(false)

  const handleLogUpClick = () => {
    setActiveForm(activeForm === 'signup' ? null : 'signup'); // עדכון ה-state של activeForm
    setopenLogup(!openLogup);
  };

  return (
    <>

        {!openLogup && <Button variant="contained" endIcon={<AddIcon />} onClick={handleLogUpClick}>
          sign up
        </Button>}
        {openLogup && activeForm === 'signup' && <LogUpUser />} {/* הוספת תנאי כדי להציג את LogUpUser רק אם activeForm הוא 'signup' */}
</>
  );
}
export default LogUp;