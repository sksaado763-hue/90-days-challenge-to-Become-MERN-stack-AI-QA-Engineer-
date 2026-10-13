async function getData() {
    try {
        const Response = await fetch(
              "https://jsonplaceholder.typicode.com/users"
        );

        if(!Response.ok){
            throw new Error("Faild to fetch ApI")
        }

        const users = await Response.json()

        const userName = users
        .filter((user)=>{
           return user.id > 5
        })
        .map((user)=>{
            return {
              name: user.name,
              name :user.email
            }

        })
        console.log(userName);
            
        
        
    } catch (error) {
        console.log(error.message)
    }
    
}

getData();

const products = [
    { name: "Laptop", price: 80000 },
    { name: "Mouse", price: 2000 },
    { name: "Keyboard", price: 5000 },
    { name: "Monitor", price: 30000 }
];

function getProduct(){
    const filterproduct = products
    .filter((item)=>{
        return item.price >10000
    })
    .map((item)=>{
        return{
           item: item.name,
           price: item.price
        }

    })
    console.log(filterproduct)

}
getProduct();
