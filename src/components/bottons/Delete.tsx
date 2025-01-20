
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

// { setActiveForm, activeForm }:{setActiveForm:Function,activeForm:any}
const Delete=()=> {

  return (
<> <Button variant="contained" endIcon={<DeleteIcon />} >
        delete
      </Button>

      </>
  );
}
export default Delete;