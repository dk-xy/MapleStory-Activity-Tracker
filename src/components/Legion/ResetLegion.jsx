//initiate component
import React from 'react';
import { useDispatch } from 'react-redux';
//import legion css
import './legion.css';


function ResetLegion({ character }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        console.log("wesh delete")
        dispatch({ type: 'CHARACTER_RESET' });
      };
    
      return (
        <button onClick={handleClick}>
          Reset Characters
        </button>
      );
}


export default ResetLegion