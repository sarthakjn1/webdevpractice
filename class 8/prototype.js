function Person(name, email){
    this.name = name;
    this.email = email;
}

Person.prototype.sayHi = function() {
    return `Hi ${this.name}`;
}

Person.prototype.address = "New Home now";

let p1 = new Person("Era", "era@ert.com");
let p2 = new Person("Brian", "br@gmail.com");

console.log(p1.address);
console.log(p1.sayHi());

console.log(p2.address);
console.log(p2.sayHi());