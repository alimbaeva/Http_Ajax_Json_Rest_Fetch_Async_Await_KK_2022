// Работа с user, users json файлами


document.getElementById("get-user").addEventListener("click", loadUser);

function loadUser() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "user.json", true);

    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.response)
            // const user = JSON.parse(this.response)
            // console.log(user)

            const user = JSON.parse(this.response)

            const output = `
                <ul>
                    <li>
                        <span>ID: ${user.id}</span>
                        <h4>${user.name}</h4>
                        <span>Age: ${user.age}</span>
                    </li>
                </ul>
            `;

            document.querySelector(".outputUsers").innerHTML = output;
        } else if (this.status === 404) {
            alert("Can not connect to DB!!!")
        } else {
            alert("Server error!!!")
        }
    }

    xhr.onprogress = function () {
        console.log('readyState:  ' + xhr.readyState)
    }

    xhr.send();
}


document.getElementById("get-users").addEventListener("click", loadUsers);


function loadUsers() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "users.json", true);

    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.response)
            // const user = JSON.parse(this.response)
            // console.log(user)

            const users = JSON.parse(this.response)
            console.log(users);

            let output = "";
            let sum = 0;


            users.forEach(user => {
                sum += user.age;
                output += `
                <li>
                    <span>ID: ${user.id}</span>
                    <h4>${user.name}</h4>
                    <span>Age: ${user.age}</span>
                </li>
                `
            });

            const aveage = sum / users.length;
            console.log(sum);
            document.querySelector(".outputUsers2").innerHTML = output;
            document.querySelector(".age").innerHTML = `Cредний возраст -  ${aveage}`;


        } else if (this.status === 404) {
            alert("Can not connect to DB!!!")
        } else {
            alert("Server error!!!")
        }
    }

    xhr.onprogress = function () {
        console.log('readyState:  ' + xhr.readyState)
    }

    xhr.send();
}