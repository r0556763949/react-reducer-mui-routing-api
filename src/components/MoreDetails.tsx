import * as React from 'react';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/material/Icon'
import { UserProvider } from './UserContext'
import { UserContext } from './UserContext';
import { useContext, useEffect, useState } from 'react';
import ArticleIcon from '@mui/icons-material/Article';


const MoreDetails = ({ setActiveForm, activeForm }: { setActiveForm: Function, activeForm: any }) => {
    const context = useContext(UserContext);
    const currentUser = context?.state
    const [openMore, setopenMore] = useState(true)

    const handmoreClick = () => {
        setActiveForm('more')
        setopenMore(false)
    }
    const handlessClick = () => {
        setActiveForm('all')
        setopenMore(true)
    }

    return (
        <> {openMore && <Button variant="contained" endIcon={
            <ArticleIcon />} onClick={handmoreClick}>
            more detailes
        </Button>}
            {!openMore && <div>email:{currentUser?.email}<br />
                adress:{currentUser?.address}<br />
                phone:{currentUser?.phone}<br />
            </div>}
            {!openMore && <Button variant="contained" endIcon={<HomeIcon />} onClick={handlessClick}>
                less details
            </Button>}
        </>
    );
}
export default MoreDetails;



