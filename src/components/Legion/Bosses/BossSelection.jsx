import React from 'react';
import { useDispatch } from 'react-redux';

// import boss css
import './bosses.css';


import akechiPic from '../../../assets/resizedBosses/Mob_Akechi_Mitsuhide.webp';
import ranmaruPic from '../../../assets/resizedBosses/Mob_Mori_Ranmaru.webp';

import zakumPic from '../../../assets/resizedBosses/Mob_Zakum.webp';
import horntailPic from '../../../assets/bosses/Full_Mob_Horntail.png';
import hillaPic from '../../../assets/resizedBosses/Mob_Hilla.webp';
import papulatusPic from '../../../assets/bosses/Mob_Papulatus_Clock.webp';
import cygnusPic from '../../../assets/bosses/Mob_Cygnus.webp';
import arkariumPic from '../../../assets/bosses/Mob_Arkarium.webp';
import guardianSlimePic from '../../../assets/bosses/Mob_Guardian_Angel_Slime.webp';
import omniPic from '../../../assets/bosses/Mob_OMNI-CLN.webp';

import blackMagePic from '../../../assets/bosses/Mob_Black_Mage.webp';


import magnusPic from '../../../assets/bosses/Mob_Magnus.webp';
import pinkBeanPic from '../../../assets/bosses/Mob_Pink_Bean.webp';


import vonBonPic from '../../../assets/bosses/Mob_Von_Bon.webp';
import queenPic from '../../../assets/bosses/Mob_Wrathful_Crimson_Queen.webp';
import pierrePic from '../../../assets/bosses/Mob_Pierre.webp';
import vellumPic from '../../../assets/bosses/Mob_Vellum.webp';


import lotusPic from '../../../assets/resizedBosses/Mob_Lotus_(2).webp';
import damienPic from '../../../assets/bosses/Mob_Damien_(2).webp';
import willPic from '../../../assets/bosses/Mob_Will_(3).webp';

import lucidPic from '../../../assets/bosses/Mob_Lucid.webp';

import gloomPic from '../../../assets/bosses/Mob_Giant_Monster_Gloom.webp';

import chosenSerenPic from '../../../assets/bosses/Mob_Chosen_Seren_(Weakened).webp';
import kalosPic from '../../../assets/bosses/Mob_Kalos_the_Guardian_(2).webp';
import vonLeonPic from '../../../assets/bosses/Mob_Von_Leon.webp';

import versusHillaPic from '../../../assets/bosses/Mob_Versus_Hilla.webp';
import darknellPic from '../../../assets/bosses/Mob_Guard_Captain_Darknell.webp';
import kalingPic from '../../../assets/bosses/Mob_Kaling.webp';

const bossToImage = {
    "zakum": zakumPic,
    "akechi": akechiPic,
    "blackMage": blackMagePic,
    "hilla": hillaPic,
    "lucid": lucidPic,
    "magnus": magnusPic,
    "papulatus": papulatusPic,
    "cygnus": cygnusPic,
    "lotus": lotusPic,
    "seren": chosenSerenPic,
    "pinkBean": pinkBeanPic,
    "kalos": kalosPic,
    "queen": queenPic,
    "vonBon": vonBonPic,
    "pierre": pierrePic,
    "vellum": vellumPic,
    "Ranmaru": ranmaruPic,
    "horntail": horntailPic,
    "vonLeon": vonLeonPic,
    "arkarium": arkariumPic,
    "damien": damienPic,
    "guardianSlime": guardianSlimePic,
    "omni-CLN": omniPic,
    "will": willPic,
    "gloom": gloomPic,
    "verusHilla": versusHillaPic,
    "darknell": darknellPic,
    "kaling": kalingPic,


    // ... other quests ...
};


function BossSelection({ boss, characterId }) {
    const dispatch = useDispatch();

    const handleCheckboxChange = (difficultyName) => {
        dispatch({ type: 'TOGGLE_BOSS_DIFFICULTY_ACTIVE', payload: { bossId: characterId, bossKey: boss.key, difficultyName } });
    };

    return (
        <div className='bossSelectionContainer' style={{ backgroundImage: `url(${bossToImage[boss.key]})` }}>
            {/* <div className='imageContainer'><img src={bossToImage[boss.key]} /></div> */}
            <div className='bossInfo'>
                <div className='bossName'>
                    <h3>{boss.name}</h3>
                </div>
            </div>
            <div className='difficultyConatiner'>
                {boss.difficulty.some(difficulty => difficulty.type === 'daily') && (
                    <>

                        <div className='diffContainer'>
                            <div className='bossDiffLabel'>Daily</div>
                            <div className='diffSelection'>
                                {boss.difficulty.filter(difficulty => difficulty.type === 'daily').map((difficulty, index) => (
                                    <div className={difficulty.name} key={index}>
                                        <label>
                                            {difficulty.name}
                                        </label>
                                        <input
                                            type="checkbox"
                                            checked={difficulty.isActive}
                                            onChange={() => handleCheckboxChange(difficulty.name)}
                                        />
                                    </div>
                                ))}
                            </div>


                        </div>

                    </>
                )}


                {/* Conditionally render the separator div if both Daily and Weekly difficulties are present */}
                {boss.difficulty.some(difficulty => difficulty.type === 'daily') && boss.difficulty.some(difficulty => difficulty.type === 'weekly') && (
                    <div className='diffContainerSeparator'></div>
                )}

                {boss.difficulty.some(difficulty => difficulty.type === 'weekly') && (
                    <>
                        <div className='diffContainer'>
                            <div className='bossDiffLabel'>Weekly</div>
                            <div className='diffSelection'>
                                {boss.difficulty.filter(difficulty => difficulty.type === 'weekly').map((difficulty, index) => (
                                    <div className={difficulty.name} key={index}>
                                        <label>
                                            {difficulty.name}
                                        </label>
                                        <input
                                            type="checkbox"
                                            checked={difficulty.isActive}
                                            onChange={() => handleCheckboxChange(difficulty.name)}
                                        />
                                    </div>
                                ))}
                            </div>

                        </div>

                    </>
                )}

                {boss.difficulty.some(difficulty => difficulty.type === 'Monthly') && (
                    <>
                        <div className='diffContainer'>
                            <div className='bossDiffLabel'>Monthly</div>
                            <div className='diffSelection'>
                                {boss.difficulty.filter(difficulty => difficulty.type === 'Monthly').map((difficulty, index) => (
                                    <div className={difficulty.name} key={index}>
                                        <label>
                                            {difficulty.name}
                                        </label>
                                        <input
                                            type="checkbox"
                                            checked={difficulty.isActive}
                                            onChange={() => handleCheckboxChange(difficulty.name)}
                                        />
                                    </div>
                                ))}
                            </div>

                        </div>

                    </>
                )}
            </div>

        </div>
    );
}

export default BossSelection;




// import React from 'react';
// import { useDispatch } from 'react-redux';

// function BossSelection({ boss, characterId }) {
//     const dispatch = useDispatch();

//     const handleCheckboxChange = (difficultyName) => {
//         dispatch({ type: 'TOGGLE_BOSS_DIFFICULTY_ACTIVE', payload: { bossId: characterId, bossKey: boss.key, difficultyName } });
//     };

//     return (
//         <div>
//             <h3>{boss.name}</h3>
//             {boss.difficulty.map((difficulty, index) => (
//                 <div key={index}>
//                     <label>
//                         <input
//                             type="checkbox"
//                             checked={difficulty.isActive}
//                             onChange={() => handleCheckboxChange(difficulty.name)}
//                         />
//                         {difficulty.name}
//                     </label>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default BossSelection;