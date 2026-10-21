
function getUsers() {
    return Promise.resolve(["Saad", "Ali"]);
}

function getProfile() {
    return Promise.reject("Profile API failed");
}

function getPosts() {
    return Promise.resolve(["Post 1", "Post 2"]);
}

async function loadDashboard() {
    const results = await Promise.allSettled([
        getUsers(),
        getProfile(),
        getPosts()
    ]);

    // YOUR TASK:
    // 1. results ko forEach() se loop karo.
    results.forEach((result)=>{
            if(result.status === 'fulfilled'){
                console.log(result.value)
            }
            else{
                console.log("Error" , result.reason)
            }
            
        
    })
    // 2. Check karo ke result.status === "fulfilled" hai.
    // 3. Success ho to result.value print karo.
    // 4. Failure ho to result.reason print karo.
}

loadDashboard();
