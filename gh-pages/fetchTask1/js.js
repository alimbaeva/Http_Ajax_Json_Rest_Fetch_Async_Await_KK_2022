document.getElementById("button").addEventListener("click", getAPI);
const output = document.getElementById("output");

function getAPI() {
    fetch("https://api.github.com/users")
        .then((res) => {
            return res.json();
        })
        .then((users) => {
            users.forEach((user) => {
                const cart = document.createElement("div");
                cart.setAttribute("class", "cart");
                const img = document.createElement("img");
                img.setAttribute("alt", "foto");
                img.setAttribute("class", "foto");
                img.setAttribute("src", `${user.avatar_url}`);
                const login = document.createElement("h1");
                login.setAttribute("class", "login");
                const aLink = document.createElement("a")
                aLink.setAttribute("href", `${user.html_url}`)
                const button = document.createElement("button");
                button.setAttribute("id", "btn-link")

                login.innerHTML = `${user.login}`;
                aLink.innerHTML = 'Visit account ';

                cart.appendChild(img);
                cart.appendChild(login);
                button.appendChild(aLink)
                cart.appendChild(button);

                output.appendChild(cart);

            })
        })
}