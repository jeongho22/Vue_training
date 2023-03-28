import axios from 'axios';

const API_KEY = '6c2a012baa652611128aa1d1b5f6c39d';
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const AIR_POLLUTION_URL = 'https://api.openweathermap.org/data/2.5/air_pollution';

export default {
    async getCurrentWeather(lat, lon) {
        const response = await axios.get(WEATHER_URL, {
            params: {
                lat: lat,
                lon: lon,
                appid: API_KEY,
                units: 'metric',
                lang: 'kr',
            },
        });
        return response.data;
    },

    async getAirPollution(lat, lon) {
        const response = await axios.get(AIR_POLLUTION_URL, {
            params: {
                lat: lat,
                lon: lon,
                appid: API_KEY,
            },
        });
        return response.data;
    },
};