const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 1 resolved`);
    }, 5000);
});

const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res(`Promise 2 resolved`);
    }, 2000);
});

Promise.race([promise1, promise2]).then((res) => {
    console.log(res);
});
