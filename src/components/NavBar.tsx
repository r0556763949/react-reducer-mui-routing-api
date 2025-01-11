import { Link } from "react-router"
import { Box } from '@mui/material';
const NavBar = () => {
    return (
        <>
            <Box
                sx={{
                    position: 'absolute',
                    padding: '20px',
                    top: 0,
                    right: 0
                }}
            >
                <nav>
                    <Link to='home'>Home</Link>
                    |
                    <Link to='/about'>About</Link>
                </nav>
                </Box>
            </>
            )

}

            export default NavBar