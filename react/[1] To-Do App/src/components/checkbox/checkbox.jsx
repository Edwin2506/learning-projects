import "./checkbox.css"

export default function Checkbox({checked, onToggle}) {
    return <>
        <input 
            type="checkbox" 
            className="checkbox"
            checked={checked}
            onChange={(e) => onToggle(e.target.checked)}
        />
    </>
}