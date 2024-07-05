//initiate component
import React from 'react';
import { useDispatch } from 'react-redux';
//import legion css
import './legion.css';
import { IconTrash } from '@tabler/icons-react';


function ResetLegion({ character }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        console.log("wesh delete")
        dispatch({ type: 'CHARACTER_RESET' });
      };
    
      return (
        <button className='mapleButton warningButton' onClick={handleClick}>
          <IconTrash />
        </button>
      );
}


export default ResetLegion