const promiseResolve = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task completed");
    }, 1000);
})

promiseResolve.then((res) => {
    document.querySelector("#promise1_container").innerHTML = "<h1 class='text-success'>" + res + "</h1>";
})