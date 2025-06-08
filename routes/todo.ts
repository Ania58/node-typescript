import express from 'express';
import { getTodos, getTodo, addTodo, updateTodo, removeTodo } from '../data.js';

const router = express.Router();

router.get('/todos', (req, res) => {
    const todos = getTodos();
    res.status(200).json( { todos } );
});

router.get('todos/:id', (req, res) => {
    const todo = getTodo(+req.params.id);
    res.status(200).json( { todo } );
});

router.post('todos', (req, res) => {
    const text = req.body.text;
    const addedTodo = addTodo(text);
    res.status(201).json( { message: 'Todo added', todo: addedTodo } );
});



export default router;