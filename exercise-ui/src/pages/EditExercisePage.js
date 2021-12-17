import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import TableHead from '../components/TableHead';
import TableData from '../components/TableData';
import TableDropDown from '../components/TableDropDown';
import Button from '../components/Button';

export const EditExercisePage = ({ exerciseToEdit }) => {

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const history = useHistory();
    
    const editExercise = async () => {
        const editedExercise = { name, reps, weight, unit, date };        
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Successfully edited the exercise");
        } else {
            alert(`Failed to edit exercise, status code = ${response.status}`);        
        }
        history.push("/");
    };
    
    return (
        <div>
            <h2>Edit Exercise</h2> 
                <TableHead></TableHead>                
                    <TableData inputType={"text"} inputValue={name} setValue={setName}></TableData>
                    <TableData inputType={"number"} inputValue={reps} setValue={setReps}></TableData>
                    <TableData inputType={"number"} inputValue={weight} setValue={setWeight}></TableData>
                    <TableDropDown unit={unit} setUnit={setUnit}></TableDropDown>
                    <TableData inputType={"text"} inputValue={date} setValue={setDate}></TableData>
                <Button onClickFunction={editExercise} buttonText={"Save"}></Button>
        </div>
    );    

}

export default EditExercisePage;
