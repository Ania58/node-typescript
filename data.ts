interface Todo {
    id: number;
    text: string;
}

let TODOS: Todo[] = [];

export function getTodos() {
    return TODOS;
};

export function getTodo(id: number) {
    const todo = TODOS.find(t => t.id === id);

    if (!todo) {
        throw new Error ('Todo not found');
    };
    return todo;
}

export function addTodo(text: string) {
    const newTodo = {
        id: Math.random(),
        text
    }
    TODOS.push(newTodo);
    return newTodo;
};