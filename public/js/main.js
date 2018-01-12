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

function getData(file) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    }
    xhttp.open("GET", file, true);
    xhttp.send();
}

//getData("../data.json");
