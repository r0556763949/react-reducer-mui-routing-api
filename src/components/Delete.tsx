import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Delete=({ setActiveForm, activeForm }:{setActiveForm:Function,activeForm:any})=> {

  return (
<> <Button variant="contained" endIcon={<DeleteIcon />} >
        delete
      </Button>

      </>
  );
}
export default Delete;