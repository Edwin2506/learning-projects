import WeatherIcon from "../WeatherIcon/WeatherIcon";
import "./ForecastHourly.css"

export default function ForeCastHourly({forecast}) {
    const forecastTime = forecast.time;
    let time = forecastTime.split(" ")[1];
    const temp_c = forecast.temp_c;
    const summaryCode = forecast.condition.code;
    
    return (
        <div className="forecast-hourly">
            <WeatherIcon code={summaryCode}/>
            <p>{time}</p>
            <p id="forecast-hourly-temp_c">{temp_c}°</p>
        </div>
    )
}