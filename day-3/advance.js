const { use } = require("react")

function processUser(name , callback){
    console.log("processing " + name)

    callback()

}

function complateprocess(){
    console.log("user process complate succesfully")
}

processUser("saad" , complateprocess)


function downloadFile(callback){
    console.log("file is downloading ")

    setTimeout(()=>{
        console.log("file is downloaded successfully");
        callback()
    },3000)
}
function downloadCompalted(){
    console.log("download is complated successfully")
}

downloadFile(downloadCompalted)

  
function checkUser() {
    return new Promise((Response,rejeact)=>{
        let userExists = true;
        if(userExists === true){
            Response("User Exist")
        }else{
            rejeact("user is not exist")
        }

    })
}
checkUser().then((massage)=>{
    console.log(massage)
})
.catch((error)=>{
    console.log(error)
})


// function getUser() {
//     return new Promise((resolve) => {
//         resolve("Saad");
//     });
// }

// function getProfile(user){
//     return new Promise((resolve)=>{
//         resolve("Profile is loaded",  user)

//     })
// }
// function postUser(user){
//     return new Promise((resolve)=>{
//         resolve("Post reay for user" ,  user)

//     })
// }

// getUser()
//     .then((user) => {
//         console.log("user:",  user);
//         return getProfile(user)
//     })
//     .then((profile) => {
//         console.log("profile:", profile);
//         return postUser("saad")
//     })
//     .then((posts) => {
//         console.log("posts:", posts);
//     })
//     .catch((error) => {
//         console.log(error.message);
//     });


// function GetUser(){
//     return new Promise((resolve)=>{
//         resolve("Saad ")

//     })
// }


// function getProfile(user){
//     return new Promise((resolve)=>{
//         resolve(" Profile is loaded for" + user)

//     })

// }

// function PostUser(user){
//     return new Promise((resolve)=>{
//         resolve("post loaded for "  + user)
//     })

// }


// GetUser().then(( user)=>{
//     console.log("user :" , user);

//     return getProfile(user).then((profile)=>{
//         return {user, profile};

//     });
// })
// .then((data)=>{
//     console.log("profile :" , data.profile)
//     return PostUser(data.user)
// })
// .then((post)=>{
//     console.log("post :" , post)
// })
// .catch((error)=>{
//     console.log(error.massage)
// })



function getUser() {
    return new Promise((resolve) => {

        setTimeout(()=>{
            resolve("saad")
        },2000)

    });
}
function getProfile(user) {
    return new Promise((resolve) => {

        setTimeout(()=>{
            resolve("profile loaded for " + user)

        },2000)

    });
}

function PostUser(user){
    return new Promise((resolve)=>{

        setTimeout(()=>{
            resolve("post user :" + user)
        },2000)

    })

}

getUser()
    .then((user) => {
        console.log("User:", user);
            return getProfile(user).then((profile)=>{
                return{user, profile}

            })    
    })
    .then((Data)=>{
        console.log("profile :" , Data.profile);
        return PostUser(Data.user)

    })
    .then((posts)=>{
        console.log("Post loaded" , posts)

    })

//------------------------------asnyc and awit functions------

function getUser() {
  return Promise.resolve("Saad");
}

function getProfile(user) {
  return Promise.resolve(user + " - MERN Developer");
}


async function getdata() {
    try {
         const User = await getUser();
    const Profile = await getProfile(User)

    console.log(User);
    console.log(Profile)
}catch(error){
    console.log(error.massage)
}
}
   

getdata();