console.log("Start");

let p1 = function(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(message);
        }, delay);
        resolve();
    })
}

p1("Step 1", 1000).then(p1("Step 2", 1000)).then(p1("Step 3", 1000));