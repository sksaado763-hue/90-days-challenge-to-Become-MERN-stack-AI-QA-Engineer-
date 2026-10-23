
const getUsers = () => {
    return Promise.resolve([
        { name: "Saad", active: true },
        { name: "Ali", active: false },
        { name: "Ahmed", active: true }
    ]);
};

const getProfile = () => {
    return Promise.reject("Profile API failed");
};

const getPosts = () => {
    return Promise.resolve([
        { title: "MERN Stack", likes: 100 },
        { title: "JavaScript", likes: 50 },
        { title: "React JS", likes: 150 }
    ]);
};

async function getData() {
    const result = await Promise.allSettled([
        getUsers(),
        getProfile(),
        getPosts()
    ]);

    const successfulResults = result
        .filter((result) => {
            return result.status === "fulfilled";
        })
        .map((result) => {
            if (Array.isArray(result.value)) {
                if (result.value.length > 0 && "active" in result.value[0]) {
                    return result.value
                        .filter((user) => user.active === true)
                        .map((user) => user.name);
                }

                if (result.value.length > 0 && "likes" in result.value[0]) {
                    return result.value
                        .filter((post) => post.likes > 80)
                        .map((post) => post.title);
                }
            }

            return [];
        });

    console.log(successfulResults);
}

getData();
