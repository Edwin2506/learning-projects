import WeatherIcon from "../WeatherIcon/WeatherIcon.jsx"
import "./ForecastInfo.css"
import expand from "../../assets/icons/functional/expand.svg"
import { useState } from "react";
import ForeCastHourly from "../ForecastHourly/ForecastHourly.jsx";

export default function ForecastInfo({forecast}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const summaryCode = forecast.day.condition.code;
    const maxTemperature = forecast.day.maxtemp_c;
    const minTemperature = forecast.day.mintemp_c;
    const date = new Date(forecast.date)
    const weekday = date.toLocaleDateString("en-EN", { weekday: "short" });
    const hourlyWeather = forecast.hour;

    const handleExpandButtonClick = () => {
        isExpanded ? setIsExpanded(false) : setIsExpanded(true);
    }

    return <div className="forecast-info-container">
        <div className="forecast-info-day">
            <WeatherIcon code={summaryCode}/>
            <p>{weekday}</p>
            <p className="forecast-info-temperature">{`${maxTemperature}°/${minTemperature}°`}</p>
            <button className={`expand-button ${isExpanded ? "rotate-upside-down" : null }`} onClick={handleExpandButtonClick}><img src={expand}></img></button>
        </div>
        { isExpanded ? 
            <div className="forecast-info-hourly-container">
                {hourlyWeather.map((forecast, index) => {
                    return <ForeCastHourly key={index} forecast={forecast}/>
                })}
            </div>
            : null 
        }
    </div>
}