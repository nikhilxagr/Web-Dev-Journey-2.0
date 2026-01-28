function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; 

            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error fetching data.");
            }
        }, 3000);
    });
}

fetchData()
    .then((message) => {
        console.log(message);   
    })
    .catch((error) => {
        console.error(error);   
    });


    // imp Point :
// A Promise is in one of these states:

// Pending: Initial state, neither fulfilled nor rejected.
// Fulfilled: Meaning that the operation completed successfully.
// Rejected: Meaning that the operation failed.

