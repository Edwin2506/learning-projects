import "./iconButton.css"

export default function IconButton ({type, img, onClick}) {
    return (
    <>
        <button className="icon-btn"
        type={type} 
        onClick={onClick}>
        <img src={img} className="icon-btn-img"></img>
        </button>
    </>
    );
}