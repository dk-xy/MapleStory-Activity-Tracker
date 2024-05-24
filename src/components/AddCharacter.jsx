import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter } from '../redux/actions/addCharacter'; // Import your actions

function AddCharacter() {
    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters); // Access state with useSelector
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // Find the maximum existing ID
        
        
        // Generate a new character with an incremented ID
        const newCharacter = {
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
                <option value="AngelicBuster">Angelic Buster</option>
                <option value="Blaster">Blaster</option>
            </select>
            {/* errors will return when field validation fails 
            {errors.exampleRequired && <span>This field is required</span>} */}

            <input type="submit" />
        </form>
    );
}

export default AddCharacter;