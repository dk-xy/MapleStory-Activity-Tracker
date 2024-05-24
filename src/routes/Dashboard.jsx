// create empty page
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                <h2>Character List</h2>
                <ul>
                    <li>Character 1</li>
                    <li>Character 2</li>
                    <li>Character 3</li>
                </ul>	
            </div>
        </div>
    )
}

export default Dashboard