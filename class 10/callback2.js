let ar = [7, 56, 2, 9, 3]
let sum = 0

function doAdd(callback) {
    for(let el of ar){
        sum += el
    }
    console.log("Sum is: ", sum);
    setTimeout(callback, 1000);
    console.log("End of operation");
}

function avg(){
    console.log("Average is: ", sum/ar.length)
}

doAdd(avg);