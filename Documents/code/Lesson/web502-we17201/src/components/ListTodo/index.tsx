import React from "react";

interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

type ListTodoProps = {
    todos: ITodo[];
    removeTodo: (id: number) => void;
};

const ListTodo = (props: ListTodoProps) => {
    return (
        <div>
            {props.todos.map((todo) => (
                <div key={todo.id}>
                    {todo.title} <button onClick={props.removeTodo.bind(this,todo.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default ListTodo;
