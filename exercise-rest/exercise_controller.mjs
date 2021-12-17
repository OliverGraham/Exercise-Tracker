import * as exercises from './exercise_model.mjs';
import express from 'express';

const PORT = 3000;

const app = express();

app.use(express.json());

// Create -- POST
app.post('/exercises', (req, res) => {
    const body = req.body;    
    exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercise => {         
            res.status(201).json(exercise);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed' });
        });
});

// Read -- GET - gets an exercise by ID
app.get('/exercises/:_id', (req, res) => {       
    const exerciseId = req.params._id;
    exercises.findExerciseById(exerciseId)              
        .then(exercise => {                    
            if (exercise !== null) {           
                res.json(exercise);            
            } else {
                res.status(404).json({ Error: 'Resource not found' });      
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed' });
        });
});

// Read -- GET - returns all exercise documents in the database
app.get('/exercises', (req, res) => {
    exercises.findExercises({}, '', 0)     
        .then(exercise => {           
            res.json(exercise);
            
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed' });
        });
    
});

// Update -- PUT - replaces document properties with these given properties
 app.put('/exercises/:_id', (req, res) => {
    const body = req.body; 
    exercises.replaceExercise(req.params._id, body.name, body.reps, body.weight, body.unit, body.date)
        .then(numUpdated => {           
            if (numUpdated === 1) {
                res.json({ _id: req.params._id, name: body.name, reps: body.reps, weight: body.weight, unit: body.unit, date: body.date })
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed' });
        });
});

// Delete -- DELETE 
 app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});