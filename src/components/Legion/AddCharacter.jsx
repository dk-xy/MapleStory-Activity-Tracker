import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter } from '../../redux/actions/characters'; // Import your actions

function AddCharacter() {
    const classes = [
        "Angelic Buster",
        "Arch Mage (Fire, Poison)",
        "Arch Mage (Ice, Lightning)",
        "Aran",
        "Battle Mage",
        "Bishop",
        "Blaster",
        "Blaze Wizard",
        "Bowmaster",
        "Buccaneer",
        "Cannoneer",
        "Corsair",
        "Dark Knight",
        "Demon Avenger",
        "Demon Slayer",
        "Dual Blade",
        "Evan",
        "Hero",
        "Ice/Lightning Arch Mage",
        "Illium",
        "Kaiser",
        "Kanna",
        "Khali",
        "Kinesis",
        "Luminous",
        "Lynn",
        "Marksman",
        "Mechanic",
        "Mercedes",
        "Mihile",
        "Night Lord",
        "Night Walker",
        "Paladin",
        "Phantom",
        "Shade",
        "Shadower",
        "Thunder Breaker",
        "Wild Hunter",
        "Wind Archer",
        "Xenon",
        "Zero"
    ];
    const dispatch = useDispatch();
    const state = useSelector(state => state); // Access state with useSelector
    const characters = useSelector(state => state.characters); // Access state with useSelector
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // Find the maximum existing ID
        let maxId = 0;
        console.log(state.Legion.Characters)
        // console.log(characters)
        if (state.Legion.Characters) {
            maxId = Object.keys(state.Legion.Characters).length;
        }
        // Generate a new character with an incremented ID
        const newCharacter = {
            id: maxId + 1,
            characterName: data.characterName,
            characterClass: data.characterClass,
        };

        // Always ensure characters is an array
        const updatedCharacters = Array.isArray(characters)
            ? [...characters, newCharacter]
            : [newCharacter];

        dispatch(addCharacter(newCharacter));

        // // Retrieve existing progression from localstorage
        // const existingProgression = JSON.parse(localStorage.getItem('Progression')) || {};
        // const newProgression = {
        //     [newCharacter.id]: {
        //         arcaneRiver: {
        //             isActive: true,
        //             regions: {
        //                 vanishingJourney: {
        //                     name:"Oblivion",
        //                     class:"oblivion",
        //                     isActive: false,
        //                     completion: {
        //                         daily: false,
        //                         weekly: false
        //                     }
        //                 },
        //                 chuChuIsland: {
        //                     name:"Chu Chu",
        //                     class:"chuchu",
        //                     isActive: false,
        //                     completion: {
        //                         daily: false,
        //                         weekly: false
        //                     }
        //                 },
        //             }
        //         },
        //     },
        // };
        // // Merge existing progression with new progression
        // const updatedProgression = {
        //     ...existingProgression,
        //     ...newProgression
        // };

        // // Store updated progression back to localstorage
        // localStorage.setItem('Progression', JSON.stringify(updatedProgression));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="" {...register("characterName", { required: true })} />

            {/* include validation with required or other standard HTML validation rules */}
            <select {...register("characterClass")}>
                {classes.map((characterClass, index) => (
                    <option key={index} value={characterClass}>{characterClass}</option>
                ))}
            </select>
            {/* errors will return when field validation fails 
            {errors.exampleRequired && <span>This field is required</span>} */}

            <input type="submit" />
        </form>
    );
}

export default AddCharacter;