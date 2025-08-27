import rainy from "../../assets/icons/weather/rainy.svg"
import snowflake from "../../assets/icons/weather/snowflake.svg"
import sunnyAndRainy from "../../assets/icons/weather/sunny-and-rainy.svg"
import sunny from "../../assets/icons/weather/sunny.svg"
import thunderstrom from "../../assets/icons/weather/thunderstorm.svg"
import windy from "../../assets/icons/weather/windy.svg"
import partlyCloudy from "../../assets/icons/weather/partly-cloudy.svg"
import cloudyPurple from "../../assets/icons/weather/cloudy-purple.svg"
import cloudy from "../../assets/icons/weather/cloudy.svg"
import heavyRain from "../../assets/icons/weather/heavy-rain.svg"
import lightSnowing from "../../assets/icons/weather/light-snowing.svg"
import lightning from "../../assets/icons/weather/lightning.svg"

export default function WeatherIcon({code}) {
    
    const weatherIconMap = {
        // Clear / Sunny
        1000: sunny,
        
        // Partly cloudy / Cloudy
        1003: partlyCloudy,
        1006: cloudy,
        1009: cloudyPurple,
        
        // Mist / Fog / Wind
        1030: windy,
        1135: windy,
        1147: windy,
        
        // Rain / Drizzle
        1063: rainy,
        1150: rainy,
        1153: rainy,
        1168: rainy,
        1171: heavyRain,
        1180: rainy,
        1183: rainy,
        1186: rainy,
        1189: heavyRain,
        1192: heavyRain,
        1195: heavyRain,
        1198: rainy,
        1201: heavyRain,
        1204: rainy,
        1207: heavyRain,
        1240: rainy,
        1243: heavyRain,
        1246: heavyRain,
        1249: rainy,
        1252: heavyRain,
        1273: sunnyAndRainy,
        1276: thunderstrom,
        
        // Sleet / Ice
        1069: lightSnowing,
        1072: lightSnowing,
        1204: lightSnowing,
        1207: lightSnowing,
        1255: lightSnowing,
        1258: lightSnowing,
        1261: lightSnowing,
        1264: lightSnowing,
        
        // Snow
        1066: lightSnowing,
        1114: snowflake,
        1117: snowflake,
        1210: lightSnowing,
        1213: lightSnowing,
        1216: lightSnowing,
        1219: snowflake,
        1222: snowflake,
        1225: snowflake,
        1237: snowflake,
        1255: lightSnowing,
        1258: snowflake,
        1279: snowflake,
        1282: snowflake,
        
        // Thunder / Lightning
        1087: thunderstrom,
        1273: sunnyAndRainy,
        1276: thunderstrom,
        1279: lightning,
        1282: lightning,
        };
        
    const icon = weatherIconMap[code] || sunny;

    return <>
        <img src={icon} alt="weather icon"></img>
    </>
}