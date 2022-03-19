
const output = document.querySelector(".output");

async function cart() {
    const res = await fetch("https://jsonplaceholder.typicode.com/user/1/posts");

    const posts = await res.json();

    return posts;
}

cart().then((posts) => {
    posts.forEach((post) => {
        const cart = document.createElement("div");
        cart.setAttribute("class", "cart");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");

        h2.innerHTML = `${post.title}`;
        p.innerHTML = post.body;

        cart.appendChild(h2);
        cart.appendChild(p);

        output.appendChild(cart);


    })

}).catch((err) => {
    console.error(err);
})
cart();