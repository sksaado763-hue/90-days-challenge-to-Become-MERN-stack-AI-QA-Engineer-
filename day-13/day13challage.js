
function getUsers() {
    return Promise.resolve(["Saad", "Ali"]);
}

function getPosts() {
    return Promise.reject("Posts API failed");
}

function getNotifications() {
    return Promise.resolve(5);
}

// async function loadDashboard() {
//     const result = await Promise.allSettled([
//         getUsers(),
//         getPosts(),
//         getNotifications()
//     ])
//     result.forEach((result)=>{
//         if(result.status === 'fulfilled'){
//             console.log(result.value)
//         }
//         else{
//             console.log("error"  , result.reason) ;
            
//         }
        


//     })
// }

// loadDashboard();


async function loadDashboard() {
    const results = await Promise.allSettled([
        getUsers(),
        getPosts(),
        getNotifications()
    ]);

    const successfulResults = results
        .filter((result) => {
            return result.status === 'fulfilled'
        })
        .map((result) => {
            return result.value
        });

    console.log(successfulResults);
}
loadDashboard()



