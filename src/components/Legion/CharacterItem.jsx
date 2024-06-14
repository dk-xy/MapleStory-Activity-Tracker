//initiate component
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import legion css
import './legion.css';
import ShowMiniProgWeeklies from './legionCard/ShowMiniProgWeeklies';

// Import shared icons
import mageIcon from '../../assets/classes/icon-job-magician.gif';
import thiefIcon from '../../assets/classes/icon-job-thief.gif';
import pirateIcon from '../../assets/classes/icon-job-pirate.gif';
import bowmanIcon from '../../assets/classes/icon-job-bowman.gif';
import warriorIcon from '../../assets/classes/icon-job-warrior.gif';

import ShowMiniProg from './legionCard/ShowMiniProg';
import ShowBossProgress from './legionCard/ShowBossProgress';
import ShowSymbolProg from './legionCard/ShowSymbolProg';
// import thiefIcon from '../assets/classes/icon-job-thief.gif';
// import pirateIcon from '../assets/classes/icon-job-pirate.gif';
// import bowmanIcon from '../assets/classes/icon-job-bowman.gif';
// import warriorIcon from '../assets/classes/icon-job-warrior.gif';


function CharacterItem({ character }) {
    const hasActiveSymbol = Object.values(character.progression.symbols.arcaneRiver.regions).some(symbol => symbol.isActive);
    const hasActiveGrandis = Object.values(character.progression.symbols.grandis.regions).some(symbol => symbol.isActive);
    const hasActiveDaily = character.progression.dailies.isActive;
    const hasActiveWeekly = character.progression.weeklies.isActive;
    // const hasActiveBoss = Object.values(character.bosses).flat().some(boss => boss.difficulties.some(difficulty => difficulty.isActive));
    const hasActiveBoss = Object.values(character.bosses).some(bossRegion =>
        Object.values(bossRegion).some(boss =>
            boss.isActive && boss.difficulty.some(difficulty => difficulty.isActive)
        )
    );


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
    console.log(character);
    return (
        <div className='legionBlock'>
            <div className='legionBlockHeader'>
                <img src={classToIcon[character.characterInfo.characterClass]} alt={`${character.characterInfo.characterClass} icon`} />
                <h5>{character.characterInfo.characterName}</h5>

            </div>

            <div className='miniIndicatorContainer'>
                {(hasActiveSymbol || hasActiveGrandis) && <ShowSymbolProg character={character} />}
                {hasActiveDaily && <ShowMiniProg character={character} />}
                {hasActiveWeekly && <ShowMiniProgWeeklies character={character} />}
                {/* <ShowBossProgress character={character} /> */}
                {hasActiveBoss && <ShowBossProgress character={character} />}

            </div>

            <Link to={{
                pathname: `/legion/${character.characterInfo.id}`,
            }}>
                View Details
            </Link>
            {/* Display other character info... */}
        </div>
    );
}
export default CharacterItem;