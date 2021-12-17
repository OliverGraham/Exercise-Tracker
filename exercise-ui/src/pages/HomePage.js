import React from 'react';
import { Link } from 'react-router-dom';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({ setExerciseToEdit }) { 

    const [exercises, setExercises] = useState([]);      
    const history = useHistory();  

    // Read
    const loadExercises = async () => {
        const response = await fetch('/exercises');    
        const data = await response.json();
        setExercises(data);             
    }

    // useEffect hook calls a function -> that function calls the Fetch API -> the Fetch API makes the HTTP request
    useEffect(() => {  // Update at the time of rendering
        loadExercises();  
    }, []);        
    
    // Update   
    const onEdit = exercise => {  
        setExerciseToEdit(exercise);          
        history.push("/edit-exercise");
    }

    // Delete
    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {      
            setExercises(exercises.filter(exercise => exercise._id !== _id));   // to update, include set of exercises that doesn't include the one to be deleted
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`);
        }
    };

    return (
        <>
            <h2>Exercise Tracker</h2>
            <ExerciseList exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExerciseList>    
            <Link className="link" to="/add-exercise">Add an exercise</Link>
        </>
    );
}

export default HomePage;