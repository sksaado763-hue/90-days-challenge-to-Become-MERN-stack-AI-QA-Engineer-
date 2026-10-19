// const products = [
//     { name: "Laptop", price: 80000 },
//     { name: "Mouse", price: 2000 },
//     { name: "Keyboard", price: 5000 },
//     { name: "Monitor", price: 30000 }
// ];

//  function GetData(products) {
//     return products 
//     .filter((item)=>{
//         return item.price > 2000
//     })
//     .map((item)=>{
//          return item.name
//     })
//     .reduce((total , item)=>{
//        return total + item.lenght;
//     },0)

// }

// console.log(GetData(products));

// const cart = [
//     { name: "Phone", price: 60000 },
//     { name: "Mouse", price: 2000 },
//     { name: "Keyboard", price: 5000 },
//     { name: "Laptop", price: 80000 }
// ];

// function data(cart){
//     return cart
//     .filter((item)=>{
//         return item.price > 5000
//     })
//     .map((item)=>{
//         return item.price

//     })
//     .reduce((total ,item)=>{
//         return total + item
//     },0)


// }
// console.log(data(cart))

const cart = [
    { name: "Phone", price: 60000 },
    { name: "Mouse", price: 2000 },
    { name: "Monitor", price: 30000 },
    { name: "Laptop", price: 80000 },
    { name: "Keyboard", price: 5000 }
];

function data(cart){
    return cart
    .filter((item)=>{
        return item.name.startsWith("M")
    })
    .reduce((total ,item)=>{
        return total + item.price
    },0)


}
console.log(data(cart))