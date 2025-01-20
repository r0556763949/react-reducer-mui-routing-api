import Profile from "./Profile";
import Edit from "./bottons/Edit"
import Delete from './bottons/Delete'
import MoreDetails from './MoreDetails'
import { UserContext } from './UserContext';
import { useContext, useState } from 'react';

const ShowUser = () => {
    const context = useContext(UserContext);
    const [activeForm, setActiveForm] = useState('all');

    return (<>
        <Profile /><br />
        <div>{context?.state.firstName + " " + context?.state.lastName}</div>

        {(activeForm === 'all' || activeForm === 'edit') && <Edit setActiveForm={setActiveForm} activeForm={activeForm} />}
        {activeForm === 'all' && <Delete />}
        {(activeForm === 'all' || activeForm === 'more') && <MoreDetails setActiveForm={setActiveForm} activeForm={activeForm} />}

    </>)
}
export default ShowUser;