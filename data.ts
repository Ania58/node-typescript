interface Todo {
    id: number;
    text: string;
}

let TODOS: Todo[] = [];

export function getTodos() {
    return TODOS;
};