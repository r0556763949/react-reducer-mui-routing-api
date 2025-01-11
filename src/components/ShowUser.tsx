import User from "../models/User"
import Profile from "./Profile";
import Edit from "./Edit"
import Login from "./Login";
import Delete from './Delete'
import MoreDetails from './MoreDetails'
import {UserProvider} from './UserContext'
import { UserContext } from './UserContext';
import { useContext, useState } from 'react';
import LogUp from './LogUp'

const ShowUser=()=>{
    const context = useContext(UserContext);
    const [activeForm, setActiveForm] = useState('all'); 
    
    return(<>
    <Profile/><br/>
    <div>{context?.state.firstName+" "+context?.state.lastName}</div>

    {(activeForm==='all'|| activeForm === 'edit') &&<Edit setActiveForm={setActiveForm} activeForm={activeForm}/>}
    {activeForm==='all'&&<Delete setActiveForm={setActiveForm} activeForm={activeForm}/>}
    {(activeForm === 'all' || activeForm === 'more') && <MoreDetails setActiveForm={setActiveForm} activeForm={activeForm}/>}

    </>)
}
export default ShowUser;