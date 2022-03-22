class UI {
    constructor() {
        this.output = document.getElementById("output");

    }

    showProfile(users) {

        users.forEach((data) => {

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
            const h3 = document.createElement("h3");
            const p = document.createElement("p");


            h2.innerHTML = `${data.title}`;
            h3.innerHTML = `Price: ${data.price}`;
            p.innerHTML = `${data.desc}`;

            divImg.appendChild(img);
            divText.appendChild(h2);
            divText.appendChild(h3);
            divText.appendChild(p);


            card.appendChild(divImg);
            card.appendChild(divText);

            output.appendChild(card)
        })

    }



    // this.output.innerHTML = `
    // <div class="card card-body mb-3">
    //     <div class="row">
    //         <div class="col-md-3">
    //             <img class="img-fluid mb-2" src="${user.avatar_url}">
    //             <a href="${user.html_url}" target="_blank" class="btn btn-primary d-block mb-3">View Profile</a>
    //         </div>
    //         <div class="col-md-9">
    //             <ul class="list-group">
    //                 <li class="list-group-item">Company: ${user.company}</li>
    //                 <li class="list-group-item">Website: ${user.blog}</li>
    //                 <li class="list-group-item">Location: ${user.location}</li>
    //                 <li class="list-group-item">Registered: ${user.created_at}</li>
    //             </ul>
    //         </div>
    //     </div>
    // </div>
    // <h3>Latest Repos</h3>
    // <div id="repos"></div>
    // `
}
