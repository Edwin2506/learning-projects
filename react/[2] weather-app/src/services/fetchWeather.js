export async function fetchWeather(city, days) {
    if (!city)
    {
        throw new Error("City cannot be empty.");
    }

    const url = import.meta.env.VITE_API_URL;
    const key = import.meta.env.VITE_API_KEY;
    const call = `${url}/forecast.json?key=${key}&q=${city}&days=${days}&aqi=no&alerts=no`;

    const res = await fetch(call);
    if (!res.ok) throw new Error("Failed to fetch weather.")
    return res.json();    
}