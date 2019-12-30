const request = require('request');

const geocode = ( address, cb ) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZXNyZnJlZSIsImEiOiJjazRobXpvY2gxYm9xM2VvNjVnN3g5NXZ5In0.mRSyRiQSdS6UDY0naSB0jw&limit=1`;

    request({ url, json: true }, (err, { body }) => {
        if ( err ) cb('Unable to connect to geolocation services!', undefined );
        else if ( body.features.length == 0 ) cb('Unable to find location. Try another search', undefined );
        else cb( undefined, {
            latitude: body.features[0].center[1],
            longitude: body.features[0].center[0],
            location: body.features[0].place_name
        } );
    })
}

module.exports = geocode;