export async function fetchCurrentWeather(city) {
    if (!city)
    {
        throw new Error("City cannot be empty.");
    }

    const url = import.meta.env.VITE_API_URL;
    const key = import.meta.env.VITE_API_KEY;
    const call = `${url}/current.json?key=${key}&q=${city}&aqi=no`;

    const res = await fetch(call);
    if (!res.ok) throw new Error("Failed to fetch weather.")
    return res.json();    
}