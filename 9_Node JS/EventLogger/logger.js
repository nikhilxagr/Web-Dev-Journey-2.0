const fs = require('fs');
const os = require('os');

const eventemitter = require('events');

class Logger extends eventemitter {
    log(message) {
        // Call event
        this.emit('message', { message });
    }   
}

const logger = new Logger();

const logfile = './eventlog.txt';

const logToFile = (event => {
    const logMessage = `${new Date().toISOString()} - ${event.message}\n`;
    fs.appendFileSync(logfile, logMessage);
});

logger.on('message', logToFile);

setInterval(() => {
    const memoryUsage = (os.freemem() / os.totalmem()) * 100;
    logger.log(`Memory usage: ${memoryUsage.toFixed(2)}%`);
}, 3000);


logger.log('Event logger initialized. Starting to log memory usage every 3 seconds.');
logger.log('Logs will be saved to eventlog.txt');
