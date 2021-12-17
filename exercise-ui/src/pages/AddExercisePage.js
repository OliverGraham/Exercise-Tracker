import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import TableHead from '../components/TableHead';
import TableData from '../components/TableData';
import TableDropDown from '../components/TableDropDown';
import Button from '../components/Button';

export const AddExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };        
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json', }
        });
        if (response.status === 201) {
            alert("Successfully added the exercise");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);        
        }
        history.push("/");
    };

    return (
        <div>
        <h2>Add Exercise</h2>
        <TableHead></TableHead>
            <TableData inputType={"text"} placeHolderText="Enter name" inputValue={name} setValue={setName}></TableData>
            <TableData inputType={"number"} placeHolderText="Enter reps" inputValue={reps} setValue={setReps}></TableData>
            <TableData inputType={"number"} placeHolderText="Enter weight" inputValue={weight} setValue={setWeight}></TableData>
            <TableDropDown unit={unit} setUnit={setUnit}></TableDropDown>
            <TableData inputType={"text"} placeHolderText="MM-DD-YY" inputValue={date} setValue={setDate}></TableData>  
        <Button onClickFunction={addExercise} buttonText={"Add"}></Button>
        </div>
    );    
}

export default AddExercisePage;