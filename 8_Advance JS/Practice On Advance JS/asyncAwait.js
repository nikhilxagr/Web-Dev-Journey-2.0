
function fetchUserdata() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve({
              name: "Portfolio",
              url: "https://nikhilxagr.vercel.app/",
            });
        }, 3000);
    })
}


async function getUserData(){
    try {
        console.log('Fetching User Data....');
        const userData = await fetchUserdata ();
        console.log("Data Fetched Successfully");
        console.log("User Data :", userData);

    } catch (error){
        console.log("Error Fetching Data.." , error);
    }
}

getUserData();