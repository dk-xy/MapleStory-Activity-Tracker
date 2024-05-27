//initiate component
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import legion css
import './legion.css';


function CharacterItem({ character }) {
    console.log(character);
    return (
        <div className='legionBlock'>
            <h5>{character.characterInfo.characterName}</h5>
            <p>{character.characterInfo.characterClass}</p>
            <Link to={{
                pathname: `/legion/${character.characterInfo.id}`,
            }}>
                View Details
            </Link>
            {/* Display other character info... */}
        </div>
    );
}
export default CharacterItem