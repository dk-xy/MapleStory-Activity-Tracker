// CharacterInfo.jsx
import React from 'react';

// import other class images...
import mageIcon from '../../assets/classes/icon-job-magician.gif';
import thiefIcon from '../../assets/classes/icon-job-thief.gif';
import pirateIcon from '../../assets/classes/icon-job-pirate.gif';
import bowmanIcon from '../../assets/classes/icon-job-bowman.gif';
import warriorIcon from '../../assets/classes/icon-job-warrior.gif';

const classToIcon = {

    // Add all other classes here...

    "Angelic Buster": pirateIcon,
    "Arch Mage (Fire, Poison)": mageIcon,
    "Arch Mage (Ice, Lightning)": mageIcon,
    "Aran": warriorIcon,
    "Battle Mage": mageIcon,

    "Bishop": mageIcon,
    "Blaster": warriorIcon,
    "Blaze Wizard": mageIcon,
    "Bowmaster": bowmanIcon,
    "Buccaneer": pirateIcon,
    "Cannoneer": pirateIcon,
    "Corsair": pirateIcon,
    "Dark Knight": warriorIcon,
    "Demon Avenger": warriorIcon,
    "Demon Slayer": warriorIcon,
    "Dual Blade": thiefIcon,
    "Evan": mageIcon,
    "Hero": warriorIcon,
    "Ice/Lightning Arch Mage": mageIcon,
    "Illium": mageIcon,
    "Kaiser": warriorIcon,
    "Kanna": mageIcon,
    "Khali": thiefIcon,
    "Kinesis": mageIcon,
    "Luminous": mageIcon,
    "Marksman": bowmanIcon,
    "Mechanic": pirateIcon,
    "Mercedes": bowmanIcon,
    "Mihile": warriorIcon,
    "Night Lord": thiefIcon,
    "Night Walker": thiefIcon,
    "Paladin": warriorIcon,
    "Phantom": thiefIcon,
    "Shade": thiefIcon,
    "Shadower": thiefIcon,
    "Thunder Breaker": pirateIcon,
    "Wild Hunter": bowmanIcon,
    "Wind Archer": bowmanIcon,
    "Xenon": pirateIcon,
    "Zero": warriorIcon,

};

function CharacterInfo({ character }) {
    return (
        <div className='characterInfo'>
            <div className='infoHeader'>
                <img src={classToIcon[character.characterInfo.characterClass]} alt={character.characterInfo.class} />
                <h3 className='characterName'>{character.characterInfo.characterName}</h3>
            </div>
            <div className='characterClass'>{character.characterInfo.characterClass}</div>
        </div>

    );

}

export default CharacterInfo;