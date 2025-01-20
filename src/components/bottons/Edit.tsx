import Button from '@mui/material/Button';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import UpdateUser from '../forms/UpdateUser'
import {  useState } from 'react';

const Edit = ({ setActiveForm }:{setActiveForm:Function,activeForm:any}) => {
  const [openEditor, setopenEditor] = useState(false)
  // const context = useContext(UserContext);
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