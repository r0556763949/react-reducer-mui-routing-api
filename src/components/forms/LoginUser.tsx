import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ShowUser from '../ShowUser'
import axios from 'axios';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const LoginUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('YourComponent must be used within a UserProvider');
    }
    const { dispatch } = context;
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [successlogin, setsuccesslogin] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');

    const send = async () => {
        if (!email || !password) {
            setErrorMessage("אנא מלא את כל השדות!");
        } else {
            try {
                const response = await axios.post('http://localhost:3000/api/auth/login', {
                    email,
                    password
                });

                if (response.data) {
                    dispatch({ type: 'CREATE_USER', payload: response.data.user })
                    setsuccesslogin(true)
                    setErrorMessage('');
                }
                else {
                    setErrorMessage("הכניסה לא הצליחה. האם אתה רוצה להירשם או לנסות שוב?");
                }
            } catch (e: any) {
                console.log(e.response ? e.response.data.message : "שגיאה בשרת");
                setErrorMessage("הכניסה לא הצליחה. האם אתה רוצה להירשם או לנסות שוב?");
                return;
            }
        }
    }
    return (<>
        {!successlogin && <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <Button variant="contained" endIcon={<SendIcon />} onClick={send}>
                OK
            </Button>
        </Box>}
        {errorMessage && (
            <div>
                <p>{errorMessage}</p>
                <Button variant="contained" endIcon={<AutorenewIcon />} onClick={() => {
                    setErrorMessage('');
                    setemail('');
                    setPassword('');
                }}>
                    try again
                </Button>
            </div>
        )}
        {successlogin && <ShowUser />}
    </>
    );
}
export default LoginUser;