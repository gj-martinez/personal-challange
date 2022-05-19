
import app from './app.js';
import config from './config.js';

app.listen(config.PORT);

console.log("Server listen on "+ config.PORT);