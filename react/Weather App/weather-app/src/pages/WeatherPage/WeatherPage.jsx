import WeatherSearchbar from "../../components/WeatherSearchbar/WeatherSearchbar"
import WeatherInfo from "../../components/WeatherInfo/WeatherInfo"
import "./WeatherPage.css"
import { useState } from "react";
import { fetchCurrentWeather } from "../../services/fetchWeather";

export default function WeatherPage() {
    const [city, setCity] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [weather, setWeather] = useState(null);


    function HandleSearchbarChange(cityInput) {
        setCity(cityInput);
    }

    async function HandleCityRequest() {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchCurrentWeather(city);
            setWeather(data);
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false);
        }
    }

    return <>
        <WeatherSearchbar onSearchbarChange={HandleSearchbarChange} onButtonClick={HandleCityRequest}/>

        {   weather ? <WeatherInfo temperature={weather.current.temp_c} city={weather.location.name} country={weather.location.country} summaryCode={weather.current.condition.code}/>
            : loading ? <p>Loading...</p>
            : error ? <p>Error: {error.message}</p>
            : <p>Type in a City to get weather data!</p>
        }
    </>  
}