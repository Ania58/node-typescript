import express from 'express';
import { getTodos, getTodo, addTodo, updateTodo, removeTodo } from '../data.js';

const router = express.Router();

router.get('/todos', (req, res) => {
    const todos = getTodos();
    res.json( { todos } );
});

router.get('todos/:id', (req, res) => {
    const todo = getTodo(+req.params.id);
    res.json( { todo } );
});



export default router;