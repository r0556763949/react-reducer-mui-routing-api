import { Box } from '@mui/material';
import LogUp from './bottons/LogUp';
import Login from './bottons/Login';
import { useState } from 'react';

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

