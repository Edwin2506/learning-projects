import "./WeatherSearchbar.css"

export default function WeatherSearchbar({onSearchbarChange, onButtonClick}) {
    return <div className="weather-searchbar-container">
        <input 
            className="weather-searchbar" 
            type="text" 
            placeholder="enter a city..."
            onChange={(e) => onSearchbarChange(e.target.value)}
            />

        <button 
            className="weather-searchbar-button" 
            type="button"
            onClick={onButtonClick}
            >Submit
            </button>
    </div>
}