const img = document.querySelectorAll(".slider-container img");
const slider = document.querySelector(".slider-container");
const size = img[0].clientWidth;
var count = 0;
setInterval(next,3000);//to enable auto changing of images
function next() {
    if(count>img.length-2){
        count = -1;
        slider.style.transform = "translateX("+ -size*count +"px)";
    }
    count++;
    slider.style.transition = "transform 1s ease-in-out"
    slider.style.transform = "translateX("+ -size*count +"px)";
}

//for button based transition prev btn funciton ->

// function prev() {
//     if(count<1){
//         count = img.length;
//         slider.style.transform = "translateX("+ -size*count +"px)";
//     }
//     count--;
//     slider.style.transition = "transform 1s ease-in-out"
//     slider.style.transform = "translateX("+ -size*count +"px)";
    

// }