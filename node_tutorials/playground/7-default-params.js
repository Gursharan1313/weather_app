// with no default value
const greeter = (name)=>{
    console.log('Hello'+ name)
}

greeter('guri')


// with default value
const greeter1 = (name='user',age)=>{
    console.log('Hello'+ name)
}

greeter1()