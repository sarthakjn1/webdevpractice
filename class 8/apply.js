function displayStudInfo(...otherInfo) {
    console.log(this.id);
    console.log(this.name);
    console.log(otherInfo[0]);
    console.log(otherInfo[1]);
}

const student = {
    id: 7,
    name: "Prakhar"
}

displayStudInfo.apply(student, ["Sweet Home", "Male"]);

