// create empty page
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import AddCharacter from '../components/Legion/AddCharacter';
import CharacterItem from '../components/Legion/CharacterItem';
import ResetLegion from '../components/Legion/ResetLegion';


function Legion() {

    const characters = useSelector(state => state.Legion.Characters);

    // Object.keys(characters).forEach(key => {
    //     console.log(characters[key].characterInfo);
    // });

    // console.log(characters)
    return (
        <div>
            <h1>Legion</h1>
            <ResetLegion />
            <AddCharacter />
            <div className='legionGrid'>
            {characters && Object.keys(characters).length > 0 ? (
                Object.keys(characters).map(key => (
                    <CharacterItem key={key} character={characters[key]} />
                ))
            ) : (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    No character in legion, please add a character
                </div>
            )}
            </div>

        </div>
    )
}

export default Legion