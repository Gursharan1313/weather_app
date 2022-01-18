console.log('test js')

/// tutorials

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })


fetch('http://localhost:3000/weather?address=!').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})