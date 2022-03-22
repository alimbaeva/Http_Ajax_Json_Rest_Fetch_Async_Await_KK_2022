class DB {
    async getUser() {
        const profileResponse = await fetch(`db.json`)

        const output = await profileResponse.json();

        return {
            output: output,
        };
    }
}

// const output = document.querySelector(".output");

// function product() {
//     fetch("db.json")
//         .then((res) => {
//             return res.json();
//         })
//         .then((datas) => {

//             datas.forEach((data) => {

//                 const card = document.createElement("div");
//                 card.setAttribute("class", "card");
//                 const divImg = document.createElement("div");
//                 divImg.setAttribute("class", "div-img");
//                 const img = document.createElement("img");
//                 img.setAttribute("alt", "foto");
//                 img.setAttribute("src", `${data.img}`);
//                 const divText = document.createElement("div");
//                 divText.setAttribute("class", "div-text");
//                 const h2 = document.createElement("h2");
//                 const h3 = document.createElement("h3");
//                 const p = document.createElement("p");


//                 h2.innerHTML = `${data.title}`;
//                 h3.innerHTML = `Price: ${data.price}`;
//                 p.innerHTML = `${data.desc}`;

//                 divImg.appendChild(img);
//                 divText.appendChild(h2);
//                 divText.appendChild(h3);
//                 divText.appendChild(p);


//                 card.appendChild(divImg);
//                 card.appendChild(divText);

//                 output.appendChild(card)
//             })

//         })
// }


// product();