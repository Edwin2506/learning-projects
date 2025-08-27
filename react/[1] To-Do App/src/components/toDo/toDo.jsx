import { useState } from "react";
import Button from "../button/button";
import Checkbox from "../checkbox/checkbox";
import "./toDo.css"
import IconButton from "../iconButton/iconButton";
import deleteIcon from "../../assets/icons/delete-svgrepo-com.svg"
import editIcon from "../../assets/icons/edit-3-svgrepo-com.svg"
import saveIcon from "../../assets/icons/save-svgrepo-com.svg"

export default function ToDo({description, onDelete, onToggle, done, onEdit}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(description);

    function HandleEdit() {
        setIsEditing(!isEditing);
    }

    function HandleSave() {
        onEdit(editValue);
        setIsEditing(false);
    }

    return <div id="todo" className={`${done ? 'done' : ''}`}>
        <Checkbox onToggle={onToggle} checked={done}/>

        {isEditing ? (
            <>
            <input 
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                />
            <IconButton type={"button"} value={"save"} onClick={HandleSave} img={saveIcon}/>
            </>
        ): (
            <>
            <p>{description}</p>
            <IconButton type={"button"} value={"delete"} onClick={onDelete} img={deleteIcon}/>
            <IconButton type={"button"} value={"edit"} onClick={HandleEdit} img={editIcon}/>
            </>
        )}
        
        
    </div>
}