const output = document.querySelector(".output");

function product() {
    fetch("db.json")
        .then((res) => {
            return res.json();
        })
        .then((datas) => {

            datas.forEach((data) => {

                const card = document.createElement("div");
                card.setAttribute("class", "card");
                const divImg = document.createElement("div");
                divImg.setAttribute("class", "div-img");
                const img = document.createElement("img");
                img.setAttribute("alt", "foto");
                img.setAttribute("src", `${data.img}`);
                const divText = document.createElement("div");
                divText.setAttribute("class", "div-text");
                const h2 = document.createElement("h2");
                const h4 = document.createElement("h4");
                const p = document.createElement("p");


                h2.innerHTML = `${data.title}`;
                h4.innerHTML = `Price: ${data.price}`;
                p.innerHTML = `${data.desc}`;

                divImg.appendChild(img);
                divText.appendChild(h2);
                divText.appendChild(h4);
                divText.appendChild(p);


                output.appendChild(divImg);
                output.appendChild(divText);
            })

        })
}


product();