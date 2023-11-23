const request = require('request')

const geocode = (address, callback) =>
{
    const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?limit=2&access_token=pk.eyJ1IjoiYW1hbnlmZWtyeSIsImEiOiJjbHBiN2c1N2EwZXM0MmprN3o4cWtlaGs3In0.inHnNLt18B_ooHAv305G0A'

    request({ url: geocodeUrl, json: true }, (error, response) =>
    {
        if (error)
        {
            callback("Unable to connect geocode service", undefined)
        } else if (response.body.message)
        {
            callback(response.body.message, undefined)
        } else if (response.body.features.length == 0)
        {
            callback("Unable to find location", undefined)

        } else
        {
            callback(undefined, {
                longtitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],

            })

        }
    })
} 

module.exports = geocode