import fetch from 'node-fetch';
import config from '../config.js';

export const forecast = async (req, res, next) => {
    try {
        const ipApi = "http://ip-api.com/json/";
        let location = req.params.city;

        if(location === undefined || location === "undefined"){
            const response = await fetch(ipApi);
            const data = await response.json();
            location = data.city;
        }

        const apiWeatherForecast = "http://api.openweathermap.org/data/2.5/forecast?q=" + location + "&appid=" + config.API_KEY;

        const forecastResponse = await fetch(apiWeatherForecast);
        const data = await forecastResponse.json();
        res.send(data);

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}