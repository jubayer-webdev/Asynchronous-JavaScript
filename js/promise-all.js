const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res(`Promise 2 resolved`);
    }, 2000);
});

promise1.then((result) => console.log(result));
promise2.then((result) => console.log(result));

// multiple promises run concurrently and get all results at a time
Promise.all([promise1, promise2]).then((res) => {
    console.log(res);
});

Promise.race([promise1, promise2]).then((res) => {
    console.log(res);
});

console.log(`hello`);