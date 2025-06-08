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

router.patch('todos/:id', (req, res) => {
    const updatedTodo = updateTodo(+req.params.id, req.body.text);
    res.status(200).json( { message: 'Todo updated', todo: updatedTodo } );
});



export default router;