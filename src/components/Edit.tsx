import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import UpdateUser from './UpdateUser'
import { UserContext } from './UserContext';
import { useContext, useState } from 'react';
import { UserProvider } from './UserContext';

const Edit = ({ setActiveForm, activeForm }:{setActiveForm:Function,activeForm:any}) => {
  const [openEditor, setopenEditor] = useState(false)
  const context = useContext(UserContext);
  const handleEditorOpen = () => {
    setActiveForm('edit')
    setopenEditor(true); // החזרת ה-state לכפתור העריכה
  };
  const handleEditorClose = () => {
    setActiveForm('all')
    setopenEditor(false); // החזרת ה-state לכפתור העריכה
  };

  return (
    <>
      {!openEditor && <Button variant="contained" endIcon={<BorderColorIcon />} onClick={handleEditorOpen}>
        edit
      </Button>}
      {openEditor && <UpdateUser onClose={handleEditorClose} />} {/* העברת הפונקציה */}
      </>
  );
}
export default Edit;