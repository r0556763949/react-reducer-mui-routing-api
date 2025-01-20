
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import AutorenewIcon from '@mui/icons-material/Autorenew';


const UpdateUser = ({ onClose }: { onClose: any }) => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('YourComponent must be used within a UserProvider');
    }
    const { state, dispatch } = context;
    const [fName, setfName] = useState(state.firstName);
    // const [password, setPassword] = useState(state.password);
    const [lName, setlName] = useState(state.lastName);
    const [adress, setAdress] = useState(state.address);
    const [phon, setPhon] = useState(state.phone);
    const [email, setEmail] = useState(state.email);
    const [edition, setEdition] = useState(true)
    const [errorMessage, setErrorMessage] = useState('');

    const send = async () => {
        try {
            const response = await axios.put('http://localhost:3000/api/auth/', {
                email: email,
                address: adress,
                phone: phon,
                lastName: lName,
                firstName: fName
            }, {
                headers: {
                    'user-id': state.id // הוסף את ה-userId כאן
                }
            });
            dispatch({ type: 'UPDATE_USER', payload: response.data })
            setEdition(false)
            setErrorMessage('');
        } catch (e: any) {
            if (e.response) {
                setErrorMessage(e.response.data.message || "שגיאה בשרת");
            } else {
                // במקרה של שגיאה אחרת (למשל, בעיית חיבור)
                setErrorMessage("שגיאה בשרת");
            }
        }
        onClose();
    }
    return (<>
        {edition && <Box
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
                    defaultValue={state.firstName}
                    value={fName}
                    onChange={(e) => setfName(e.target.value)}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Last Name"
                    defaultValue={state.lastName}
                    value={lName}
                    onChange={(e) => setlName(e.target.value)}
                />
                {/* <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> */}
                <TextField
                    required
                    id="outlined-required"
                    label="email"
                    defaultValue={state.email}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Number"
                    defaultValue={state.phone}
                    value={phon}
                    onChange={(e) => setPhon((e.target.value))}
                />
                {/* <TextField id="outlined-search" label="Search field" type="search" /> */}
                <TextField
                    required
                    id="outlined-required"
                    label="adress"
                    defaultValue={state.address}
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
    </>
    );
}
export default UpdateUser;
// { userToUpdate }: { userToUpdate: User }