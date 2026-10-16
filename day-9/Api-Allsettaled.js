// const tasks = [
//     Promise.resolve("Profile loaded"),
//     Promise.reject("Posts API failed"),
//     Promise.resolve("Notifications loaded")
// ];

// // async function loadDashboard() {
// //     const results = await Promise.allSettled(tasks);

// //     results.forEach((result) => {
    
// //         if(result.status === "fulfilled"){
// //             console.log(result.value)
// //         }
// //         else{
// //             console.log(result.reason)
// //         }
// //     });
// // }



// loadDashboard();


const tasks = [
    Promise.resolve({ name: "Saad" }),
    Promise.reject("Posts API failed"),
    Promise.resolve({ notifications: 5 })
];


async function loadDashboard() {
    const result = await Promise.allSettled(tasks);

    result.forEach((result)=>{
        if(result.status === "fulfilled" ){
            console.log(result.value)

        }
        else{
            console.log("something is going wrong");
        }
    })
    
}

loadDashboard();