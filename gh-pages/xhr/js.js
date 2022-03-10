document.getElementById('get-jokes').addEventListener("click", getJokes);

function getJokes(e) {
    const numberOfJokes = document.getElementById("text").value;

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://www.breakingbadapi.com/api/quotes", true);

    xhr.onload = function () {
        if (this.status === 200) {
            const res = JSON.parse(this.response);

            let output = "";
            res.forEach(element => {
                if (element.author === numberOfJokes) {
                    output += `
                        <li>
                            ${element.quote}
                        </li>
                    `
                }

                document.querySelector("#jokes").innerHTML = output

            });
            console.log(res)
        }
    }
    xhr.send();

    e.preventDefault();
}