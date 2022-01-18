
const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=4493577f08ec42caf2aeccd7188fb848&query=40.712776,-74.005974&units=f';

const request = http.request(url,(response)=>{
    let data = ''
    response.on('data',(chunk)=>{
        //console.log(chunk.toString());
        data = data+chunk.toString()
        //console.log(data)
    })

    response.on('end',()=>{
        const body = JSON.parse(data)
        console.log(body)
    })

})


request.on('error',(error)=>{
    console.log('An ERROR',error);
})

request.end();