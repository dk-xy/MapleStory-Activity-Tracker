import React from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Character() {
    const { id } = useParams();
    const legionData = useSelector(state => state.Legion);
    const character = legionData.Characters[id];
    // const character = location.state.character;



    return (
        <div className="character-page">
            <div>character</div>
            {<div>{character.characterInfo.characterName}</div>}
            {<div>{character.characterInfo.characterClass}</div>}
            {/* <Link to={linkName} state={{character: character, progression: progression } }>EDIT</Link> */}
           
       
        </div>


    )}
    ;
    