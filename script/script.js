var fab2 = document.getElementById("fab2");

function myScroll() {
    var y = window.scrollY;

    if(y>200){
        fab2.style.display ="block";
    }
    else {
        fab2.style.display = "none";
    }
}
var audio = new Audio("sound/tap.wav");

function play() {
    audio.currentTime = 0;
    audio.play();
}



fab2.addEventListener("click", play)


window.addEventListener("scroll", myScroll)