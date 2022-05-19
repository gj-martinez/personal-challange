import fetch from 'node-fetch';


export const location = async (req, res, next) => {
    try {
        const ipApi = "http://ip-api.com/json/";

        const response = await fetch(ipApi);
        const data = await response.json();
        res.send(data);
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}