function personInfo(gender){
    console.log(this.id);
    console.log(this.email);
    console.log(gender);
}

const myObj = {
    id: 4,
    email: "a@gmail.com"
}

personInfo.call(myObj, "male");