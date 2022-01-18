// setTimeout(()=>{
//     console.log('2 seconds are up');
// },)

// const add = (x,y,callback) => {
//     setTimeout(()=>{
//         const data = x+y;
//             //return data;
//         callback(data);

//     },2000);
// }

//  add(4,1,(parm)=>{
//     console.log(parm);
// });
// //console.log(add(1,4));

// setTimeout(()=>{
//     console.log('2 seconds are up');
// },)

// tutorial END


setTimeout(()=>{
    console.log('its a 2 second delay');
},1000 );

const add = (v1,v2,callbackfn)=>{
    setTimeout(()=>{
        const sum = v1+v2;
        callbackfn(sum);
    },2000);
};

add(4,1,(sum)=>{
    console.log(sum);
});