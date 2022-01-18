const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Definepatgs for express config
const publicDirPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//setup handlebars engine and views location
app.set('view engine','hbs') /// to access default views folder
app.set('views',viewsPath)   /// to access custom view folder
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirPath))

// console.log(__dirname)
// console.log(__filename)

//app.com
//app.com/help 
//app.com/about

app.get('', (req , res)=>{
   res.render('index',{
      title:'Weather App',
      name:'Gursharan Singh'
   });
})
app.get('/about', (req , res)=>{
   res.render('about',{
      title:'About Weather App',
      name:'Gursharan Singh'
   });
})

app.get('/help',(req,res)=>{
   res.render('help',{
      title: 'Help Message for help template',
      name:'Gursharan Singh'
   })
})

app.get('/weather',(req,res)=>{
   if(!req.query.address){
      return res.send({
         error:'Please add address in the query string'
      })
   }
   else{
      geocode(req.query.address,(Rerror,{Longitude,latitude,Location}={})=>{
         if (Rerror) {
            return res.send({
               Rerror
              })         }
        
           forecast(latitude,Longitude,(forError,ForData)=>{
              if(forError){
                return res.send({
                  forError
                 })
              }
              
                return res.send({
                  Location,  
                  ForData
                 })
              
           })       
       // console.log('Data:', data);
      })
   }


      
   // res.send([{
   //    location: req.query.address
   //  },{
   //    temp:'15deg',
   //    feellike: '30deg inside'
   // }])
})

app.get('/product',(req,res)=>{
   if(!req.query.search){
      return res.send({
         error:'You need to add get(QUERY STRING) in search'
      })
   }
   console.log(req.query)
   res.send({
      product: req.query.search,
      rating: req.query.rating
   })
})

app.get('/help/*',(req,res)=>{
   res.render('404',{
      title:'Help Article not FOund',
      name: 'Gursharan SIngh'
   })
})

app.get('*',(req,res)=>{
   res.render('404',{
      title:'Page Not FOund',
      name: 'Gursharan SIngh'
   })
})

app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
})