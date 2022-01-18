const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// const url = 'http://api.weatherstack.com/current?access_key=4493577f08ec42caf2aeccd7188fb848&query=40.712776,-74.005974&units=f';

// request({url: url, json:true},(error, response)=>{
//     const weather = response.body.current;
//     //const data = JSON.parse(response.body);
//     //console.log(response.body.current);
//    console.log(weather.weather_descriptions+'.' +"It's currently "+weather.temperature+" degrees out. It feels like "+weather.feelslike+" degrees out")
// });
if(process.argv[2])
{    geocode(process.argv[2],(error, { Longitude, latitude, Location } = {}) => {
        if (error) {
            return console.log('ERROR:', error);
        }
        //console.log('tes:', 'I test test HANNAH test')    
        forecast(latitude, Longitude, (error, Fdata) => {
            if (error) {
                return console.log('Error:', error);
            }
            console.log('FROM:', Location);
            console.log('Data:', Fdata);
        });
    })
}
else{
    console.log('Please Enter Location');
}