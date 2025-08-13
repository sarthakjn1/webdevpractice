function getData() {
    return new Promise((resolve, reject) => {

        const url = "https://jsonplaceholder.typicode.com/todos/2";
        
        fetch(url).then((response) => {
            return response.json();
        }).then((data) =>
            resolve(data)
        ).catch((error) => {
            reject("Could not fetch data", error);
        })
    })
}

getData().then((result) => {
    console.log("Title: ", result.title);
    console.log("Completed: ", result.completed);
}).catch((error) =>{
    console.log(error);
})