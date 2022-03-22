async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const users = await res.json();

    return users;
}

getUsers().then((users) => {
    console.log(users)
})




// ====================

async function myFunc4() {
    const promis = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello*************")
        }, 2000);
    });

    const error = false;

    if (!error) {
        const res = await promis;

        return res;

    } else {
        await Promise.reject(new Error("Ошибка!!!!"));
    }

}

myFunc4().then(res => {
    console.log(res);
})
    .catch((err) => {
        console.log(err);
    });



// ====================


async function myFunc3() {
    const promis = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello*************")
        }, 2000);
    });

    const error = true;

    if (!error) {
        const res = await promis;

        return res;

    } else {
        await Promise.reject(new Error("Ошибка!!!!"));
    }

}

myFunc3().then(res => {
    console.log(res);
})
    .catch((err) => {
        console.log(err);
    });


// =======================

async function myFunc2() {
    const promis = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello!!!!!!!!!")
        }, 2000);
    });

    const res = await promis;

    return res;
}

myFunc2().then(res => {
    console.log(res);
});

// ==================================

async function myFunc() {
    return "hello";
}

myFunc().then(res => {
    console.log(res);
});