//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const request = require('request')

//const url = 'http://api.weatherstack.com/current?access_key=4493577f08ec42caf2aeccd7188fb848&query=40.712776,-74.005974&units=f';
//error url  //const url = 'http://api.weatherstack.com/current?access_key=4493577f08ec42caf2aeccd7188fb848&query=40.71pppp2776,-74.005974&units=c';

const forecast = (latitute,logitude,callbackfn)=>{
  const url = 'http://api.weatherstack.com/current?access_key=4493577f08ec42caf2aeccd7188fb848&query='+latitute+','+logitude+'&units=f';

  request({url, json:true},(error,{body}={})=>{
     if(error){
       callbackfn('Unable to connent to network. Please again later')
     }
     else if(body.error){
        callbackfn(body.error.type)
     } 
     else{
      callbackfn(undefined,{
        description: body.current.weather_descriptions,
        currentTemp:body.current.temperature,
        feelLike:body.current.feelslike
      })
     }
  })

}

module.exports = forecast