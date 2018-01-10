$(document).ready(function () {
    var video = $(".container-cover video");
    var videoJs = document.querySelector("video");
    var containerVideo = $(".container-cover");
    videoJs.addEventListener("click", function () {
        videoJs.play();
    }); 
    $(video).animate({"top": "20px"}, 1000, function () {
        this.click();
    });
});
