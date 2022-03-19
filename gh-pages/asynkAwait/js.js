async function cart() {
    const res = await fetch("https://jsonplaceholder.typicode.com/user/1/posts");

    const posts = await res.json();

    return posts;
}

cart().then((posts) => {
    console.log(posts)
})
    .catch((err) => {
        console.error(err);
    })