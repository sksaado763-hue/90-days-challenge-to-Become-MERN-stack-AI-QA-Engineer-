function getUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("user loaded")

        },2000)
    })
}

function getProfile(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("user profile is loaded")
        },2000)
    })
}

function getNotification(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("notification is hare!")
        },2000)
        
    })
}



async function getData(){
    try {
        const [user,profile,notification] = await Promise.all([
            getUser(),
            getProfile(),
            getNotification()
        ])
        console.log(user);
        console.log(profile);
        console.log(notification)
        
    } catch (error) {
        console.log(error.message)
    }
}

getData()