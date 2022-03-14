// Все это коды работает СИНХРОННО !!!

const promise = new Promise((resolve, reject) => {
    const sum = 1 + 1;
    if (sum === 2) {
        resolve(sum);

    } else {
        reject('Что то пошло не так...');
    }
});
promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error)
})


const promise2 = new Promise((resolve, reject) => {
    const sum = 1 + 0;
    if (sum === 2) {
        resolve(sum);

    } else {
        reject('Что то пошло не так...');
    }
});
promise2.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error)
})


const promise3 = new Promise((resolve, reject) => {
    const sum = 1 + 0;
    if (sum === 2) {
        resolve(sum);

    } else {
        reject('Что то пошло не так...');
    }
});
promise3.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error)
})