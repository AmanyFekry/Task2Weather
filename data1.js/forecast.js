const request = require('request')
const forecast = (latitude, longtitude, callback) =>
{
    const url = "https://api.weatherapi.com/v1/current.json?key=41b21d4987184c858e4215952232211&q=" + latitude + "," + longtitude

    request({ url, json: true }, (error, response) =>
    {
        if (error)
        {
            callback("Unable to connect weather website", undefined)
        } else if (response.body.error)
        {
            callback(response.body.error.message, undefined)
        } else
        {

            callback(undefined, response.body.location.name + 'It Is ' + response.body.current.condition.text + " And Temperture " + response.body.current.temp_c)
            // console.log(response.body.location.name)
            // console.log(response.body.current.condition.text)
        }

    })

}

module.exports = forecast
