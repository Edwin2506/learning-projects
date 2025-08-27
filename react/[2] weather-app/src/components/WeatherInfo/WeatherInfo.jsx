import "./WeatherInfo.css"
import cloudy from "../../assets/icons/weather/cloudy.svg"
import WeatherIcon from "../WeatherIcon/WeatherIcon"

export default function WeatherInfo({temperature, city, country, summaryCode}) {

    let containerGradientClass = "";

    temperature <= 10 ? containerGradientClass = "cold"
    : temperature <= 18 ? containerGradientClass = "normal"
    : containerGradientClass = "warm"
    ;

    return <div className={`weather-info-container ${containerGradientClass}`}>
        <div className="weather-info-icon">
            <WeatherIcon code={summaryCode}/>
        </div>
        <div className="weather-info">
            <h1>{temperature}°C</h1>
            <p>{city}, {country}</p>
        </div>
    </div>
}