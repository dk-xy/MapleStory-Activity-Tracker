// create empty page
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import AddCharacter from '../components/Legion/AddCharacter';
import CharacterItem from '../components/Legion/CharacterItem';
import ResetLegion from '../components/Legion/ResetLegion';
import { IconUsers, IconX, IconUserPlus } from '@tabler/icons-react';
import OverlayModal from '../components/OverlayModal';


function Legion() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const characters = useSelector(state => state.Legion.Characters);

    // Object.keys(characters).forEach(key => {
    //     console.log(characters[key].characterInfo);
    // });

    // console.log(characters)
    return (
        <div>
            <div className='legionHeader'>
                <h1>Legion</h1>

                <div className='legionButtons buttonContainer'>
                    <button className='mapleButton addButton' onClick={() => setIsModalOpen(true)}> <IconUserPlus /></button>
                    <OverlayModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                        <AddCharacter />
                    </OverlayModal>
                    <ResetLegion />
                </div>
            </div>



            {/* <AddCharacter /> */}

            <div className='legionGrid'>
                {characters && Object.keys(characters).length > 0 ? (
                    Object.keys(characters).map(key => (
                        <CharacterItem key={key} character={characters[key]} />
                    ))
                ) : (

                    <div className='screenMessage' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
                        <IconUserPlus color="rgba(74, 74, 74, 0.95)" size={68} />
                        <div>
                            No character in legion, <br />
                            please add a character
                        </div>

                        <button className='mapleButton addButton' onClick={() => setIsModalOpen(true)}> <IconUserPlus />Add Character</button>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Legion