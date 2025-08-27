import ForecastInfo from "../ForecastInfo/ForecastInfo";
import "./ForecastContainer.css"

export default function ForecastContainer({forecasts}) {
    return <div className="forecast-container">
        {forecasts.map((forecast, index) => (
                <ForecastInfo key={index} forecast={forecast}/>
            ))
        }
    </div>
}