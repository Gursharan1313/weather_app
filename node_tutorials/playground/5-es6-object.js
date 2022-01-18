const name = "Gursharan";
const userAge = 28;

const objN = {
    name,
    age:userAge,
    location:'delhi'
}

//console.log(objN)

///// Object Destructuring

const product = {
    label:'Red Label',
    price:3,
    stock:201,
    salePrice: undefined,
    rating: 4.2,
    child:{
        elem1:'test',
        child2:{
            elem2:'child2'
        }
    }
}

//const {label,stock} = product             // short hand for object
//const {label:productLabel,stock} = product          // change object property
const {label,stock,child,elem1=child.elem1,salePrice=500} = product          // Override Product Property if object doesn't have default value

// console.log(label)
// //console.log(productLabel)
// console.log(salePrice)

//// Object destructuring in Function

const transaction = (type, {label=0,stock=0}={}) => {
    console.log(type,stock,label)
}

transaction('order',product)   //in method desctructuring the object be declare as variable

//console.log(elem1);