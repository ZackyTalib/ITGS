let currentImageSliderCount = 0;

function sliderClicked(element){
    for(let i=0; i<document.querySelectorAll(".slider-dots img").length; i++){
        document.querySelectorAll(".slider-dots img")[i].classList.remove("selected");
        document.querySelectorAll(".image-slider img")[i].style.display = "none";
    }
    element.classList.add("selected");
    currentImageSliderCount = parseInt(element.id.substring(3));
    document.querySelectorAll(".image-slider img")[currentImageSliderCount].style.display = "block";
}

setInterval(() => {
    sliderClicked(document.querySelectorAll(".slider-dots img")[currentImageSliderCount]);
    currentImageSliderCount++;
    if(currentImageSliderCount >= document.querySelectorAll(".slider-dots img").length) currentImageSliderCount = 0;
}, 4000);