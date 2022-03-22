const db = new DB();
const btn = new Btn();

const output = document.querySelector(".output");


db.getUser().then((user) => {
    return btn.filterBtn(user.output);
})


