const posts = [];
let lastActivity = null;

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    });
}

function getLastActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivity = new Date();
            resolve();
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject('Error: No post to delete');
            }
        }, 1000);
    });
}

async function performOperations() {
    try {
        await createPost({ title: 'post1' });
        await getLastActivityTime();

        console.log('Posts:', posts);
        console.log('Last Activity:', lastActivity);

        const deletedPost = await deletePost();
        console.log('Deleted Post:', deletedPost);
        console.log('Updated Posts:', posts);
    } catch (error) {
        console.log('Error:', error);
    }
}

performOperations();
