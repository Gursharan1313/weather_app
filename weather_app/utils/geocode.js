const request = require('request');

const geocode = (address, callbckfn)=>{
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address) +".json?access_token=pk.eyJ1IjoiZ3Vyc2hhcmFuLTEzMTMiLCJhIjoiY2t0cTcxMXc4MGM0ZjJ1cW9wMTduZHBodCJ9.QAxOgCZ9m7tjx4rRl6u96A";
    request({url, json:true},(error,{body}={})=>{
      if(error){
          callbckfn('Unable to connent to network. Please again later')
      }
      else if(body.message === "Not Found"){
          callbckfn('unable to locate location')
      }
      else{
          callbckfn(undefined, {
              Longitude: body.features[0].center[0],
              latitude: body.features[0].center[1],
              Location: body.features[0].place_name,
          }
          )
      }
     
    });
  }
  
module.exports = geocode