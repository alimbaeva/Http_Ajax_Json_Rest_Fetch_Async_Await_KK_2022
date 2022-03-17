document.getElementById("button-1").addEventListener("click", getText);

function getText() {
    fetch('db1.txt').then((res) => {
        return res.text();
    })
        .then((data) => {
            document.getElementById("output").textContent = data;
        });
}



document.getElementById("button-2").addEventListener("click", getJSON);

function getJSON() {
    fetch('db.json').then((res) => {
        return res.json();
    })
        .then((data) => {
            let output = '';

            data.forEach((post) => {
                output += `<li>${post.title}</li>`
            })
            document.getElementById("output").innerHTML = output;
        })
        .catch((error) => {
            console.log(error)
        })
}



document.getElementById("button-3").addEventListener("click", getAPIData);

function getAPIData() {
    fetch('https://api.github.com/users')
        .then((res) => {
            return res.json();
        })
        .then((users) => {
            let output = '';
            users.forEach((user) => {
                output += `<li>${user.login}</li>`
            })
            document.getElementById("output").innerHTML = output;
        })

}