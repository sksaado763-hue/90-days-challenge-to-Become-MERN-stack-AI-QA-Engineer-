function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Saad");
        }, 2000);
    });
}
function getProfile(profile){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("profile is loaded for"  + profile)
        },2000)

    })
}

function postUser(user){
    return new Promise((resolve)=>{
           setTimeout(()=>{
        resolve("user is post succusfully" + user)

    },2000)

    })
  
}

async function getData() {
    try {
         const user = await getUser();
         const profile = await getProfile(user);
         const post = await  postUser(user)

    console.log(user);
    console.log(profile)
    console.log(post)

    } catch (error) {
        console.log(error.message)
        
    }
   
}
getData();