// challenge 1

const prices = [100, 250, 500, 750, 1000];

let priceIncrease_10 = prices.map((TenPrcnt)=>{
    return TenPrcnt +  ( TenPrcnt * 0.10);

})
console.log(priceIncrease_10);

// challange number 2

const product = [
    { name: "Laptop", price: 80000 },
    { name: "Mouse", price: 2000 },
    { name: "Keyboard", price: 5000 },
    { name: "Monitor", price: 30000 }
];

let productWithIncreasedPrice = product.map((product) => {
    return {
        name: product.name,
        price: product.price + (product.price * 0.15)
    }
})

console.log(productWithIncreasedPrice);



// const products = [
  
//     { name: "Laptop", price: 80000 },
//     { name: "Keyboard", price: 5000 },
//     { name: "Monitor", price: 30000 },
//     { name: "Phone", price: 60000 }
// ];

// const filterdproducts = products.fillter((product) => {
//     return product.price > 30000;
   

// })

// console.log(filterdproducts);

// -------------------task number 3---------------------------

const newfillter = products.filter((product) =>{
    return product.price >= 5000
})
.map((product)=>{
    return{
        name:product.name,
        discount_price: product.price * 0.09
    }
})

console.log(newfillter)



//------------------ task number 4--------------------------------------



const cart = [
    { name: "Phone", price: 60000, quantity: 2 },
    { name: "Mouse", price: 2000, quantity: 3 },
    { name: "Keyboard", price: 5000, quantity: 1 }
];


const totalBill = cart.reduce((total, product)=>{
    return total = product.price * product.quantity

},0)
console.log(totalBill);



//------------------task number 4 


const products = [
    { id: 1, name: "Laptop", price: 80000 },
    { id: 2, name: "Mouse", price: 2000 },
    { id: 3, name: "Keyboard", price: 5000 },
    { id: 4, name: "Monitor", price: 30000 }
];


const user = products.find((user)=>{
    return user.id === 3;
})

console.log(user)

const prodct = products.some((pro)=>{
    return pro.price > 50000

})

console.log(prodct)


const every_product = products.every((product)=>{
    return product.price > 1500

})


console.log(every_product)

const low_to_high_price = products.sort((a ,b)=>{
    return a.price - b.price
})

console.log(low_to_high_price);

const high_to_low =products.sort((a , b)=>{
    return b.price - a.price
})
console.log(high_to_low)



const saad_user = {
    name: "Saad",
    age: 22,
    role: "MERN Developer"
};

const update_saad ={
    ...user,
    role: "MERN + AI Developer",
    city: "peshawar"
}

console.log(update_saad)

const developer = {
    name: "Saad",
    age: 22,
    role: "MERN + AI Developer",
    city: "Peshawar"
};

const { age , role} = developer;

console.log(name)
console.log(age)
console.log(role)

const {name: developername} =developer;

console.log(developername)

const {city = "peshawar"} =developer;

console.log(city)


const skills = ["JavaScript", "React", "Node.js", "MongoDB"];

// const [first = "js" , third = "node"]= skills

console.log(js)
console.log(node)


//--------------------Rast opreater -------------------


const numbers = [10, 20, 30, 40, 50,60];

const [first , second , ...remaining] = numbers


console.log(first)
console.log(second)
console.log(remaining)




// function calculateTotal(...number) {
//     const total =number.reduce((total, number)=>{
//     return total + number

// },0)
// console.log(total)
    
// }

// calculateTotal(20,24,23,26,37,38,39)


function calculateTotal(...prices) {
    const total = prices.reduce((total , prodct)=>{
        return total + prodct

    },0)
    console.log(total)
}

calculateTotal(1000, 2500, 500, 3000);