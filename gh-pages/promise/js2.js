const posts = [
    {
        title: "Post 1 title",
        body: "Post 1 body text",
    },
    {
        title: "Post 2 title",
        body: 'Post 2 body text',
    }
];

console.log("JS-2");
let postMessage = document.querySelector(".postMessage")

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject(error);
            }
        }, 3000);
    });
}

function getPosts() {
    setTimeout(() => {
        let output = '';

        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });

        document.body.innerHTML = output;
    }, 1000);
}

getPosts();

createPost({ title: "Post 3 title", body: "Post 3 body text" })
    .then(getPosts)
    .catch((error) => {
        console.log(error);
    })