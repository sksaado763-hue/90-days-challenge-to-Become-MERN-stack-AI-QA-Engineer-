async function getData() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if(!response.ok){
            throw new Error ("faild to fetch user ")
        }

        const users =await response.json();

        console.log(users)
    } catch (error) {
        console.log(error.message)
        
    }
    
}

getData()