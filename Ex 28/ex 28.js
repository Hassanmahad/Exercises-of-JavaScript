function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve({ id: 1, name: "John Doe" });
            } else {
                reject("Failed to fetch user data");
            }
        }, 2000);
    });
}

async function displayData() {
    try {
        const user = await fetchUserData();
        console.log(user);
    } catch (error) {
        console.log("error");


    }
}


displayData()
// .then(data => console.log("User Data:", data))
// .catch(error => console.error("Error:", error));