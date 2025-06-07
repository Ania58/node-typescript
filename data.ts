interface Todo {
    id: number;
    text: string;
}

let TODOS: Todo[] = [];

export function getTodos() {
    return TODOS;
};

export function addTodo(text: string) {
    const newTodo = {
        id: Math.random(),
        text
    }
    TODOS.push(newTodo);
    return newTodo;
};