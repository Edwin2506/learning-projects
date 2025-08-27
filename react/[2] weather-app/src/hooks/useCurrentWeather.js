// alternative if you want to request after each key input. Maybe consider using debouncing.

import { useState, useEffect } from "react";
import { fetchCurrentWeather } from "../services/fetchWeather";

export function useWeather(city) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchCurrentWeather(city)
      .then(data => setWeather(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [city]);

  return { weather, loading, error };
}