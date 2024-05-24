// create empty page
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import AddCharacter from '../components/AddCharacter';

function Legion() {
    return (
        <div>
            <h1>Legion</h1>
            <AddCharacter />
        </div>
    )
}

export default Legion