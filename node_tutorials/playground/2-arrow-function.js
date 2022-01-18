// const square = function(x){
//     return x*x
// }



// const square1 = (x) => {
//     return x * x
// }


// const square1 = (x) => x*x

// console.log(square1(2))

//// Normal function

// const event = {
//     name: 'Birthday Party',
//     printGuestList : function(){
//         console.log('Guest List For ' + this.name)
//     }
// }


//// Short hand function for above mention fucntion

// const event = {
//     name: 'Birthday Party',
//     guest: ['Gursharan','Sahib','Harry','Danis','Manjot','Sharry'],
//     printGuestList(){
//         console.log('Guest List For ' + this.name)

//         this.guest.forEach(function(g){
//             console.log(g +' is invited in '+ this.name)
//         })

//     }
// }


/////// This is not working in foreach as this for that loop is for loop itself its not for event, so we use arrow(=>) function to resolve this problem of this in this event

const event = {
    name: 'Birthday Party',
    guest: ['Gursharan','Sahib','Harry','Danis','Manjot','Sharry'],
    printGuestList(){
        console.log('Guest List For ' + this.name)

        this.guest.forEach((g)=>{
            console.log(g +' is invited in '+ this.name)
        })

    }
}

event.printGuestList()


//// Arrow function is not ideal for method itself as this in not indexable in it as it good for every this else