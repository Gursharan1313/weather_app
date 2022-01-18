console.log('test js')

/// tutorials

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })





const weatherForm = document.querySelector('form')
const formData = document.querySelector('input')
const pOne = document.querySelector('#p1')
const pTwo = document.querySelector('#p2')

pOne.textContent = 'Please Add Location in form'


weatherForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const data = formData.value
    fetch('http://localhost:3000/weather?address='+data).then((response) => {
        response.json().then((data) => {
           if(data.Rerror){
            pOne.textContent = data.Rerror 
           }
           else{
               console.log(data)
            pOne.textContent = data.Location
            pTwo.textContent = 'Temp: '+data.ForData.currentTemp+' Feel Like: '+data.ForData.feelLike+' Description: '+data.ForData.description
           }
        })
    })
})