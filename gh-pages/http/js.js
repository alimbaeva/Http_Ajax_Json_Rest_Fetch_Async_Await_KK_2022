document.getElementById("get-data").addEventListener("click", loadData);

function loadData() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "db.txt", true);

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.response);
        }
    }

    xhr.send();
}