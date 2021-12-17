import React from 'react';
import Exercise from './Exercise';
import TableHead from './TableHead';

function ExerciseList({ exercises, onDelete, onEdit }) {
    return (
        <table id="exercises">
            <TableHead></TableHead>
            <tbody>                
                {exercises.map((exercise, i) => <Exercise exercise={exercise}    
                    onDelete={onDelete} 
                    onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default ExerciseList;