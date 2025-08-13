let computeval = function(action) {
        //Blank Validation
        if (document.getElementById("first").value === '' | document.getElementById("second").value === '') {
            document.getElementById("finalresult").innerHTML = "<strong>Incorrect Input</strong>"
        }
        else{
            let first = parseInt(document.getElementById("first").value);
            let second = parseInt(document.getElementById("second").value);
            performCalculation(action, first, second);      
        }
}

function performCalculation(action, first, second) {
    if (action === "add") {
        document.getElementById("finalresult").innerHTML = first + second;
    }
    else if (action === "sub") {
        document.getElementById("finalresult").innerHTML = first - second;
    }
    else if (action === "multiply") {
        document.getElementById("finalresult").innerHTML = first * second;
    }
}
