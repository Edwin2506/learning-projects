import "./input.css"

export default function Input({placeholder, type, value, onChange}) {
    return <>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange}/>
    </>
}