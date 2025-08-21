import DisplayToDo from "../displayToDos/displayToDo";
import CreateToDo from "../createToDo/createToDo";
import { useState } from "react";
import "./toDoContainer.css";

export default function ToDoContainer() {
    const [todoList, setToDoList] = useState([]);

    function HandleAddToDo(description) {
        if (!description) {
            return;
        }

        const toDo = {description: description, done: false}
        setToDoList(prev => [...prev, toDo]);
    }

    function HandleDelete(index) {
        setToDoList(todoList.filter((_, i) => i !== index));
    }

    function HandleEdit(index, description) {
          setToDoList(prev =>
            prev.map((todo, i) =>
            i === index ? { ...todo, description: description } : todo
            )
        );
    }

    function HandleToggle(index, checked) {
        setToDoList(prev =>
            prev.map((todo, i) =>
            i === index ? { ...todo, done: checked } : todo
            )
        );
    }

    return (
        <div id="todo-container">
            <CreateToDo 
                toDoList={todoList} 
                onAddToDoClick={HandleAddToDo}
            />
            <DisplayToDo 
                toDoList={todoList} 
                onDelete={HandleDelete} 
                onToggle={HandleToggle}
                onEdit={HandleEdit}
            />
        </div>
    );
}
