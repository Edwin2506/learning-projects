import ToDo from "../toDo/toDo";
import "./displayToDo.css"

export default function DisplayToDo({toDoList, onDelete, onToggle, onEdit}) {
    return (
        <div id="display-todo">
            {toDoList.map((todo, index) => (
                <ToDo 
                    key={index} 
                    description={todo.description} 
                    done={todo.done} 
                    onDelete={() => onDelete(index)}
                    onToggle={(checked) => onToggle(index, checked)}
                    onEdit={(newDescription) => onEdit(index, newDescription)}
                    />
            ))}
        </div>
    );
}