import "./createToDo.css"
import Input from "../input/input";
import Button from "../button/button";
import { useState } from "react";
import IconButton from "../iconButton/iconButton";
import addIcon from "../../assets/icons/add.svg";
import samplesIcon from "../../assets/icons/samples.svg";

export default function CreateToDo({onAddToDoClick}) {
    const [description, setDescription] = useState("");

    function handleClick() {
        onAddToDoClick(description);
        setDescription("");
    }

    function addSamples() {
        onAddToDoClick("Aufräumen");
        onAddToDoClick("Wäsche waschen");
        onAddToDoClick("Müll rausbringen");
        onAddToDoClick("Arzt Anrufen");
        onAddToDoClick("Möbel bestellen");
        onAddToDoClick("Geburtstag planen");
    }

    return (
        <div id="create-todo-container">
            <Input 
                type={"text"} 
                placeholder={"description..."} 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}/>
            <IconButton
                type={"button"} 
                value={"Add"} 
                onClick={handleClick}
                img={addIcon}
                />
            <IconButton
                type={"button"} 
                value={"Samples"} 
                onClick={addSamples}
                img={samplesIcon}
                />
        </div>
    );
}