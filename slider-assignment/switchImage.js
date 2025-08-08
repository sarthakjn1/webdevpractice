var img_array = ["./images/leetcode100.png", "./images/linked-in.png", "./images/profile_pic.jpeg", "./images/fish_arrival.png"];
var curImgIndex = 0;

function initializeImageData(){
    const imgElement = document.querySelector("#mid-image");
    imgElement.src = img_array[curImgIndex];
}

function displayPreviousImage() {
    const imgElement = document.querySelector("#mid-image");
    curImgIndex -= 1;
    if (curImgIndex === -1){
        curImgIndex = img_array.length - 1;
    }
    const previousIndex = curImgIndex % img_array.length;
    imgElement.src = img_array[previousIndex];
}

function displayNextImage() {
    const imgElement = document.querySelector("#mid-image");
    curImgIndex += 1;
    const nextIndex = curImgIndex % img_array.length;
    imgElement.src = img_array[nextIndex];
}