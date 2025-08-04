function validateAndProcess(){
    //Blank validation
        if (document.getElementById("name").value === '' | document.getElementById("reason").value === ''){
            document.getElementById("error-container").innerHTML = "Blank Input!"
        }

    //Mobile number validation
        if (Number.isNaN(parseInt(document.getElementById("mobile").value))){
            document.getElementById("error-container").innerHTML = "Invalid Mobile Number!"
        }
       else{
            personname = document.getElementById("name").value;
            email = document.getElementById("email").value;
            mobile = document.getElementById("mobile").value;
            address = document.getElementById("address").value;
            reason = document.getElementById("reason").value;

            //Store values in local storage

            localStorage.setItem("name", personname);
            localStorage.setItem("email", email);
            localStorage.setItem("mobile", mobile);
            localStorage.setItem("address", address);
            localStorage.setItem("reason", reason);
            openNewPage();
            populateNewPage();
       }
}


function openNewPage() {
    window.open("new-form-details.html");
}

function populateNewPage() {
    //Get values from local storage
    document.getElementById("new-name").innerHTML = "Name: " + localStorage.getItem("name");
    document.getElementById("new-email").innerHTML = "Email: " + localStorage.getItem("email");
    document.getElementById("new-mobile").innerHTML = "Mobile: " + localStorage.getItem("mobile");
    document.getElementById("new-address").innerHTML = "Address: " + localStorage.getItem("address");
    document.getElementById("new-reason").innerHTML = "Reason for contacting: " + localStorage.getItem("reason");

}