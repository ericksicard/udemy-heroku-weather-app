const request = require('request');

const forecast = ( latitude, longitude, cb ) => {
    const url = `https://api.darksky.net/forecast/0c4d4a0709ef4e3cfe59706c40748054/${latitude},${longitude}?units=si`;
    
    request({ url, json: true }, (err, { body }) => {
        if ( err ) cb( 'Unable to connect to weather services!', undefined );
        else if ( body.error ) cb( 'Unable to find location', undefined );
        else cb( undefined, {
            summary: body.daily.data[0].summary,
            temperature: body.currently.temperature,
            tempLow: body.daily.data[0].temperatureLow,
            tempHigh: body.daily.data[0].temperatureHigh,
            precipProbability: body.currently.precipProbability
        } )
    } )
};

module.exports = forecast;