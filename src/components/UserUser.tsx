import { Box } from '@mui/material';
import User from '../models/User'
import LogUp from './LogUp';
import Login from './Login';
import { useState } from 'react';
import { DeleteForever } from '@mui/icons-material';

function UserUser() {
    const [activeForm, setActiveForm] = useState(null);
    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                padding: 2,
            }}>
            {activeForm !== 'signup' && (
                <Login setActiveForm={setActiveForm} activeForm={activeForm} />
            )}
            {/* הצגת כפתור ההרשמה רק אם לא נבחרה כניסה */}
            {activeForm !== 'login' && (
                <LogUp setActiveForm={setActiveForm} activeForm={activeForm} />
            )}
        </Box>
    )
}
export default UserUser;

