document.getElementById("get-data").addEventListener("click", loadData);

function loadData() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "dbe.txt", true);

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.response);
            document.querySelector(".output").innerHTML = `
            <p>
            ${this.response}
            </p>
            `
        } else if (this.status === 404) {
            alert("Can not connect to DB!!!")
        } else {
            alert("Server error!!!")
        }
    }

    xhr.send();
}