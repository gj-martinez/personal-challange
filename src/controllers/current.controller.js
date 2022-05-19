import fetch from 'node-fetch';
import config from '../config.js';

export const current = async (req, res, next) => {
    try {
        const ipApi = "http://ip-api.com/json/";
        let location = req.params.city;

        if(location === undefined){
            const response = await fetch(ipApi);
            const data = await response.json();
            location = data.city;
        }

        const apiWeatherCurrent = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + config.API_KEY;

        const currentResponse = await fetch(apiWeatherCurrent);
        const data = await currentResponse.json();
        res.send(data)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}