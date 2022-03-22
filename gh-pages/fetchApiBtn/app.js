const db = new DB();
const ui = new UI();

const output = document.querySelector(".output");

db.getUser().then((user) => {
    return ui.showProfile(user.output);
})