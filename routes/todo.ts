import express from 'express';
import { getTodos, getTodo, addTodo, updateTodo, removeTodo } from '../data.js';

const router = express.Router();

router.get('/todos', (req, res) => {
    const todos = getTodos();
    res.json( { todos } );
});



export default router;