//initiate component
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
//import legion css
import './legion.css';


function CharacterItem({ character }) {
    console.log(character);
    return (
        <div className='legionBlock'>
            <h5>{character.characterName}</h5>
            <p>{character.characterClass}</p>
            {/* Display other character info... */}
        </div>
    );
}
export default CharacterItem