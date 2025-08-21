import "./button.css"

export default function Button ({type, value, onClick}) {
    return (
    <>
        <button className="btn" type={type} onClick={onClick}>{value}</button>
    </>
    );
}