function fetchUserdata() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post Data Fetched ");
        }, 2000);       
    });
}

function fetchCommentdata() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comment Data Fetched ");
        }, 3000);       
    });
}

async function getBlogData() {
    try {
        console.log("Fetching Blog Data...");
        const blogData = await fetchUserdata();
        const commentData = await fetchCommentdata();
        console.log("Blog Data Fetched Successfully");
        console.log("Blog Data :", blogData);
        console.log("Comment Data :", commentData);
    } catch (error) {
        console.log("Error Fetching Data...", error);
    } finally {
        const blogData = await fetchUserdata();
        const commentData = await fetchCommentdata();   
        console.log(blogData);
        console.log(commentData)

    }
}

getBlogData();