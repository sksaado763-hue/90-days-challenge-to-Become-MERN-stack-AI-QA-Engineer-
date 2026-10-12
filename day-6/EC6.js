function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Saad"), 1000);
  });
}

function getProfile() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("MERN Developer"), 2000);
  });
}

function getNotifications() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(5), 1500);
  });
}


async function loadDashBord(){
    try {
        const[User , profile , Notifications] = await Promise.all([
            getUser(),
            getProfile(),
            getNotifications(),
        ]);
        console.log("the user name is " , User);
        console.log("profile of the user " , profile );
        console.log("Your notification " , Notifications);
        
    } catch (error) {
        console.log(error.message)
    }

}

loadDashBord();


// Promise.allSettled  e.g

const p1 = Promise.resolve("User loaded");
const p2 = Promise.reject(new Error("Profile failed"));
const p3 = Promise.resolve("Notifications loaded");

async function loadDashboard() {
  const results = await Promise.allSettled([p1, p2, p3]);

  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Success:", result.value);
    } else {
      console.log("Error:", result.reason.message);
    }
  });
}

loadDashboard();