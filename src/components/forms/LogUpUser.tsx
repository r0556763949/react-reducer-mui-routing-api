import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ShowUser from '../ShowUser'
import axios from 'axios';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const LogUpUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('YourComponent must be used within a UserProvider');
    }
    const { dispatch } = context;
    const [fName, setfName] = useState('');
    const [password, setPassword] = useState('');
    const [lName, setlName] = useState('');
    const [adress, setAdress] = useState('');
    const [phon, setPhon] = useState('');
    const [email, setEmail] = useState('');
    const [successlogup, setsuccesslogup] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const send = async () => {
        if (!email || !password) {
            setErrorMessage("אנא מלא את כל השדות!");
        } else {
            try {
                const response = await axios.post('http://localhost:3000/api/auth/register', {
                    email: email,
                    password: password,
                    address: adress,
                    phone: phon,
                    lastName: lName,
                    firstName: fName
                });
                dispatch({ type: 'CREATE_USER', payload: response.data.newUser })
                setsuccesslogup(true)
                setErrorMessage('');
            } catch (e: any) {
                if (e.response) {
                    setErrorMessage(e.response.data.message || "שגיאה בשרת");
                } else {
                    // במקרה של שגיאה אחרת (למשל, בעיית חיבור)
                    setErrorMessage("שגיאה בשרת");
                }
            }
        }

        // setsuccesslogup(true)
        // dispatch({ type: 'CREATE_USER' })
    }
    return (<>
        {!successlogup && <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="First Name"
                    value={fName}
                    onChange={(e) => setfName(e.target.value)}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Last Name"
                    value={lName}
                    onChange={(e) => setlName(e.target.value)}
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Number"
                    value={phon}
                    onChange={(e) => setPhon(e.target.value)}
                />
                {/* <TextField id="outlined-search" label="Search field" type="search" /> */}
                <TextField
                    required
                    id="outlined-required"
                    label="adress"
                    value={adress}
                    onChange={(e) => setAdress(e.target.value)}
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
                }}>
                    try again
                </Button>
            </div>
        )}
        {successlogup && <ShowUser />}
    </>
    );
}
export default LogUpUser;