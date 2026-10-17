const products = [
    { name: "Laptop", price: 80000 },
    { name: "Mouse", price: 2000 },
    { name: "Keyboard", price: 5000 },
    { name: "Monitor", price: 30000 }
];

 function getData(products) {
    return products
    .filter((item)=>{
        return item.price > 5000
    })
    .map((item)=>{
        return item.price
    })
    .reduce((total , price)=>{
        return total + price
    })

}
console.log(getData(products))