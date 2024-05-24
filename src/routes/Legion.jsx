// create empty page
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import AddCharacter from '../components/Legion/AddCharacter';
import CharacterItem from '../components/Legion/CharacterItem';


function Legion() {

    const characters = useSelector(state => state.Legion.Characters);

    // Object.keys(characters).forEach(key => {
    //     console.log(characters[key].characterInfo);
    // });

    // console.log(characters)
    return (
        <div>
            <h1>Legion</h1>
            <AddCharacter />
            <div className='legionGrid'>
                {Object.keys(characters).map(key => (
                    <CharacterItem key={key} character={characters[key].characterInfo} />
                ))}
                {/* {Object.keys(characters).forEach(key => {
                    console.log(characters[key].characterInfo);
                    <CharacterItem key={key} character={characters[key].characterInfo} />
                })} */}
            </div>

        </div>
    )
}

export default Legion